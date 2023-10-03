import { FC } from "react";
import { Overlay } from "../Overlay";
import styled from "styled-components";
import colors from "@/styles/colors";

interface BottomSheetProps {
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
  const { handleOverlayClick, children } = props;
  return (
    <Overlay onClick={handleOverlayClick}>
      <BottomSheetBox onClick={(e) => e.stopPropagation()}>{children}</BottomSheetBox>
    </Overlay>
  );
};

const BottomSheetBox = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 50%;
  translate: -50%;
  background-color: ${colors.WHITE};
  border-radius: 16px 16px 0 0;
  padding: 20px 16px 20px 16px;
  width: 375px;

  @media (max-width: 375px) {
    width: 100vw;
  }
`;
