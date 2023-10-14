"use client";
import { styled } from "styled-components";
import { getFonts } from "@/styles/fonts";
import TapMenu from "../common/TapMenu";
import { useState } from "react";
import UpcomingStock from "./UpcomingStock";
import { fetchUpcomingStocks } from "@/service/homeApiService";
import { useQuery } from "@tanstack/react-query";

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
      <UpcomingStockList>
        {!isLoading &&
          upcomingStockData.map((data) => (
            <UpcomingStockItem key={data.id}>
              <UpcomingStock.status startDate={data.offerBeginAt} endDate={data.offerEndAt} />
              <UpcomingStock.cardWrap
                id={data.id}
                title={data.name}
                love={data.pinned}
                category={data.category}
                account={data.remainAgents}
                nonRemainAccounts={data.nonRemainAgents}
                price={[data.minDesiredOfferPrice, data.maxDesiredOfferPrice]}
                cardType={data.proposal.cardType}
                proposalAgent={data.proposal.agentId}
                proposalEndDate={data.proposal.needAt}
              />
            </UpcomingStockItem>
          ))}
      </UpcomingStockList>
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
  padding-inline: 16px;
  min-height: 80vh;
`;

const UpcomingStockItem = styled.div`
  margin-bottom: 32px;

  &:first-child {
    padding-top: 20px;
  }
`;
