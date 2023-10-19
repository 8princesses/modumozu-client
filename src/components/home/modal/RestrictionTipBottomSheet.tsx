import { BottomSheet } from "@/components/common/bottomSheet/BottomSheet";
import { BottomSheetTip } from "@/components/common/bottomSheet/BottomSheetTip";
import { getBankName } from "@/util/getBankName";
import React, { FC } from "react";

interface RestrictionTipBottomSheetProps {
  isShowingRestrictionBottomSheet: number;
  showDetailModal: () => void;
  handleClose: () => void;
}

const RestrictionTipBottomSheet: FC<RestrictionTipBottomSheetProps> = (props) => {
  const { isShowingRestrictionBottomSheet, showDetailModal, handleClose } = props;
  return (
    <BottomSheet visible={isShowingRestrictionBottomSheet > 0} handleOverlayClick={handleClose}>
      <BottomSheetTip
        investmentBankName={getBankName(isShowingRestrictionBottomSheet) ?? "KB증권"}
        handleButtonClick={showDetailModal}
        handleClose={handleClose}
      />
    </BottomSheet>
  );
};

export default RestrictionTipBottomSheet;
