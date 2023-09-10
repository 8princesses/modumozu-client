import { styled } from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import { FC } from "react";
import EndedStockLogo from "./EndedStockLogo";

interface EndStockProps {
  stockName: string;
  logoPath: string;
  openDate: Date;
  profit: number;
}

const EndedStock: FC<EndStockProps> = (props) => {
  const { stockName, logoPath, openDate, profit } = props;
  const curDate = new Date();
  const isPublic = curDate > openDate;

  const getDescFontColor = () => {
    if (!isPublic) {
      return colors.FONT_LIGHT.SECONDARY;
    } else if (profit >= 0) {
      return colors.FONT.ACCENT;
    } else {
      return colors.FONT.PRIMARY;
    }
  };

  const getDescText = () => {
    if (!isPublic) {
      return `${openDate.getMonth() + 1}월${openDate.getDate()}일 상장 예정`;
    } else if (profit >= 0) {
      return `공모가 대비 +${profit}%`;
    } else {
      return `공모가 대비 ${profit}%`;
    }
  };

  return (
    <Container>
      <EndedStockLogo isPublic={isPublic} />
      <Title>{stockName}</Title>
      <Description fontColor={getDescFontColor()}>{getDescText()}</Description>
    </Container>
  );
};

export default EndedStock;

const Container = styled.div`
  width: 165.5px;
`;

const Title = styled.h4`
  ${getFonts("H4_SEMIBOLD")};
  color: ${colors.FONT_LIGHT.PRIMARY};
  margin: 0;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p<{ fontColor: string }>`
  ${getFonts("CAPTION1_REGULAR")};
  margin: 0;
  color: ${(props) => props.fontColor};
`;
