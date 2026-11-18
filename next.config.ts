import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 60 is used for the small wood swatches, 75 is the default for photos.
    qualities: [60, 75],
  },
};

export default nextConfig;
