"use client";

import { FC } from "react";
import UpcomingStockSection from "@/components/home/UpcomingStockSection";
import EndedStockSection from "@/components/home/EndedStockSection";

const HomePage: FC = () => {
  return (
    <>
      <UpcomingStockSection />
      <EndedStockSection />
    </>
  );
};

export default HomePage;
