import colors from "@/styles/colors";
import { FC } from "react";
import styled from "styled-components";

interface OverlayProps {
  /**
   * 오버레이 클릭 핸들러
   */
  onClick: () => void;
  /**
   * 오버레이 내부 컨텐츠
   */
  children: React.ReactNode;
}

export const Overlay: FC<OverlayProps> = (props) => {
  const { onClick, children } = props;
  return <OverlayBox onClick={onClick}>{children}</OverlayBox>;
};

const OverlayBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${colors.BLACK_TRANSPARENT_SCALE[5]};
`;
