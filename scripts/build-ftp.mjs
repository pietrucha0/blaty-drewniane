// Builds the site as plain files in out/ for FTP hosting (upload the contents of out/).
// The /api route needs a Node server, so it is moved aside for this build only.
// Afterwards every photo is pre-rendered at smaller widths (name.w<width>.webp),
// which src/lib/image-loader.ts points the pages at.
import { execSync } from "node:child_process";
import { existsSync, readdirSync, renameSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";

const WIDTHS = [256, 384, 640, 828, 1080, 1600, 2048]; // = FTP_IMAGE_WIDTHS

const api = "src/app/api";
const parked = "scripts/.api-parked";
const moved = existsSync(api);
if (moved) renameSync(api, parked);
try {
  execSync("next build", { stdio: "inherit", env: { ...process.env, STATIC_EXPORT: "1" } });
} finally {
  if (moved) renameSync(parked, api);
}

const media = "out/_next/static/media";
const photos = readdirSync(media).filter((f) => /\.(webp|jpe?g|png)$/i.test(f) && !/\.w\d+\.webp$/.test(f));
for (const file of photos) {
  const base = file.replace(/\.(webp|jpe?g|png)$/i, "");
  await Promise.all(
    WIDTHS.map((w) =>
      sharp(path.join(media, file))
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: w <= 384 ? 60 : 72 })
        .toFile(path.join(media, `${base}.w${w}.webp`)),
    ),
  );
}
console.log(`Pre-rendered ${photos.length} photos at ${WIDTHS.length} widths.`);

// Apache/LiteSpeed hosting (most Polish hosts): compression, long caching for
// the hashed files in /_next/static, and the custom 404 page.
writeFileSync(
  "out/.htaccess",
  `ErrorDocument 404 /404.html

<IfModule mod_rewrite.c>
  RewriteEngine On

  # One address for Google: https://www.blatydrewniane.eu (same as the sitemap).
  RewriteCond %{HTTPS} off [OR]
  RewriteCond %{HTTP_HOST} !^www\\. [NC]
  RewriteRule ^(.*)$ https://www.blatydrewniane.eu/$1 [R=301,L]

  # Pages of the old shop (e.g. /blaty-z-drewna-egzotycznego-c-1.html,
  # /product_info.php) are still in Google: send them to the new home page.
  # Google Search Console verification files (google<code>.html) are left alone.
  RewriteCond %{REQUEST_URI} !^/(index|404|google[0-9a-f]+)\\.html$
  RewriteRule ^[^/]+\\.(html?|php)$ https://www.blatydrewniane.eu/? [R=301,L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/css text/xml application/xml application/javascript application/json image/svg+xml
</IfModule>

<IfModule mod_headers.c>
  # Basic security headers: HTTPS only, no MIME sniffing, no framing by other sites.
  Header always set Strict-Transport-Security "max-age=31536000"
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=()"

  <If "%{REQUEST_URI} =~ m#^/_next/static/#">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </If>
</IfModule>
`,
);
console.log("Wrote out/.htaccess");
