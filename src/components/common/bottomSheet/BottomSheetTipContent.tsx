import styled from "styled-components";
import colors from "@/styles/colors";

export const BottomSheetTipContent = styled.div`
  margin-bottom: 16px;

  p {
    color: ${colors.FONT_LIGHT.SECONDARY};
    ${getFonts("BODY1_REGULAR")}
  }

  span {
    color: ${colors.FONT.PRIMARY};
    ${getFonts("BODY1_SEMIBOLD")}
  }
`;
