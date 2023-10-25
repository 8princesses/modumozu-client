import styled from "styled-components";
import UpcomingStock from "../home/UpcomingStock";
import { FC, useState } from "react";
import { StockInfoType } from "@/types";
import { limitAgent } from "@/constants/agentInfo";
import getStoreUrl from "@/util/getStoreUrl";
import RestrictionTipBottomSheet from "../home/modal/RestrictionTipBottomSheet";
import RestrictionDetailFull from "../home/modal/RestrictionDetailFull";
import OpenAccountBottomSheet from "../home/modal/OpenAccountBottomSheet";
import OpenAccountFull from "../home/modal/OpenAccountFull";
import { useRouter } from "next/navigation";

interface StockListProps {
  isLoading: boolean;
  stockList: StockInfoType[];
}

interface AgentList {
  name: string;
  agents: number[];
}

const emptyAgentList = {
  name: "",
  agents: [],
};

const StockList: FC<StockListProps> = (props) => {
  const { isLoading, stockList } = props;
  const [isShowingRestrictionBottomSheet, setIsShowingRestrictionBottomSheet] = useState(0);
  const [isShowingDisableStocksModal, setIsShowingDisableStocksModal] = useState(0);
  const [isShowingAgentListBottomSheet, setIsShowinAgentListBottomSheet] = useState<AgentList>(emptyAgentList);
  const [isShowingDetailModal, setIsShowingDetailModal] = useState(false);
  const router = useRouter();

  const getCardButtonClickHandler = (data: StockInfoType) => {
    const agents = [...data.remainAgents, ...data.nonRemainAgents];

    if (data.proposal.cardType === "E") {
      return setIsShowingRestrictionBottomSheet(data.nonRemainAgents[0]);
    }
    if (data.proposal.cardType === "C" && !agents.some((item) => limitAgent.includes(item))) {
      return window.open(getStoreUrl(agents[0]));
    }
    if (agents.length === 1) {
      return setIsShowingDisableStocksModal(
        data.remainAgents.length > 0 ? data.remainAgents[0] : data.nonRemainAgents[0],
      );
    }
    return setIsShowinAgentListBottomSheet({
      name: data.name,
      agents: agents,
    });
  };

  return (
    <>
      <UpcomingStockList>
        {!isLoading &&
          stockList.map((data) => (
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
                onClick={() => getCardButtonClickHandler(data)}
                handleCardClick={() => router.push(`/detail/${data.id}`)}
              />
            </UpcomingStockItem>
          ))}
      </UpcomingStockList>
      <RestrictionTipBottomSheet
        isShowingRestrictionBottomSheet={isShowingRestrictionBottomSheet}
        showDetailModal={() => setIsShowingDetailModal(true)}
        handleClose={() => setIsShowingRestrictionBottomSheet(0)}
      />
      <RestrictionDetailFull
        isShowingDetailModal={isShowingDetailModal}
        isShowingRestrictionBottomSheet={isShowingRestrictionBottomSheet}
        handleClose={() => setIsShowingDetailModal(false)}
      />
      <OpenAccountBottomSheet
        stockName={isShowingAgentListBottomSheet.name}
        agents={isShowingAgentListBottomSheet.agents}
        setIsShowingDisableStocksModal={setIsShowingDisableStocksModal}
        handleClose={() => setIsShowinAgentListBottomSheet(emptyAgentList)}
      />
      <OpenAccountFull
        agentId={isShowingDisableStocksModal}
        stockList={stockList}
        handleClose={() => setIsShowingDisableStocksModal(0)}
      />
    </>
  );
};

export default StockList;

const UpcomingStockList = styled.div`
  background: linear-gradient(180deg, #f7f8f9 0%, #f7f8f9 93.35%, rgba(247, 248, 249, 0) 100%);
  padding-bottom: 80px;
  padding-inline: 16px;
  min-height: 80vh;
`;

export const UpcomingStockItem = styled.div`
  margin-bottom: 32px;

  &:first-child {
    padding-top: 20px;
  }
`;
