import styled from "styled-components";
import { InvestmentBankCard, ListWrapper } from "../common/InvestmentBankCardList";
import Image from "next/image";
import getInvestmentBankLogo from "@/util/getInvestmentBankLogo";
import { getBankName } from "@/util/getBankName";
import { BottomSheetTitle } from "../common/bottomSheet/BottomSheetTitle";
import Button from "../common/Button";
import { Dispatch, FC, SetStateAction, useState } from "react";
import CircledCheckIcon from "@/svg/CircledCheckIcon";
import { AgentRegisterType } from "./AddAccount";

interface AgentSelectorProps {
  setAccounts: Dispatch<SetStateAction<AgentRegisterType[]>>;
  isAgentSelectorShowing: number;
  setIsAgentSelectorShowing: (v: number) => void;
}

const AgentSelector: FC<AgentSelectorProps> = (props) => {
  const { setAccounts, isAgentSelectorShowing, setIsAgentSelectorShowing } = props;
  const [selectedAgent, setSelectedAgent] = useState(0);
  const allInvestmentBanks = Array.from({ length: 23 }, (v, i) => i + 1);
  return (
    <>
      <AgentSelectorWrapper>
        <BottomSheetTitle>
          <h2>증권사를 선택해주세요.</h2>
        </BottomSheetTitle>
        <ListWrapper>
          {allInvestmentBanks.map((bankId) => (
            <InvestmentBankCard
              key={bankId}
              $active={bankId === selectedAgent}
              onClick={() => setSelectedAgent(bankId)}
            >
              <Image src={getInvestmentBankLogo(bankId)} width="60" height="60" alt={String(bankId)} />
              {getBankName(bankId)}
              {bankId === selectedAgent && <CircledCheckIcon />}
            </InvestmentBankCard>
          ))}
        </ListWrapper>
      </AgentSelectorWrapper>
      <ButtonGroup>
        <Button
          disabled={selectedAgent <= 0}
          onClick={() => {
            setAccounts((prev) => {
              const newPrev = [...prev];
              newPrev.splice(isAgentSelectorShowing, 1, {
                agentId: selectedAgent,
                registeredAt: prev[isAgentSelectorShowing].registeredAt,
              });
              return newPrev;
            });
            setIsAgentSelectorShowing(-1);
          }}
        >
          선택 완료
        </Button>
        <Button fill={false} color="secondary" onClick={() => setIsAgentSelectorShowing(-1)}>
          닫기
        </Button>
      </ButtonGroup>
    </>
  );
};

export default AgentSelector;

const AgentSelectorWrapper = styled.div`
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ButtonGroup = styled.div`
  padding-bottom: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
  position: sticky;
  bottom: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
