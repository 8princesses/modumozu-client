import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { FC } from "react";
import styled from "styled-components";
import { initalModalData, ModalData } from "../mypage/MenuSection";
import { Overlay } from "./Overlay";

interface ModalProps {
  /**
   * 모달 박스 제목
   */
  title: string;
  /**
   * 모달 박스 내용
   */
  content?: string;
  /**
   * 모달 버튼 내용
   */
  buttonText: [string, string] | string;
  /**
   * Primary 버튼 클릭 핸들러
   */
  handlePrimaryButtonClick: () => void;
  /**
   * 모달 on/off 핸들러
   */
  setIsModalShowing: (v: ModalData) => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { title, content, buttonText, handlePrimaryButtonClick, setIsModalShowing } = props;
  return (
    <Overlay onClick={() => setIsModalShowing(initalModalData)}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <h3>{title}</h3>
        {content ? <p>{content}</p> : null}
        <div>
          {typeof buttonText === "string" ? (
            <ModalButton primary={true} onClick={handlePrimaryButtonClick}>
              {buttonText}
            </ModalButton>
          ) : (
            buttonText.map((text, idx) => (
              <ModalButton
                primary={idx === 1}
                onClick={idx === 1 ? handlePrimaryButtonClick : () => setIsModalShowing(initalModalData)}
                key={text}
              >
                {text}
              </ModalButton>
            ))
          )}
        </div>
      </ModalBox>
    </Overlay>
  );
};

export default Modal;

const ModalBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 295px;
  padding: 24px 16px 16px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: white;

  h3 {
    ${getFonts("H3_SEMIBOLD")}
  }

  p {
    ${getFonts("BODY1_REGULAR")}
    padding-top: 11px;
    white-space: pre-line;
  }

  div {
    display: flex;
    gap: 8px;
    padding-top: 24px;
    width: 100%;
  }
`;

const ModalButton = styled.button<{ primary: boolean }>`
  flex-grow: 1;
  padding: 16px 20px 16px 20px;
  border-radius: 6px;
  background-color: ${(props) => (props.primary ? colors.ON.PRIMARY : colors.BLUE[1])};
  color: ${(props) => (props.primary ? colors.WHITE : colors.ON.PRIMARY)};
  ${getFonts("BUTTON1_SEMIBOLD")}
`;
