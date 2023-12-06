import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import Image from "next/image";
import getInvestmentBankLogo from "@/util/getInvestmentBankLogo";
import { FC } from "react";
import { getBankName } from "@/util/getBankName";
import { limitlessAgent } from "@/constants/agentInfo";
import getStoreUrl from "@/util/getStoreUrl";

interface InvestmentBankCardListProps {
  /**
   * 증권사 ID 리스트
   */
  investmentBanks: number[];
  /**
   * 증권사 버튼 클릭 핸들러
   */
  handleClick?: (id: number) => void;
}

const InvestmentBankCardList: FC<InvestmentBankCardListProps> = (props) => {
  const { investmentBanks, handleClick } = props;
  return (
    <ListWrapper>
      {investmentBanks.map((bankId) => (
        <InvestmentBankCard
          key={bankId}
          onClick={() => {
            // 20일 제한없는 주간사일경우 바로 스토어로 이동
            limitlessAgent.includes(bankId)
            ? window.open(getStoreUrl(bankId)) 
            : handleClick === undefined ? window.open(getStoreUrl(bankId)) : handleClick(bankId);
          }}
        >
          <Image src={getInvestmentBankLogo(bankId)} width="60" height="60" alt={String(bankId)} />
          {getBankName(bankId)}
        </InvestmentBankCard>
      ))}
    </ListWrapper>
  );
};

export default InvestmentBankCardList;

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`;

export const InvestmentBankCard = styled.div<{ $active?: boolean }>`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid ${(props) => (props.$active ? colors.ON.PRIMARY : colors.GRAY_TRANSPARENT_SCALE[2])};
  border-radius: 16px;
  ${(props) => (props.$active ? getFonts("CAPTION1_SEMIBOLD") : getFonts("CAPTION1_REGULAR"))}
  color:${(props) => (props.$active ? colors.FONT_LIGHT.PRIMARY : colors.FONT_LIGHT.SECONDARY)};
  cursor: pointer;

  svg {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;
