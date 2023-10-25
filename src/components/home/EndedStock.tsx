import { styled } from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import { FC } from "react";
import EndedStockLogo from "./EndedStockLogo";

interface EndStockProps {
  stockName: string;
  logoPath: string;
  openDate: Date;
  onClick?: () => void;
}

const EndedStock: FC<EndStockProps> = (props) => {
  const { stockName, logoPath, openDate, onClick } = props;
  const today = new Date();
  const curDate = new Date(today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate());
  const isPublic = curDate > openDate;

  return (
    <Container onClick={onClick}>
      <EndedStockLogo isPublic={isPublic} path={logoPath} />
      <Title>{stockName}</Title>
      <Description color={colors.FONT_LIGHT.SECONDARY}>
        {openDate.getFullYear() === 2000
          ? "상장 예정"
          : `${openDate.getMonth() + 1}월 ${openDate.getDate()}일 상장 ${isPublic ? "완료" : "예정"}`}
      </Description>
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

const Description = styled.p<{ color: string }>`
  ${getFonts("CAPTION1_REGULAR")};
  margin: 0;
  color: ${(props) => props.color};
`;
