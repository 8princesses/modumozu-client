import styled from "styled-components";
import UpcomingStock from "../home/UpcomingStock";
import { FC, useState } from "react";
import { BottomSheet } from "./bottomSheet/BottomSheet";
import { BottomSheetTip } from "./bottomSheet/BottomSheetTip";
import { getBankName } from "@/util/getBankName";
import FullScreenModal from "./FullScreenModal";
import { FullScreenModalDescription } from "../account/AddAccount";
import { getRelatedBankListCnt, getRelatedBankMap } from "@/util/getRelatedBankList";
import RelatedBankBox from "./RelatedBankBox";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import { StockInfoType } from "@/types";
import InvestmentBankList from "./bottomSheet/InvestmentBankList";
import Button from "./Button";
import getDateAfter20BusinessDays from "@/util/getDateAfter20BusinessDays";
import { limitAgent, limitlessAgent } from "@/constants/agentInfo";
import getStoreUrl from "@/util/getStoreUrl";

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
  const after20BusiDate = getDateAfter20BusinessDays();

  const getCardButtonClickHandler = (data: StockInfoType) => {
    const agents = [...data.remainAgents, ...data.nonRemainAgents];

    if (data.proposal.cardType === "E") {
      console.log("test");
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
              />
            </UpcomingStockItem>
          ))}
      </UpcomingStockList>
      <BottomSheet
        visible={isShowingRestrictionBottomSheet > 0}
        handleOverlayClick={() => setIsShowingRestrictionBottomSheet(0)}
      >
        <BottomSheetTip
          investmentBankName={getBankName(isShowingRestrictionBottomSheet) ?? "KB증권"}
          handleButtonClick={() => setIsShowingDetailModal(true)}
          handleClose={() => setIsShowingRestrictionBottomSheet(0)}
        />
      </BottomSheet>
      <FullScreenModal visible={isShowingDetailModal} setInvisible={() => setIsShowingDetailModal(false)}>
        <FullScreenModalDescription>
          <h2>
            다음 증권사들은 연계된
            <br /> 은행을 통해 개설 제한 없이
            <br /> 신규 계좌를 만들 수 있어요.
          </h2>
          <p>
            {getBankName(isShowingRestrictionBottomSheet)} 외 {getRelatedBankListCnt() - 1} 개 증권사들은 20일 이내에
            계좌 개설 내역이 있을 경우, 신규 계좌 개설을 제한하지만 일부 증권사는 연계된 은행을 통해 제한없이 만들 수
            있어요.
          </p>
        </FullScreenModalDescription>
        {Array.from(getRelatedBankMap()).map(([k]) => (
          <RelatedBankBox key={k} name={k} />
        ))}
        <ModalCaption>*증권사 별 연계 은행은 시기에 따라 변경될 수 있습니다.</ModalCaption>
      </FullScreenModal>
      <BottomSheet
        visible={isShowingAgentListBottomSheet.name.length > 0}
        handleOverlayClick={() => setIsShowinAgentListBottomSheet(emptyAgentList)}
      >
        <InvestmentBankList
          stockName={isShowingAgentListBottomSheet.name}
          investmentBanks={isShowingAgentListBottomSheet.agents}
          handleClose={() => setIsShowinAgentListBottomSheet(emptyAgentList)}
          handleClick={setIsShowingDisableStocksModal}
        />
      </BottomSheet>
      <FullScreenModal visible={isShowingDisableStocksModal > 0} setInvisible={() => setIsShowingDisableStocksModal(0)}>
        <FullScreenModalDescription>
          <h2>
            <span>{getBankName(isShowingDisableStocksModal)}</span> 계좌를 개설하면
            <br /> 다음 청약을 넣을 수 없어요.
          </h2>
          <p>
            유안타증권, 한화투자증권, 교보증권 외 19개 증권사들은 20일 이내에 계좌를 개설한 내역이 있을 경우 증권사 계좌
            개설을 막고 있어요.
          </p>
        </FullScreenModalDescription>
        {stockList
          .filter((item) => new Date(item.proposal.needAt) < after20BusiDate)
          .filter(
            (item) => item.remainAgents.length === 0 && !item.nonRemainAgents.includes(isShowingDisableStocksModal),
          )
          .filter((item) => !item.nonRemainAgents.some((agent) => limitlessAgent.includes(agent)))
          .map((data) => (
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
        <Button
          width="100%"
          $font="BUTTON1_SEMIBOLD"
          onClick={() => window.open(getStoreUrl(isShowingDisableStocksModal))}
        >
          계좌 개설
        </Button>
      </FullScreenModal>
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

const UpcomingStockItem = styled.div`
  margin-bottom: 32px;

  &:first-child {
    padding-top: 20px;
  }
`;

const ModalCaption = styled.div`
  ${getFonts("BODY1_REGULAR")}
  color: ${colors.FONT_LIGHT.TERIARY};
`;
