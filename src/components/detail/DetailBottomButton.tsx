import styled from "styled-components";
import Button from "../common/Button";
import { Proposal } from "@/dto/detail";
import { FC, useState } from "react";
import dayjs from "dayjs";
import RestrictionTipBottomSheet from "../home/modal/RestrictionTipBottomSheet";
import RestrictionDetailFull from "../home/modal/RestrictionDetailFull";
import OpenAccountBottomSheet from "../home/modal/OpenAccountBottomSheet";

interface DetailBottomButton {
  proposal: Proposal;
  offerBeginAt: string;
  agentIdList: number[];
  ipoName: string;
}
type BottomSheetType = "restriction" | "open" | "detail" | null;

const DetailBottomButton: FC<DetailBottomButton> = ({ proposal, offerBeginAt, agentIdList, ipoName }) => {
  const [bottomSheetType, setBottomSheetType] = useState<BottomSheetType>(null);

  const handleRestrictionTipClick = () => {
    setBottomSheetType("restriction");
  };
  const handleOpenAccountClick = () => {
    setBottomSheetType("open");
  };
  const handleRestrictionTipDetailClick = () => {
    setBottomSheetType("detail");
  };
  const handleBottomSheetClose = () => {
    setBottomSheetType(null);
  };

  const renderButton = () => {
    const today = dayjs();
    switch (proposal.cardType) {
      case "A":
        return (
          <Button disabled width="100%">
            청약이 종료된 공모주
          </Button>
        );
      case "B":
        return (
          <Button color="secondary" disabled width="100%">
            청약할 수 없는 공모주
          </Button>
        );
      case "C":
        return (
          <Button width="100%" onClick={handleOpenAccountClick}>
            계좌개설
          </Button>
        );
      case "D":
        if (today.diff(dayjs(offerBeginAt), "day") > 0) {
          return (
            <Button width="100%" onClick={handleOpenAccountClick}>
              청약하기
            </Button>
          );
        }
        return (
          <Button disabled width="100%">
            {dayjs(offerBeginAt).format("MM월 DD일")}부터 청약 가능
          </Button>
        );
      case "E":
        return (
          <Button color="secondary" width="100%" onClick={handleRestrictionTipClick}>
            계좌 개설 제한 해제
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <BottomButtonWrap>
      {renderButton()}
      <RestrictionTipBottomSheet
        isShowingRestrictionBottomSheet={bottomSheetType === "restriction" ? 1 : 0}
        showDetailModal={handleRestrictionTipDetailClick}
        handleClose={handleBottomSheetClose}
      />
      <RestrictionDetailFull
        isShowingDetailModal={bottomSheetType === "detail"}
        isShowingRestrictionBottomSheet={1}
        handleClose={handleRestrictionTipClick}
      />

      <OpenAccountBottomSheet
        stockName={bottomSheetType === "open" && ipoName.length > 0 ? ipoName : ""}
        agents={agentIdList}
        handleClose={handleBottomSheetClose}
        onInvestmentBankClick={() => {}}
      />
      {/* <OpenAccountFull
        agentId={isShowingDisableStocksModal}
        stockList={stockList}
        handleClose={() => setIsShowingDisableStocksModal(0)}
      /> */}
    </BottomButtonWrap>
  );
};

export default DetailBottomButton;

const BottomButtonWrap = styled.div`
  padding: 16px 16px 20px 16px;
`;
