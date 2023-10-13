"use client";
import { FC, ReactNode, useEffect } from "react";
import Portal from "./Portal";
import styled from "styled-components";
import colors from "@/styles/colors";
import XIcon from "@/svg/XIcon";

interface ModalProps {
  /**
   * 화면에 노출 시킬지 여부
   */
  visible: boolean;
  /**
   * 모달 창 끄기
   */
  setInvisible: () => void;
  /**
   * 모달 컨텐츠
   */
  children: ReactNode;
}

const FullScreenModal: FC<ModalProps> = ({ visible, setInvisible, children }) => {
  useEffect(() => {
    if (visible && document.body) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [visible]);

  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);

  return (
    <Portal>
      {visible && (
        <FullScreenModalWrapper>
          <FullScreenModalBackground>
            {children}
            <CloseButton onClick={setInvisible}>
              <XIcon />
            </CloseButton>
          </FullScreenModalBackground>
        </FullScreenModalWrapper>
      )}
    </Portal>
  );
};

export default FullScreenModal;

const FullScreenModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FullScreenModalBackground = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: ${colors.GRAY[1]};
  padding: 20px 16px 20px 16px;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  min-height: 100vh;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;
`;
