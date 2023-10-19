import { FullScreenModalDescription } from "@/components/account/AddAccount";
import Button from "@/components/common/Button";
import FullScreenModal from "@/components/common/FullScreenModal";
import { UpcomingStockItem } from "@/components/common/StockList";
import { getBankName } from "@/util/getBankName";
import getDateAfter20BusinessDays from "@/util/getDateAfter20BusinessDays";
import getStoreUrl from "@/util/getStoreUrl";
import React, { FC } from "react";
import UpcomingStock from "../UpcomingStock";
import { limitlessAgent } from "@/constants/agentInfo";
import { StockInfoType } from "@/types";

interface OpenAccountFullProps {
  agentId: number;
  stockList: StockInfoType[];
  handleClose: () => void;
}

const OpenAccountFull: FC<OpenAccountFullProps> = (props) => {
  const { agentId, handleClose, stockList } = props;
  const after20BusiDate = getDateAfter20BusinessDays();
  return (
    <FullScreenModal visible={agentId > 0} setInvisible={handleClose}>
      <FullScreenModalDescription>
        <h2>
          <span>{getBankName(agentId)}</span> 계좌를 개설하면
          <br /> 다음 청약을 넣을 수 없어요.
        </h2>
        <p>
          유안타증권, 한화투자증권, 교보증권 외 19개 증권사들은 20일 이내에 계좌를 개설한 내역이 있을 경우 증권사 계좌
          개설을 막고 있어요.
        </p>
      </FullScreenModalDescription>
      {stockList
        .filter((item) => new Date(item.proposal.needAt) < after20BusiDate)
        .filter((item) => item.remainAgents.length === 0 && !item.nonRemainAgents.includes(agentId))
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
      <Button width="100%" $font="BUTTON1_SEMIBOLD" onClick={() => window.open(getStoreUrl(agentId))}>
        계좌 개설
      </Button>
    </FullScreenModal>
  );
};

export default OpenAccountFull;
