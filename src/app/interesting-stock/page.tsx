"use client";

import TapMenu from "@/components/common/TapMenu";
import { getFonts } from "@/styles/fonts";
import HeartIcon from "@/svg/HeartIcon";
import { FC, useState } from "react";
import styled from "styled-components";

type status = "ALL" | "READY" | "IN_PROGRESS" | "DONE";

type Subscription = "disable" | "able" | "limit";

interface DummyInterestingStockType {
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

const MyPage: FC = () => {
  const [menuState, setMenuState] = useState<status>("ALL");

  const dummyInterestingStocks: DummyInterestingStockType[] = [];

  return (
    <>
      <TapMenu
        onChange={setMenuState}
        value={menuState}
        options={[
          { label: "전체 0", value: "ALL" },
          { label: "청약전 0", value: "READY" },
          { label: "청약중 0", value: "IN_PROGRESS" },
          { label: "청약종료 0", value: "DONE" },
        ]}
      />
      {/* TODO : 데이터 있으면 UpComingStock 카드 재활용 */}
      {dummyInterestingStocks.length === 0 ? (
        <EmptyInterestingStockList>
          <HeartIcon.fill width={80} height={80} />
          <h3>아직 관심 공모주가 없어요.</h3>
        </EmptyInterestingStockList>
      ) : null}
    </>
  );
};

export default MyPage;

const EmptyInterestingStockList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;

  h3 {
    padding-top: 8px;
    ${getFonts("H3_SEMIBOLD")}
  }
`;
