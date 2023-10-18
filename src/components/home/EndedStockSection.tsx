import { FC } from "react";
import styled from "styled-components";
import Button from "../common/Button";
import { getFonts } from "@/styles/fonts";
import EndedStock from "./EndedStock";
import { useQuery } from "@tanstack/react-query";
import { fetchEndedStocks } from "@/api/ipo";

const EndedStockSection: FC = () => {
  const { isLoading, data } = useQuery({ queryKey: ["fetchEndedStocks"], queryFn: fetchEndedStocks });

  return (
    <Section>
      <Title>종료된 공모주</Title>
      <EndedStockList>
        {!isLoading &&
          data?.map((stock) => (
            <EndedStock
              key={stock.id}
              stockName={stock.name}
              logoPath={stock.logo}
              openDate={new Date(stock.listingAt)}
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
