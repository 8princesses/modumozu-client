"use client";

import { styled } from "styled-components";
import { getFonts } from "@/styles/fonts";
import ScopeBar from "../common/ScopeBar";
import { useState } from "react";

const UpcomingStockSection = () => {
  const [isShowingAllStocks, setIsShowingAllStocks] = useState(false);

  return (
    <section>
      <TitleWrapper>
        <Title>다가오는 공모주</Title>
      </TitleWrapper>
      <ScopeBar
        isShowingAllStocks={isShowingAllStocks}
        setIsShowingAllStocks={setIsShowingAllStocks}
        allStocksCount={5}
        availableStocksCount={4}
      />
      <UpcomingStockList>card</UpcomingStockList>
    </section>
  );
};

export default UpcomingStockSection;

const Title = styled.h1`
  ${getFonts("H1_SEMIBOLD")};
  padding-inline: 16px;
`;

const TitleWrapper = styled.div`
  margin-top: 32px;
  margin-bottom: 12px;
`;

const UpcomingStockList = styled.div`
  background: linear-gradient(180deg, #f7f8f9 0%, #f7f8f9 93.35%, rgba(247, 248, 249, 0) 100%);
  padding-bottom: 80px;
`;
