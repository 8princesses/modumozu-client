import { styled } from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import { FC } from "react";
import EndedStockLogo from "./EndedStockLogo";
import dayjs, { Dayjs } from "dayjs";

interface EndStockProps {
  stockName: string;
  logoPath: string;
  openDate: Dayjs;
  onClick?: () => void;
}

const EndedStock: FC<EndStockProps> = (props) => {
  const { stockName, logoPath, openDate, onClick } = props;
  const today = dayjs();
  const curDate = dayjs(today.get("year") + "-" + (today.get("month") + 1) + "-" + today.get("date"));
  const isPublic = openDate.get("year") === 2000 ? false : curDate > openDate;

  return (
    <Container onClick={onClick}>
      <EndedStockLogo isPublic={isPublic} path={logoPath} />
      <Title>{stockName}</Title>
      <Description color={colors.FONT_LIGHT.SECONDARY}>
        {openDate.get("year") === 2000
          ? "상장 예정"
          : `${openDate.get("month") + 1}월 ${openDate.get("date")}일 상장 ${isPublic ? "완료" : "예정"}`}
      </Description>
    </Container>
  );
};
export default EndedStock;

const Container = styled.div`
  width: 165.5px;
  cursor: pointer;
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
