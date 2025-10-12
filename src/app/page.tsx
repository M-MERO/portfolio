"use client";
import SkillPage from "@/components/SkillPage/SkillPage";
import AboutMePage from "@/components/AboutMePage/AboutMePage";
import TopPage from "@/components/TopPage/TopPage";
import Footer from "@/components/Footer/Footer";
import { use, useEffect, useState } from "react";
import { OverlayLoading } from "react-loading-randomizable";
import WorksPage from "@/components/WorksPage/WorksPage";

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
      <OverlayLoading active={isLoading} />
      <TopPage />
      <AboutMePage />
      <WorksPage />
      <SkillPage />
      <Footer />
    </div>
  );
}
