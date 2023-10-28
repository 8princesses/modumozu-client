import { FC } from "react";
import styled from "styled-components";
import colors from "@/styles/colors";
import Modal from "../Modal";

export interface BottomSheetProps {
  /**
   * 화면에 노출 시킬지 여부
   */
  visible: boolean;
  /**
   * 오버레이 클릭 핸들러
   */
  handleOverlayClick: () => void;
  /**
   * 바텀시트 컨텐츠
   */
  children: React.ReactNode;
}

export const BottomSheet: FC<BottomSheetProps> = (props) => {
  const { visible, handleOverlayClick, children } = props;

  return (
    <Modal visible={visible} onOutsideClick={handleOverlayClick}>
      <BottomSheetWrapper>
        <BottomSheetBox onClick={(e) => e.stopPropagation()}>{children}</BottomSheetBox>
      </BottomSheetWrapper>
    </Modal>
  );
};

const BottomSheetWrapper = styled.div`
  width: 375px;
`;

const BottomSheetBox = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  max-height: 95vh;
  overflow: scroll;
  background-color: ${colors.WHITE};
  border-radius: 16px 16px 0 0;
  padding: 20px 16px 0 16px;
  width: 375px;

  @media (max-width: 375px) {
    width: 100vw;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;
