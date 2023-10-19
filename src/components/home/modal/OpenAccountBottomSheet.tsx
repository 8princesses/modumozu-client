import { BottomSheet } from "@/components/common/bottomSheet/BottomSheet";
import InvestmentBankList from "@/components/common/bottomSheet/InvestmentBankList";
import React, { Dispatch, FC, SetStateAction } from "react";

interface OpenAccountBottomSheetProps {
  stockName: string;
  agents: number[];
  setIsShowingDisableStocksModal: Dispatch<SetStateAction<number>>;
  handleClose: () => void;
}

const OpenAccountBottomSheet: FC<OpenAccountBottomSheetProps> = (props) => {
  const { stockName, agents, setIsShowingDisableStocksModal, handleClose } = props;
  return (
    <BottomSheet visible={stockName.length > 0} handleOverlayClick={handleClose}>
      <InvestmentBankList
        stockName={stockName}
        investmentBanks={agents}
        handleClose={handleClose}
        handleClick={setIsShowingDisableStocksModal}
      />
    </BottomSheet>
  );
};

export default OpenAccountBottomSheet;
