"use client";

import { styled } from "styled-components";
import { getFonts } from "@/styles/fonts";
import TapMenu from "../common/TapMenu";
import { useState } from "react";
import UpcomingStock from "./UpcomingStock";

type Subscription = "disable" | "able" | "limit";

interface UpcomingStockDataType {
  id: string;
  title: string;
  love: boolean;
  category: string;
  account: string;
  minPrice: number;
  maxPrice: number;
  subscription?: Subscription;
  subscriptionDueDate: string;
  accountDueDate: string;
}

const UpcomingStockSection = () => {
  const [isShowingAllStocks, setIsShowingAllStocks] = useState(false);
  const allUpcomingStockData: UpcomingStockDataType[] = [
    {
      id: "0",
      title: "에이치엠씨아이비스팩6호",
      love: true,
      category: "의료장비 및 서비스",
      account: "대신증권",
      minPrice: 26000,
      maxPrice: 31000,
      subscription: "limit",
      subscriptionDueDate: "8월 25일",
      accountDueDate: "8월 25일",
    },
    {
      id: "1",
      title: "에이엘티",
      love: false,
      category: "자본재",
      account: "대신증권",
      minPrice: 26000,
      maxPrice: 31000,
      subscriptionDueDate: "8월 26일",
      accountDueDate: "8월 25일",
    },
    {
      id: "2",
      title: "시지트로닉스",
      love: true,
      category: "내구 소비재 및 의류",
      account: "시지트로닉스",
      minPrice: 26000,
      maxPrice: 31000,
      subscription: "able",
      subscriptionDueDate: "8월 31일",
      accountDueDate: "8월 16일",
    },
    {
      id: "3",
      title: "에이엘티",
      love: true,
      category: "내구 소비재 및 의류",
      account: "대신증권",
      minPrice: 26000,
      maxPrice: 31000,
      subscription: "disable",
      subscriptionDueDate: "9월 1일",
      accountDueDate: "8월 25일",
    },
  ];
  const filteredUpcomingStockData = allUpcomingStockData.filter((data) => data.subscription !== "disable");
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
        {upcomingStockData.map((data) => (
          <UpcomingStockItem key={data.id}>
            <UpcomingStock.status status={true}>{data.subscriptionDueDate}</UpcomingStock.status>
            <UpcomingStock.cardWrap
              title={data.title}
              love={data.love}
              category={data.category}
              account={data.account}
              price={[data.minPrice, data.maxPrice]}
              subscription={data.subscription}
              date={data.subscriptionDueDate}
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
`;

const UpcomingStockItem = styled.div`
  margin-bottom: 32px;

  &:first-child {
    padding-top: 20px;
  }
`;
