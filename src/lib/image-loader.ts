// Image loader for the FTP build (npm run build:ftp). There is no image server
// on plain hosting, so scripts/build-ftp.mjs pre-renders every photo at the
// widths below as name.w<width>.webp next to the original.
export const FTP_IMAGE_WIDTHS = [256, 384, 640, 828, 1080, 1600, 2048];

export default function ftpImageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/_next/static/media/") || src.endsWith(".svg")) return src;
  return src.replace(/\.(webp|jpe?g|png)$/i, `.w${width}.webp`);
}
