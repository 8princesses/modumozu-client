import { FC, useEffect, useState } from "react";
import Portal from "../common/Portal";
import styled from "styled-components";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import PlusIcon from "@/svg/PlusIcon";
import XIcon from "@/svg/XIcon";
import Button from "../common/Button";
import AddAccountBoxList from "./AddAccountBoxList";

interface AddAccountProps {
  /**
   * 화면에 노출 시킬지 여부
   */
  visible: boolean;
  /**
   * 모달 창 끄기
   */
  setInvisible: () => void;
}

export interface AgentRegisterType {
  agentId: number;
  registeredAt: string;
}

const emptyAgent: AgentRegisterType = {
  agentId: 0,
  registeredAt: "",
};

const AddAccount: FC<AddAccountProps> = (props) => {
  const { visible, setInvisible } = props;
  const [accounts, setAccounts] = useState<AgentRegisterType[]>([emptyAgent]);

  useEffect(() => {
    if (visible && document.body) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [visible]);

  return (
    <Portal>
      {visible && (
        <>
          <Wrapper>
            <Description>
              <h2>
                새로 개설한 증권 계좌를 <br />
                추가해주세요.
              </h2>
              <ul>
                <li>계좌 개설일을 알려주시면 청약 가능한 공모주를 정확하게 알려드려요.</li>
                <li>
                  유진증권, 삼성증권, 키움증권, 한화투자증권을 제외한 증권사들은 20일 내에 계좌 개설 내역이 있을 경우
                  신규 계좌 개설을 제한하고 있어요.
                </li>
              </ul>
            </Description>
            <CloseButton onClick={setInvisible}>
              <XIcon />
            </CloseButton>
            <section>
              <AddAccountButton
                onClick={() =>
                  setAccounts((prev) => {
                    if (prev.length >= 10) return prev;
                    return [...prev, emptyAgent];
                  })
                }
              >
                <PlusIcon /> 새 계좌 추가
              </AddAccountButton>
              <AddAccountBoxList accounts={accounts} setAccounts={setAccounts} />
            </section>
          </Wrapper>
          <ButtonSection>
            <Button width="100%" disabled={true}>
              추가 완료
            </Button>
          </ButtonSection>
        </>
      )}
    </Portal>
  );
};

export default AddAccount;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
  width: 100%;
  max-width: 375px;
  height: 100%;
  min-height: 100vh;
  overflow: scroll;
  background-color: ${colors.GRAY[1]};
  padding: 20px 16px 20px 16px;
`;

const Description = styled.section`
  box-sizing: border-box;
  width: 310px;
  margin-bottom: 40px;

  h2 {
    ${getFonts("H2_SEMIBOLD")}
    color: ${colors.FONT_LIGHT.PRIMARY};
    margin-bottom: 16px;
  }

  li {
    ${getFonts("BODY1_REGULAR")}
    color: ${colors.FONT_LIGHT.TERIARY};
    list-style: disc;
    text-decoration: dotted;
    margin-left: 20px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 16px;
`;

const AddAccountButton = styled.button`
  display: flex;
  align-items: center;
  padding: 16px;
  ${getFonts("H6_SEMIBOLD")}
  color: ${colors.FONT.PRIMARY};
  border: 1px solid ${colors.GRAY[2]};
  background-color: ${colors.WHITE};
  border-radius: 8px;
  width: 100%;

  svg {
    margin-right: 8px;
  }
`;

const ButtonSection = styled.section`
  position: fixed;
  bottom: 20px;
  left: 50%;
  translate: -50% 0;
  width: 343px;
`;
