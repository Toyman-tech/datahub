import LandingPage from "@/components/LandingPage";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Image from "next/image";
import Agent from "@/components/Agent";
import Rating from "@/components/Rating";
import DataPlans from "@/components/DataPlans";
import Reviews from "@/components/Reviews";


export default function Home() {
  return (
    <main className="relative w-[100vw] ">
      <LandingPage/>
      <Services/>
      <AboutUs/>
      <Agent/>
      <Rating/>
      <DataPlans/>
      <Reviews/>
    </main>
  );
}
