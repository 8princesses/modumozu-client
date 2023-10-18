"use client";
import { styled } from "styled-components";
import { getFonts } from "@/styles/fonts";
import TapMenu from "../common/TapMenu";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import StockList from "../common/StockList";
import { fetchUpcomingStocks } from "@/api/ipo";

const UpcomingStockSection = () => {
  const { isLoading, data } = useQuery({ queryKey: ["fetchUpcomingStocks"], queryFn: fetchUpcomingStocks });
  const [isShowingAllStocks, setIsShowingAllStocks] = useState(false);

  const allUpcomingStockData = data?.ipos ?? [];
  const filteredUpcomingStockData = allUpcomingStockData.filter((data) => data.proposal.cardType !== "B");
  const upcomingStockData = isShowingAllStocks ? allUpcomingStockData : filteredUpcomingStockData;

  const handleChangeTapMenu = (value: boolean) => {
    setIsShowingAllStocks(value);
  };

  return (
    <section>
      <TitleWrapper>
        <Title>다가오는 공모주</Title>
      </TitleWrapper>
      <TapMenu
        onChange={handleChangeTapMenu}
        value={isShowingAllStocks}
        options={[
          { label: `청약 가능한 공모주 ${filteredUpcomingStockData.length}`, value: false },
          {
            label: `전체 공모주 ${allUpcomingStockData.length}`,
            value: true,
          },
        ]}
      />
      <StockList isLoading={isLoading} stockList={upcomingStockData} />
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
