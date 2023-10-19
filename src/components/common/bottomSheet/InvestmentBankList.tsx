import { Dispatch, FC, SetStateAction } from "react";
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
  /**
   * 닫기 버튼 핸들러
   */
  handleClose: () => void;
  /**
   * 증권사 버튼 클릭 핸들러
   */
  handleClick: Dispatch<SetStateAction<number>>;
}

const InvestmentBankList: FC<InvestmentBankListProps> = (props) => {
  const { stockName, investmentBanks, handleClose, handleClick } = props;
  const shortStockName = stockName.length > 8 ? stockName.slice(0, 8) + "..." : stockName;

  return (
    <>
      <BottomSheetTitle>
        <h2>
          <span>{shortStockName}</span>의 주간사
        </h2>
        <p>{investmentBanks.length}개</p>
      </BottomSheetTitle>
      <InvestmentBankCardList investmentBanks={investmentBanks} handleClick={handleClick} />
      <BottomSheetButton color="secondary" fill={false} width="100%" $font="BUTTON1_REGULAR" onClick={handleClose}>
        닫기
      </BottomSheetButton>
    </>
  );
};

export default InvestmentBankList;
