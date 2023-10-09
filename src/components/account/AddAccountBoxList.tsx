import colors from "@/styles/colors";
import CaretIcon from "@/svg/CaretIcon";
import { getFonts } from "@/styles/fonts";
import CircledXIcon from "@/svg/CircledXIcon";
import styled from "styled-components";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AgentRegisterType } from "./AddAccount";
import { BottomSheet } from "../common/bottomSheet/BottomSheet";
import Portal from "../common/Portal";
import AgentSelector from "./AgentSelector";
import { getBankName } from "@/util/getBankName";

interface AddAccountBoxListProps {
  accounts: AgentRegisterType[];
  setAccounts: Dispatch<SetStateAction<AgentRegisterType[]>>;
}

const AddAccountBoxList: FC<AddAccountBoxListProps> = (props) => {
  const { accounts, setAccounts } = props;
  const [isAgentSelectorShowing, setIsAgentSelectorShowing] = useState(-1);

  const removeBox = (idx: number) => {
    setAccounts((prev) => {
      const newPrev = [...prev];
      newPrev.splice(idx, 1);
      return newPrev;
    });
  };

  return (
    <>
      {accounts.map((item, idx) => (
        <AddAccountBox key={idx}>
          <AddAccountTitle>
            <h5>새 계좌</h5>
            {accounts.length > 1 && <CircledXIcon onClick={() => removeBox(idx)} />}
          </AddAccountTitle>
          <div>
            <button onClick={() => setIsAgentSelectorShowing(idx)}>
              {item.agentId !== 0 ? <p>{getBankName(item.agentId)}</p> : "증권사 선택"}
              <CaretIcon.down />
            </button>
            <button>
              {item.registeredAt.length > 0 ? <p>{item.registeredAt}</p> : "개설일 선택"}
              <CaretIcon.down />
            </button>
          </div>
        </AddAccountBox>
      ))}
      {isAgentSelectorShowing >= 0 && (
        <Portal>
          <BottomSheet handleOverlayClick={() => setIsAgentSelectorShowing(-1)}>
            <AgentSelector
              setAccounts={setAccounts}
              isAgentSelectorShowing={isAgentSelectorShowing}
              setIsAgentSelectorShowing={setIsAgentSelectorShowing}
            />
          </BottomSheet>
        </Portal>
      )}
    </>
  );
};

export default AddAccountBoxList;

const AddAccountBox = styled.div`
  padding: 16px;
  margin-top: 16px;
  border: 1px solid ${colors.GRAY[2]};
  background-color: ${colors.WHITE};
  border-radius: 8px;
  box-sizing: border-box;
  width: 100%;

  &:last-child {
    margin-bottom: 65px;
  }

  h5 {
    ${getFonts("H5_SEMIBOLD")}
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-top: 20px;
  }

  button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 9px 12px 9px 16px;
    color: ${colors.FONT_LIGHT.SECONDARY};
    border: 1px solid ${colors.ON.BASIC_LIGHT};
    border-radius: 2px;
    text-align: left;

    p {
      color: ${colors.FONT_LIGHT.PRIMARY};
    }
  }
`;

const AddAccountTitle = styled.section`
  display: flex;
  justify-content: space-between;
`;
