"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { forwardRef } from "react";
import styled from "styled-components";

interface InvestCompetitionProps {
  investorCompetitionRate: number;
}

const InvestCompetition = forwardRef<HTMLDivElement, InvestCompetitionProps>(({ investorCompetitionRate }, ref) => {
  return (
    <InvestCompetitionWrap ref={ref}>
      <InvestCompetitionTitle>
        기관투자자 경쟁률{investorCompetitionRate !== 0 && <InvestPercent>{investorCompetitionRate}:1</InvestPercent>}
      </InvestCompetitionTitle>
      <InvestCompetitionDescription>
        수요 예측에서 기관투자자 경쟁률이 높다면 그만큼 해당 기업의 주식을 받으려는 경쟁이 치열하다고 할 수 있으며
        시장의 주목을 받을 확률이 높아요.
      </InvestCompetitionDescription>
    </InvestCompetitionWrap>
  );
});
InvestCompetition.displayName = "InvestCompetition";

export default InvestCompetition;

const InvestCompetitionWrap = styled.div`
  padding: 32px 16px 48px 16px;
`;

const InvestCompetitionTitle = styled.h2`
  ${getFonts("H2_SEMIBOLD")};
  color: ${colors.FONT_LIGHT.PRIMARY};
`;

const InvestPercent = styled.span`
  margin-left: 8px;
  color: ${colors.FONT.PRIMARY};
`;
const InvestCompetitionDescription = styled.p`
  margin-top: 8px;
  ${getFonts("BODY1_REGULAR")};
  color: ${colors.FONT_LIGHT.SECONDARY};
`;
