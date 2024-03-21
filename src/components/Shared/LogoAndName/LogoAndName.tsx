import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoAndName = () => {
  return (
    <Link
      href="/"
      className="text-2xl flex items-center leading-none">
      <Image src="/logo.png" width={50} height={50} alt="logo" />
      <div className="flex flex-col">
        <span className="font-bold">Jerin&apos;s</span>
        <span>Parlour</span>
      </div>
    </Link>
  );
};

export default LogoAndName;
