import type { NextConfig } from "next";

// STATIC_EXPORT=1 (npm run build:ftp) builds plain HTML files into out/ for
// ordinary FTP hosting. The default build is for Vercel.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const, trailingSlash: true } : {}),
  env: { NEXT_PUBLIC_STATIC_EXPORT: staticExport ? "1" : "" },
  images: staticExport
    ? {
        // No image server on FTP hosting: photos are pre-rendered at these
        // widths by scripts/build-ftp.mjs (keep in sync with FTP_IMAGE_WIDTHS).
        loader: "custom",
        loaderFile: "./src/lib/image-loader.ts",
        deviceSizes: [640, 828, 1080, 1600, 2048],
        imageSizes: [256, 384],
      }
    : {
        // 60 is used for the small wood swatches, 75 is the default for photos.
        qualities: [60, 75],
      },
};

export default nextConfig;
