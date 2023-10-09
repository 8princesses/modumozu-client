import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import Image from "next/image";
import getInvestmentBankLogo from "@/util/getInvestmentBankLogo";
import { FC } from "react";
import { getBankName } from "@/util/getBankName";

interface InvestmentBankCardListProps {
  investmentBanks: number[];
}

const InvestmentBankCardList: FC<InvestmentBankCardListProps> = (props) => {
  const { investmentBanks } = props;
  return (
    <ListWrapper>
      {investmentBanks.map((bankId) => (
        <InvestmentBankCard key={bankId}>
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

  svg {
    position: absolute;
    top: 8px;
    right: 8px;
  }
`;
