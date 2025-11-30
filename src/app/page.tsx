"use client";
import SkillPage from "@/components/SkillPage/SkillPage";
import AboutMePage from "@/components/AboutMePage/AboutMePage";
import TopPage from "@/components/TopPage/TopPage";
import Footer from "@/components/Footer/Footer";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import WorksPage from "@/components/WorksPage/WorksPage";

const DynamicOverlayLoading = dynamic(
  () => import("@/components/OverlayLoading/OverlayLoading"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const timerMillSec = 1000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, timerMillSec);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <DynamicOverlayLoading active={isLoading} />
      <TopPage />
      <AboutMePage />
      <WorksPage />
      <SkillPage />
      <Footer />
    </div>
  );
}
