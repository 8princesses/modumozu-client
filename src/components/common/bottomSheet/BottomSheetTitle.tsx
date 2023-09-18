import { ReactNode } from "react";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";

export const BottomSheetTitle = ({ children }: { children: ReactNode }) => {
  return <BottomSheetTitleWrapper>{children}</BottomSheetTitleWrapper>;
};

const BottomSheetTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 24px;

  h2 {
    display: inline;
    ${getFonts("H2_SEMIBOLD")}
    span {
      color: ${colors.FONT.PRIMARY};
    }
  }

  p {
    display: inline;
    ${getFonts("H4_REGULAR")}
  }
`;
