"use client";

import { FC, ReactNode, useEffect } from "react";
import Portal from "./Portal";
import styled from "styled-components";

interface ModalProps {
  /**
   * 화면에 노출 시킬지 여부
   */
  visible: boolean;

  /**
   * 모달 컨텐츠
   */
  children: ReactNode;

  /**
   * 모달 컨텐츠 바깥을 클릭했을 때
   */
  onOutsideClick?: () => void;
}

const Modal: FC<ModalProps> = ({ visible, children, onOutsideClick }) => {
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
        <ModalWrapper>
          <ModalBackground onClick={onOutsideClick}>{children}</ModalBackground>
        </ModalWrapper>
      )}
    </Portal>
  );
};

export default Modal;

const ModalBackground = styled.div`
  min-height: calc(var(--var, 1vh) * 100);
  max-width: 375px;
  background-color: #0000007a;
  margin: 0 auto;
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
`;
