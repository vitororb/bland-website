"use client";

import { Divisor } from "@/components/Divisor";
import { Footer } from "@/components/Footer";
import { GastronomySection } from "@/components/GastronomySection";
import { PromotionSection } from "@/components/PromotionSection";
import { SexShopSection } from "@/components/SexShopSection";
import { SuiteSection } from "@/components/SuiteSection";
import { Navbar } from "../components/Navbar/";

export default function Home() {
  return (
    <main className="flex flex-col w-screen gap-8">
      <Navbar />
      <Divisor />
      <SuiteSection />
      <Divisor />
      <GastronomySection />
      <Divisor />
      <SexShopSection />
      <Divisor />
      <PromotionSection />
      <Divisor />
      <Footer />
    </main>
  );
}
