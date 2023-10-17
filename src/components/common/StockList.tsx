import styled from "styled-components";
import UpcomingStock from "../home/UpcomingStock";
import { FC } from "react";
import { StockInfoType } from "@/service/interestingApiService";

interface StockListProps {
  isLoading: boolean;
  stockList: StockInfoType[];
}

const StockList: FC<StockListProps> = (props) => {
  const { isLoading, stockList } = props;
  return (
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
            />
          </UpcomingStockItem>
        ))}
    </UpcomingStockList>
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
