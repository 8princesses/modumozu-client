import { FC } from "react";
import { BottomSheetTitle } from "./BottomSheetTitle";
import InvestmentBankCardList from "../InvestmentBankCardList";
import { BottomSheetButton } from "./BottomSheetGuide";

interface InvestmentBankListProps {
  /**
   * 공모주명
   */
  stockName: string;
  /**
   * 주간사 리스트
   */
  investmentBanks: number[];
}

const InvestmentBankList: FC<InvestmentBankListProps> = (props) => {
  const { stockName, investmentBanks } = props;
  const shortStockName = stockName.length > 8 ? stockName.slice(0, 8) + "..." : stockName;

  return (
    <>
      <BottomSheetTitle>
        <h2>
          <span>{shortStockName}</span>의 주간사
        </h2>
        <p>{investmentBanks.length}개</p>
      </BottomSheetTitle>
      <InvestmentBankCardList investmentBanks={investmentBanks} />
      <BottomSheetButton color="secondary" fill={false} width="100%" $font="BUTTON1_REGULAR">
        닫기
      </BottomSheetButton>
    </>
  );
};

export default InvestmentBankList;
