import { BottomSheet } from "@/components/common/bottomSheet/BottomSheet";
import InvestmentBankList from "@/components/common/bottomSheet/InvestmentBankList";
import React, { FC } from "react";

interface OpenAccountBottomSheetProps {
  stockName: string;
  agents: number[];
  onInvestmentBankClick?: (id: number) => void;
  handleClose: () => void;
}

const OpenAccountBottomSheet: FC<OpenAccountBottomSheetProps> = (props) => {
  const { stockName, agents, onInvestmentBankClick, handleClose } = props;
  return (
    <BottomSheet visible={stockName.length > 0} handleOverlayClick={handleClose}>
      <InvestmentBankList
        stockName={stockName}
        investmentBanks={agents}
        handleClose={handleClose}
        handleClick={onInvestmentBankClick}
      />
    </BottomSheet>
  );
};

export default OpenAccountBottomSheet;
