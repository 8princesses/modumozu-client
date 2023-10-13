import colors from "@/styles/colors";
import CaretIcon from "@/svg/CaretIcon";
import { getFonts } from "@/styles/fonts";
import CircledXIcon from "@/svg/CircledXIcon";
import styled from "styled-components";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { AgentRegisterType } from "./AddAccount";
import { BottomSheet } from "../common/bottomSheet/BottomSheet";
import AgentSelector from "./AgentSelector";
import { getBankName } from "@/util/getBankName";
import CustomDatePicker from "../common/CustomDatePicker";

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
          <ButtonGroup>
            <AgentSelectButton onClick={() => setIsAgentSelectorShowing(idx)}>
              {item.agentId !== 0 ? <p>{getBankName(item.agentId)}</p> : "증권사 선택"}
              <CaretIcon.down />
            </AgentSelectButton>
            <CustomDatePicker boxIdx={idx} setAccounts={setAccounts} />
          </ButtonGroup>
        </AddAccountBox>
      ))}
      <BottomSheet visible={isAgentSelectorShowing >= 0} handleOverlayClick={() => setIsAgentSelectorShowing(-1)}>
        <AgentSelector
          setAccounts={setAccounts}
          isAgentSelectorShowing={isAgentSelectorShowing}
          setIsAgentSelectorShowing={setIsAgentSelectorShowing}
        />
      </BottomSheet>
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
`;

const AgentSelectButton = styled.button`
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
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
`;

const AddAccountTitle = styled.section`
  display: flex;
  justify-content: space-between;
`;
