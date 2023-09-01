import { styled } from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import { FC } from "react";
import EndedStockLogo from "./EndedStockLogo";

interface EndStockProps {
  stockName: string;
  logoPath: string;
  isPublic: boolean;
  openDate: Date;
  profit: number;
}

const EndedStock: FC<EndStockProps> = (props) => {
  const { stockName, logoPath, isPublic, openDate, profit } = props;
  return (
    <div>
      <EndedStockLogo path={logoPath} isPublic={isPublic} />
      <Title>{stockName}</Title>
      {!isPublic && <Description fontColor={colors.FONT_LIGHT.SECONDARY}>8월 30일 상장 예정</Description>}
      {isPublic && profit >= 0 && <Description fontColor={colors.FONT.ACCENT}>공모가 대비 +{profit}%</Description>}
      {isPublic && profit < 0 && <Description fontColor={colors.FONT.PRIMARY}>공모가 대비 {profit}%</Description>}
    </div>
  );
};

export default EndedStock;

const Title = styled.h4`
  ${getFonts("H4_SEMIBOLD")};
  color: ${colors.FONT_LIGHT.PRIMARY};
  margin: 0;
  margin-bottom: 4px;
`;

const Description = styled.p<{ fontColor: string }>`
  ${getFonts("CAPTION1_REGULAR")};
  margin: 0;
  color: ${(props) => props.fontColor};
`;
