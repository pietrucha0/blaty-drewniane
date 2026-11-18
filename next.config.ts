import type { NextConfig } from "next";

// STATIC_EXPORT=1 (npm run build:ftp) builds plain HTML files into out/ for
// ordinary FTP hosting. The default build is for Vercel.
const staticExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const, trailingSlash: true } : {}),
  env: { NEXT_PUBLIC_STATIC_EXPORT: staticExport ? "1" : "" },
  images: {
    // FTP hosting has no image server, so photos are served as prepared files.
    unoptimized: staticExport,
    // 60 is used for the small wood swatches, 75 is the default for photos.
    qualities: [60, 75],
  },
};

export default nextConfig;
