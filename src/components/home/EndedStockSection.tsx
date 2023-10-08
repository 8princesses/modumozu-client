import { FC } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { getFonts } from "@/styles/fonts";
import EndedStock from "./EndedStock";

const EndedStockSection: FC = () => {
  const endedStockData = [
    {
      id: 0,
      name: "필에너지",
      logoPath: "",
      openDate: "2025-08-30",
      profit: 0,
    },
    {
      id: 1,
      name: "파두",
      logoPath: "",
      openDate: "2025-08-31",
      profit: 0,
    },
    {
      id: 2,
      name: "큐리옥스바이오시스템",
      logoPath: "",
      openDate: "2023-08-30",
      profit: 150,
    },
    {
      id: 3,
      name: "스마트레이더시스템",
      logoPath: "",
      openDate: "2023-08-30",
      profit: -20,
    },
  ];

  return (
    <Section>
      <Title>종료된 공모주</Title>
      <EndedStockList>
        {endedStockData.map((stock) => (
          <EndedStock
            key={stock.id}
            stockName={stock.name}
            logoPath={stock.logoPath}
            openDate={new Date(stock.openDate)}
            profit={stock.profit}
          />
        ))}
      </EndedStockList>
      <Button color="secondary" fill={false} size="large" shape="rectangle" width="343px" $font="BUTTON1_REGULAR">
        10개 더보기
      </Button>
    </Section>
  );
};

export default EndedStockSection;

const Section = styled.section`
  padding-inline: 16px;
  margin-bottom: 80px;
`;

const EndedStockList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 12px;
  grid-row-gap: 24px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

const Title = styled.h1`
  ${getFonts("H1_SEMIBOLD")};
`;
