import { FC } from "react";
import colors from "../../styles/colors";
import { getFonts } from "../../styles/fonts";
import { styled } from "styled-components";

interface TapMenuOption {
  label: string;
  value: any;
}

interface TapMenuProps {
  /**
   * 현재 값
   */
  value: any;
  /**
   * 버튼목록에 들어갈 값 배열
   */
  options: TapMenuOption[];
  /**
   * 값 변경 콜백
   */
  onChange: (value: any) => void;
}

const TapMenu: FC<TapMenuProps> = (props) => {
  const { value, onChange, options } = props;
  return (
    <TabBox count={options.length}>
      {options.map((option) => {
        return (
          <TabButton
            key={option.value}
            $active={(value === option.value).toString()}
            count={options.length}
            onClick={() => {
              onChange(option.value);
            }}
          >
            {option.label}
          </TabButton>
        );
      })}
    </TabBox>
  );
};

export default TapMenu;

const TabBox = styled.div<{ count: number }>`
  padding-inline: ${(props) => (props.count === 2 ? "16px" : "auto")};
  border-bottom: 1px solid ${colors.GRAY[2]};
`;

const TabButton = styled.button<{ $active: string; count: number }>`
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding-block: 15px;
  ${(props) => `
    width: ${`${100 / props.count}%`};
    ${props.$active === "true" ? getFonts("H5_SEMIBOLD") : getFonts("H5_REGULAR")}
    color: ${props.$active === "true" ? colors.FONT_LIGHT.PRIMARY : colors.FONT_LIGHT.SECONDARY};
    border-bottom: solid 4px ${props.$active === "true" ? colors.ON.BASIC_LIGHT : colors.ON.BASIC_DARK};
  `}
`;
