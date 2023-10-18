"use client";

import { fetchInterestingStocks } from "@/api/interesting";
import StockList from "@/components/common/StockList";
import TapMenu from "@/components/common/TapMenu";
import Toast from "@/components/common/Toast";
import { getFonts } from "@/styles/fonts";
import HeartIcon from "@/svg/HeartIcon";
import { StockCountInfoType, StockInfoType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { FC, useEffect, useState } from "react";
import styled from "styled-components";

type status = "TOTAL" | "READY" | "IN_PROGRESS" | "DONE";

const emptyCountInfo = {
  total: 0,
  ready: 0,
  inProgress: 0,
  done: 0,
};

const MyPage: FC = () => {
  const [menuState, setMenuState] = useState<status>("TOTAL");
  const { isLoading, data } = useQuery({
    queryKey: ["fetchInterestingStocks"],
    queryFn: fetchInterestingStocks,
  });
  const [interestingStockCount, setInterestingStockCount] = useState<StockCountInfoType>(emptyCountInfo);
  const [interestingStockList, setInterestingStockList] = useState<StockInfoType[]>([]);
  const visibleStocks =
    menuState === "TOTAL" ? interestingStockList : interestingStockList.filter((ipo) => ipo.status === menuState);

  useEffect(() => {
    setInterestingStockList(data?.ipos ?? []);
    setInterestingStockCount(data?.count ?? emptyCountInfo);
  }, [data]);

  return (
    <>
      <TapMenu
        onChange={setMenuState}
        value={menuState}
        options={[
          { label: "전체 " + interestingStockCount.total, value: "TOTAL" },
          { label: "청약전 " + interestingStockCount.ready, value: "READY" },
          { label: "청약중 " + interestingStockCount.inProgress, value: "IN_PROGRESS" },
          { label: "청약종료 " + interestingStockCount.done, value: "DONE" },
        ]}
      />
      {visibleStocks.length === 0 ? (
        <EmptyInterestingStockList>
          <HeartIcon.fill width={80} height={80} />
          <h3>아직 관심 공모주가 없어요.</h3>
        </EmptyInterestingStockList>
      ) : (
        <StockList isLoading={isLoading} stockList={visibleStocks} />
      )}
      <Toast />
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
