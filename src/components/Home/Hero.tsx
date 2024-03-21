import React from "react";
import { Navbar } from "@/components/Shared/Navbar/Navbar";
import { Button } from "../ui/button";
import hero from "/src/assets/hero.png";
import Image from "next/image";
const Hero = () => {
  return (
    <header className="bg-orange-50/60 dark:bg-slate-950 shadow-sm">
      <Navbar />
      <div className="container py-7 flex lg:flex-row flex-col gap-10 items-center justify-between">
        <div>
          <h1 className="text-5xl leading-snug font-extrabold text-[#111430] dark:text-white">
            BEAUTIFUL SALON <br /> FOR EVERY WOMEN
          </h1>
          <p className="text-[#666666] dark:text-gray-400 my-7">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Purus commodo ipsum duis <br />
            laoreet maecenas. Feugiat{" "}
          </p>
          <Button>Get an Appointment</Button>
        </div>
        <Image
          width={484}
          height={478}
          src={hero}
          className="rounded-lg"
          alt="hero.png"
        />
      </div>
    </header>
  );
};

export default Hero;
