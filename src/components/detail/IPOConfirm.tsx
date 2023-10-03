"use client";

import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import { FC } from "react";

export interface IPOConfirmProps {
  data: { label: string; value: string }[];
}
export type IPOComfirmTableData = { label: string; value: string }[];

const IPOConfirm: FC<IPOConfirmProps> = ({ data = [] }) => {
  const renderTableData = () => {
    return data.map((data) => {
      return (
        <tr key={data.label}>
          <td>{data.label} </td>
          <td>{data.value}</td>
        </tr>
      );
    });
  };

  return (
    <IPOConfirmWrap>
      <IPOConfirmTitle>
        의무보유 확약률<IPOConfirmPercent>11%</IPOConfirmPercent>
      </IPOConfirmTitle>
      <IPOConfirmDescription>
        청약 이후 일정 기간 배정 받은 주식을 보유하는 기관이 많을 수록 상장일에 매도 물량이 적어져 주가 상승의 기회가
        많다고 봐요. 확약 기간 중 어느 구간에 물량이 많은지를 보고 매도 타이밍을 보기도 해요.
      </IPOConfirmDescription>
      <IPOConfirmTable>
        <colgroup>
          <col width="50%" />
          <col width="50%" />
        </colgroup>
        <thead>
          <tr>
            <th>확약 기간 </th>
            <th>
              신청 수량 <IPOConfirmPoint>(단위: 주)</IPOConfirmPoint>
            </th>
          </tr>
        </thead>
        <tbody>{renderTableData()}</tbody>
      </IPOConfirmTable>
    </IPOConfirmWrap>
  );
};

export default IPOConfirm;

const IPOConfirmWrap = styled.div`
  padding: 32px 16px 48px 16px;
`;

const IPOConfirmTitle = styled.h2`
  ${getFonts("H2_SEMIBOLD")};
  color: ${colors.FONT_LIGHT.PRIMARY};
`;

const IPOConfirmPercent = styled.span`
  margin-left: 8px;
  color: ${colors.FONT.PRIMARY};
`;
const IPOConfirmPoint = styled.span`
  margin-left: 4px;
  ${getFonts("CAPTION1_REGULAR")};
  color: ${colors.FONT_LIGHT.SECONDARY};
`;
const IPOConfirmDescription = styled.p`
  margin-top: 8px;
  ${getFonts("BODY1_REGULAR")};
  color: ${colors.FONT_LIGHT.SECONDARY};
`;

const IPOConfirmTable = styled.table`
  width: 100%;
  margin-top: 32px;
  text-align: center;
  border-top: 1px solid ${colors.GRAY[2]};
  border-bottom: 1px solid ${colors.GRAY[2]};

  thead {
    background-color: ${colors.GRAY[1]};
  }
  th {
    padding: 13px 10px;
    ${getFonts("CAPTION1_SEMIBOLD")}
    color:${colors.FONT_LIGHT.PRIMARY};
  }
  th + th {
    border-left: 1px solid ${colors.GRAY[2]};
  }
  td {
    padding: 13px 10px;
    ${getFonts("CAPTION1_REGULAR")}
    border-top: 1px solid ${colors.GRAY[2]};
  }
  td + td {
    border-left: 1px solid ${colors.GRAY[2]};
  }
  tbody tr:last-child {
    background-color: ${colors.GRAY[7]};
    td {
      color: ${colors.FONT_DARK.PRIMARY};
    }
  }
`;
