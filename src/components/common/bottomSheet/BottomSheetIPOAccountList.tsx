import { FC } from "react";
import { BottomSheet } from "./BottomSheet";

interface BottomSheetIPOAccountListProps {
  visible: boolean;
  onClose: () => void;
}

const BottomSheetIPOAccountList: FC<BottomSheetIPOAccountListProps> = ({ visible, onClose }) => {
  return (
    <BottomSheet visible={visible} handleOverlayClick={onClose}>
      안녕
    </BottomSheet>
  );
};

export default BottomSheetIPOAccountList;
