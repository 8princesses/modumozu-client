"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import GuideIcon from "@/svg/GuideIcon";
import styled from "styled-components";

const POInfo = () => {
  /*
   * /TODO 변수 명을 어떻게 해야할 지
   */
  return (
    <POInfoWrap>
      <POInfoTitle>공모 정보</POInfoTitle>
      <POInfoList>
        <POInfoRow>
          <POIntoLabel>공모가</POIntoLabel>
          <POInfoValue>20,000원</POInfoValue>
        </POInfoRow>
        <POInfoRow>
          <POIntoLabel>시가총액</POIntoLabel>
          <POInfoValue>1,168억</POInfoValue>
        </POInfoRow>
        <POInfoRow>
          <POIntoLabel>공모 금액</POIntoLabel>
          <POInfoValue>
            177억원 <POInfoHeldStock>2,200,200주</POInfoHeldStock>
          </POInfoValue>
        </POInfoRow>
        <POInfoRow>
          <POIntoLabel>
            청약증거금율
            <GuideIcon />
          </POIntoLabel>
          <POInfoValue>50%</POInfoValue>
        </POInfoRow>
        <POInfoRow>
          <POIntoLabel>
            균등배정비율
            <GuideIcon />
          </POIntoLabel>
          <POInfoValue>50%</POInfoValue>
        </POInfoRow>
      </POInfoList>
    </POInfoWrap>
  );
};

export default POInfo;

const POInfoWrap = styled.div`
  padding: 32px 16px;
`;
const POInfoTitle = styled.h2`
  ${getFonts("H2_SEMIBOLD")}
  color: ${colors.FONT_LIGHT.PRIMARY};
`;
const POInfoList = styled.ul`
  margin-top: 24px;
  width: 100%;
`;
const POInfoRow = styled.li`
  display: flex;
  gap: 0 24px;
  & + & {
    margin-top: 16px;
  }
`;
const POIntoLabel = styled.div`
  width: 99px;
  display: flex;
  align-items: flex-start;
  gap: 0 2px;
  ${getFonts("H5_REGULAR")}
  color:${colors.FONT_LIGHT.SECONDARY};
`;
const POInfoValue = styled.div`
  ${getFonts("H5_MEDIUM")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;
const POInfoHeldStock = styled.span`
  ${getFonts("H6_REGULAR")}
  color:${colors.FONT_LIGHT.TERIARY};
`;
