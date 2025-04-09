import Features from "@/components/features/Features";

import Hero from "@/components/hero/Hero";
import Instagram from "@/components/instagram/Instagram";
import Services from "@/components/services/Services";
import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <>
    <Hero />
    <Features />
    <Services />
    <Instagram />
    
    </>
     
    // </div>
  );
}
