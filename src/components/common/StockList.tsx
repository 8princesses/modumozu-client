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

interface StockListProps {
  isLoading: boolean;
  stockList: StockInfoType[];
}

const StockList: FC<StockListProps> = (props) => {
  const { isLoading, stockList } = props;
  const [isShowingRestrictionBottomSheet, setIsShowingRestrictionBottomSheet] = useState(0);
  const [isShowingDetailModal, setIsShowingDetailModal] = useState(false);

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
                onClick={
                  data.proposal.cardType == "E"
                    ? () => {
                        setIsShowingRestrictionBottomSheet(data.nonRemainAgents[0]);
                      }
                    : () => {}
                }
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
