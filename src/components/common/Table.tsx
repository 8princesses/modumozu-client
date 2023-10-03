import { ReactNode } from "react";
import colors from "@/styles/colors";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";

export const Table = ({ children }: { children: ReactNode }) => {
  return <TableStyle>{children}</TableStyle>;
};

const TableStyle = styled.table`
  width: 100%;
  margin-bottom: 24px;

  th {
    ${getFonts("CAPTION1_SEMIBOLD")}
    color: ${colors.FONT_LIGHT.PRIMARY};
    padding-block: 13px;
    background-color: ${colors.GRAY[1]};
    border-block: 1px solid ${colors.GRAY[2]};
  }

  th + th {
    border-left: 1px solid ${colors.GRAY[2]};
  }

  td {
    ${getFonts("CAPTION1_REGULAR")}
    padding-block: 13px;
    border-block: 1px solid ${colors.GRAY[2]};
    text-align: center;
  }

  td + td {
    border-left: 1px solid ${colors.GRAY[2]};
  }

  tfoot td {
    ${getFonts("CAPTION1_SEMIBOLD")}
    background-color: ${colors.GRAY[7]};
    color: ${colors.FONT_DARK.PRIMARY};
  }
`;
