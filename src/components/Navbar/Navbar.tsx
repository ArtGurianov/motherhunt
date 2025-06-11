import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="w-full h-nav flex justify-between items-center sticky z-10 top-0 border-b-4 bg-secondary-background/30">
      <Link href="/" className="px-6 py-2 h-full">
        <Image
          src="/motherhunt-logo.png"
          width="0"
          height="0"
          sizes="100vw"
          alt="MotherHunt"
          className="h-full w-full"
          priority
        />
      </Link>
    </nav>
  );
};
