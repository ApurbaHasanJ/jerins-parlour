import Image from "next/image";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";

export default function Home() {
  return (
    <main>
      <Hero />

      <div className="dark:bg-slate-950/70">
        <Services />
      </div>
    </main>
  );
}
