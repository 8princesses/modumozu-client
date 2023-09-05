import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { FC } from "react";
import styled from "styled-components";

type Type = "primary" | "secondary";

interface BadgeProps {
  type?: Type;
  children?: string;
}

const Badge: FC<BadgeProps> = ({ children, type = "primary" }) => {
  return <BadgeWrap type={type}>{children}</BadgeWrap>;
};

export default Badge;

const BadgeWrap = styled.div<{ type: Type }>`
  display: inline-block;
  padding: 4px 6px;
  border-radius: 3px;
  ${getFonts("CAPTION2_SEMIBOLD")}
  ${({ type }) =>
    type === "primary"
      ? `
          color:${colors.BLUE[5]};
          background-color: ${colors.BLUE[1]};
        `
      : `
          color:${colors.GRAY[5]};
          background-color: ${colors.GRAY[2]};
        `};
`;
