import Image from "next/image";
import logoImg from "../../public/images/logo-blatydrewniane-jasne.svg";

// The owner's logo, traced to SVG with a transparent background. This is the
// light variant for the site's dark surfaces: the brown parts are cream so the
// tree and wordmark stay legible on umber; the yellow is unchanged.
// The original brown version lives at /images/logo-blatydrewniane.svg.
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <Image
        src={logoImg}
        alt="BlatyDrewniane.eu — naturalnie…"
        priority
        className="h-11 w-auto sm:h-12"
      />
    </span>
  );
}
