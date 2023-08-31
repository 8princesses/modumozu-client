import { FC } from "react";
import colors from "../../styles/colors";
import { getFonts } from "../../styles/fonts";
import { styled } from "styled-components";

interface ScopeBarProps {
  isShowingAllStocks: boolean;
  setIsShowingAllStocks: (value: boolean) => void;
  availableStocksCount: number;
  allStocksCount: number;
}

const ScopeBar: FC<ScopeBarProps> = (props) => {
  const { isShowingAllStocks, setIsShowingAllStocks, availableStocksCount, allStocksCount } = props;
  return (
    <TabBox>
      <TabButton
        active={!isShowingAllStocks}
        onClick={() => {
          setIsShowingAllStocks(false);
        }}
      >
        청약가능한 공모주 {availableStocksCount}
      </TabButton>
      <TabButton
        active={isShowingAllStocks}
        onClick={() => {
          setIsShowingAllStocks(true);
        }}
      >
        전체 공모주 {allStocksCount}
      </TabButton>
    </TabBox>
  );
};

export default ScopeBar;

const TabBox = styled.div`
  padding-inline: 16px;
  border-bottom: 1px solid ${colors.GRAY[2]};
`;

const TabButton = styled.button<{ active: boolean }>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  width: 50%;
  padding-block: 15px;
  ${(props) => `
    ${props.active ? getFonts("H5_SEMIBOLD") : getFonts("H5_REGULAR")}
    color: ${props.active ? colors.FONT_LIGHT.PRIMARY : colors.FONT_LIGHT.SECONDARY};
    border-bottom: solid 4px ${props.active ? colors.ON.BASIC_LIGHT : colors.ON.BASIC_DARK};
  `}
`;
