"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import CaretIcon from "@/svg/CaretIcon";
import GuideIcon from "@/svg/GuideIcon";
import styled from "styled-components";

const IPOInfo = () => {
  return (
    <IPOInfoWrap>
      <IPOInfoList>
        <IPOInfoRow>
          <IPOIntoLabel>주간사</IPOIntoLabel>
          <IPOInfoValue>
            <ul>
              <li>KB증권</li>
              <li>대신증권</li>
              <li>미래에셋증권</li>
            </ul>
          </IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>공모가</IPOIntoLabel>
          <IPOInfoValue>공모가</IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>
            청약증거금율
            <GuideIcon />
          </IPOIntoLabel>
          <IPOInfoValue>50%</IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>
            기관투자자 경쟁률
            <GuideIcon />
          </IPOIntoLabel>
          <IPOInfoValue>
            516 : 1<CaretButton onClick={() => console.log("hihihi")} width={16} height={16} />
          </IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>
            의무보유 확약률
            <GuideIcon />
          </IPOIntoLabel>
          <IPOInfoValue>
            의무보유 확약률
            <CaretButton onClick={() => console.log("hihihi")} width={16} height={16} />
          </IPOInfoValue>
        </IPOInfoRow>
      </IPOInfoList>
    </IPOInfoWrap>
  );
};

export default IPOInfo;

const IPOInfoWrap = styled.div`
  padding: 40px 16px 32px 16px;
`;

const IPOInfoList = styled.ul`
  width: 100%;
`;
const IPOInfoRow = styled.li`
  display: flex;
  gap: 0 24px;
  & + & {
    margin-top: 16px;
  }
`;
const IPOIntoLabel = styled.div`
  width: 128px;
  display: flex;
  align-items: flex-start;
  gap: 0 2px;
  ${getFonts("H5_REGULAR")}
  color:${colors.FONT_LIGHT.SECONDARY};
`;
const IPOInfoValue = styled.div`
  display: flex;
  align-items: center;
  ${getFonts("H5_MEDIUM")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;
const CaretButton = styled(CaretIcon.right)`
  margin-left: 2px;
  cursor: pointer;
`;
