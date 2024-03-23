import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Promotion from "@/components/Home/Promotion";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Promotion />
    </main>
  );
}
