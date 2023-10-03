"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import CaretIcon from "@/svg/CaretIcon";
import GuideIcon from "@/svg/GuideIcon";
import { useState } from "react";
import styled from "styled-components";
import { BottomSheet } from "../common/bottomSheet/BottomSheet";
import { BottomSheetGuide } from "../common/bottomSheet/BottomSheetGuide";

export type BottomSheetStatus = "NONE" | "DEPOSIT" | "COMPETITION" | "RETENTION_COMMITMENT";

const IPOInfo = () => {
  const [isModalShowing, setIsModalShowing] = useState<BottomSheetStatus>("NONE");

  const renderBottomSheet = () => {
    if (isModalShowing === "NONE") return;
    return (
      <BottomSheet handleOverlayClick={() => setIsModalShowing("NONE")}>
        {isModalShowing === "DEPOSIT" && (
          <BottomSheetGuide title="청약증거금율" handleClose={() => setIsModalShowing("NONE")}>
            <p>
              공모주를 배정받기 위해 미리 내는 보증금의 비율로, 일반적으로 50% 또는 100%이에요.
              <br />
              <br />
              최소 청약증거금 계산 :
              <br />
              <span>공모가 x 최소 신청 물량(보통 10주) x 증거금율</span>
              <br />
              이 금액을 청약 전 증권 계좌에 입금해야 해요.
              <br />
              <br />
              상장 후 배정받지 못한 주수만큼 환불 받아요.
            </p>
          </BottomSheetGuide>
        )}
        {isModalShowing === "COMPETITION" && (
          <BottomSheetGuide title="기관투자자 경쟁률" handleClose={() => setIsModalShowing("NONE")}>
            <p>
              공모가가 확정되기 전, 기관들이 상장 예정인 회사의 주식을 받고자 청약한 경쟁률이에요.
              <br />
              <br />
              높을수록 기관들이 사고자 하는 경쟁이 치열하다는 의미이고, 일반적으로 1000:1 이상의 경우 안정적이라고
              평가해요.
            </p>
          </BottomSheetGuide>
        )}
        {isModalShowing === "RETENTION_COMMITMENT" && (
          <BottomSheetGuide title="의무보유 확약률" handleClose={() => setIsModalShowing("NONE")}>
            <p>
              의무보유확약은 기관이 많은 공모주를 배정받는 대신, 상장 후 일정 기간 공모주를 팔지 않고, 의무적으로
              보유하겠다는 약속이에요.
              <br />
              <br />
              확약률은 이 약속을 내건 기관들의 비율이고요. 더 오랜 기간 보유를 약속한 기관이 많을수록 매력적인
              공모주라고 판단할 수 있어요.
            </p>
          </BottomSheetGuide>
        )}
      </BottomSheet>
    );
  };

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
            <GuideIcon onClick={() => setIsModalShowing("DEPOSIT")} />
          </IPOIntoLabel>
          <IPOInfoValue>50%</IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>
            기관투자자 경쟁률
            <GuideIcon onClick={() => setIsModalShowing("COMPETITION")} />
          </IPOIntoLabel>
          <IPOInfoValue>
            516 : 1<CaretButton onClick={() => console.log("hihihi")} width={16} height={16} />
          </IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>
            의무보유 확약률
            <GuideIcon onClick={() => setIsModalShowing("RETENTION_COMMITMENT")} />
          </IPOIntoLabel>
          <IPOInfoValue>
            의무보유 확약률
            <CaretButton onClick={() => console.log("hihihi")} width={16} height={16} />
          </IPOInfoValue>
        </IPOInfoRow>
      </IPOInfoList>
      {renderBottomSheet()}
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
