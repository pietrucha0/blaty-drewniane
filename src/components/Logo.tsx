import Image from "next/image";
import logoImg from "../../public/images/logo-blatydrewniane.png";

// The owner's existing raster logo (from meblekw.pl), shown on a cream label
// exactly like the label stuck on the company's wood samples.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center bg-cream px-2 py-1 shadow-[0_2px_8px_rgba(0,0,0,0.35)] ${className}`}
    >
      <Image
        src={logoImg}
        alt="BlatyDrewniane.eu — naturalnie…"
        priority
        className="h-8 w-auto sm:h-9"
      />
    </span>
  );
}
