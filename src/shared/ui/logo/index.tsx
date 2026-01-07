import Image from "next/image";

export const Logo = () => (
  <Image
    src="/icons/logo.svg"
    alt="Logo"
    loading="eager"
    className="w-20 h-11 md:w-28 md:h-14.5"
    width={112}
    height={60}
  />
);
