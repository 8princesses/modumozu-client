import { FC } from "react";
import Button from "../Button";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import Image from "next/image";
import getInvestmentBankLogo from "@/util/getInvestmentBankLogo";

interface InvestmentBankListProps {
  /**
   * 공모주명
   */
  stockName: string;
  /**
   * 주간사 리스트
   */
  investmentBanks: string[];
}

const InvestmentBankList:FC<InvestmentBankListProps> = (props) => {
  const { stockName, investmentBanks } = props;

  return (
    <>
      <InvestmentBankListTitle>
        <h2><span>{stockName}</span>의 주간사</h2>
        <p>{investmentBanks.length}개</p>
      </InvestmentBankListTitle>
      <InvestmentBankCardList>
        {investmentBanks.map((name) => (
          <InvestmentBankCard key={name}>
            <Image src={getInvestmentBankLogo(name)} width="60" height="60" alt={name}/>
              {name}
          </InvestmentBankCard>
          ))}
      </InvestmentBankCardList>
      <Button color="secondary" fill={false} width="100%">
        <ButtonText>닫기</ButtonText>
      </Button>
    </>
  )
}

const InvestmentBankListTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;

  h2 {
    display: inline;
    ${getFonts("H2_SEMIBOLD")}
    span {
      color: ${colors.FONT.PRIMARY}
    }
  }

  p {
    display: inline;
    ${getFonts("H4_REGULAR")}    
  }
`

const InvestmentBankCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
`

const InvestmentBankCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px;
  border: 1px solid ${colors.GRAY_TRANSPARENT_SCALE[2]};
  border-radius: 16px;
  ${getFonts("CAPTION1_REGULAR")}
  color:${colors.FONT_LIGHT.SECONDARY}
`

const ButtonText = styled.span`
  ${getFonts("BUTTON1_REGULAR")}
`;


export default InvestmentBankList;