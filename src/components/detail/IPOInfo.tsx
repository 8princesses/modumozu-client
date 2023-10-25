"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import CaretIcon from "@/svg/CaretIcon";
import GuideIcon from "@/svg/GuideIcon";
import { FC, ReactNode, useState } from "react";
import styled from "styled-components";
import { BottomSheet } from "../common/bottomSheet/BottomSheet";
import { BottomSheetGuide } from "../common/bottomSheet/BottomSheetGuide";
import { getBankName } from "@/util/getBankName";
import { useRouter } from "next/navigation";
import Badge from "../common/Badge";
import { Status } from "@/dto/detail";

export type BottomSheetStatus = "NONE" | "DEPOSIT" | "COMPETITION" | "RETENTION_COMMITMENT";

interface IPOInfoProps {
  status: Status;
  nonRemainAgents: number[];
  remainAgents: number[];
  minDesiredOfferPrice: number;
  maxDesiredOfferPrice: number;
  fixedOfferPrice: number;
  subscriptionDepositRate: number;
  investorCompetitionRate: number;
  mandatoryHoldingCommitmentRate: number;
  resetTabState: () => void;
  onScrollInvestCompetitionClick: () => void;
  onScrollIpoConfirmBoxClick: () => void;
}

const IPOInfo: FC<IPOInfoProps> = (props) => {
  const {
    status,
    nonRemainAgents,
    remainAgents,
    subscriptionDepositRate,
    investorCompetitionRate,
    mandatoryHoldingCommitmentRate,
    resetTabState,
    minDesiredOfferPrice,
    maxDesiredOfferPrice,
    fixedOfferPrice,
    onScrollInvestCompetitionClick,
    onScrollIpoConfirmBoxClick,
  } = props;
  const [isModalShowing, setIsModalShowing] = useState<BottomSheetStatus>("NONE");
  const [isShowAllAgent, setIsShowAgent] = useState(false);
  const router = useRouter();

  const handleAgentListButtonClick = () => {
    setIsShowAgent((prev) => !prev);
  };

  const renderRemainAgentList = () => {
    const mixedList: ReactNode[] = [];

    remainAgents.forEach((id) => {
      mixedList.push(
        <IPOInfoAgentListItem key={id}>
          {getBankName(id)} <Badge>보유</Badge>
        </IPOInfoAgentListItem>,
      );
    });
    nonRemainAgents.forEach((id) => {
      mixedList.push(
        <IPOInfoAgentListItem key={id}>
          {getBankName(id)} <Badge type="secondary">미보유</Badge>
        </IPOInfoAgentListItem>,
      );
    });

    if (isShowAllAgent) {
      return <>{mixedList}</>;
    }
    return <>{mixedList.slice(0, 3)}</>;
  };

  const renderBottomSheet = () => {
    return (
      <BottomSheet visible={isModalShowing !== "NONE"} handleOverlayClick={() => setIsModalShowing("NONE")}>
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
  const renderShowAllAgentButton = () => {
    if (nonRemainAgents.length + remainAgents.length > 3) {
      if (isShowAllAgent) {
        return (
          <li>
            <ShowAllAgentButton onClick={handleAgentListButtonClick}>
              접기 <CaretIcon.up width={16} height={16} color={colors.GRAY[3]} />
            </ShowAllAgentButton>
          </li>
        );
      }
      return (
        <li>
          <ShowAllAgentButton onClick={handleAgentListButtonClick}>
            전체 주간사 보기 <CaretIcon.down width={16} height={16} color={colors.GRAY[3]} />
          </ShowAllAgentButton>
        </li>
      );
    }
    return null;
  };

  return (
    <IPOInfoWrap>
      <IPOInfoList>
        <IPOInfoRow>
          <IPOIntoLabel>주간사</IPOIntoLabel>
          <IPOInfoValue>
            <IPOInfoAgentList>
              {renderRemainAgentList()}
              {renderShowAllAgentButton()}
            </IPOInfoAgentList>
          </IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>공모가</IPOIntoLabel>
          <IPOInfoValue>
            {status === "READY" ? (
              <>
                <DisabledValue>미정</DisabledValue>
                <DisabledRangePrice>
                  {minDesiredOfferPrice.toLocaleString()}원 ~ {maxDesiredOfferPrice.toLocaleString()}원
                </DisabledRangePrice>
              </>
            ) : (
              `${fixedOfferPrice.toLocaleString()}원`
            )}
          </IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>
            청약증거금율
            <GuideIcon onClick={() => setIsModalShowing("DEPOSIT")} />
          </IPOIntoLabel>
          <IPOInfoValue>
            {status === "READY" ? <DisabledValue>미정</DisabledValue> : `${subscriptionDepositRate}%`}
          </IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>
            기관투자자 경쟁률
            <GuideIcon onClick={() => setIsModalShowing("COMPETITION")} />
          </IPOIntoLabel>
          <IPOInfoValue>
            {status === "READY" ? (
              <DisabledValue>미정</DisabledValue>
            ) : (
              <>
                {investorCompetitionRate}%
                <CaretButton onClick={onScrollInvestCompetitionClick} width={16} height={16} />
              </>
            )}
          </IPOInfoValue>
        </IPOInfoRow>
        <IPOInfoRow>
          <IPOIntoLabel>
            의무보유 확약률
            <GuideIcon onClick={() => setIsModalShowing("RETENTION_COMMITMENT")} />
          </IPOIntoLabel>
          <IPOInfoValue>
            {status === "READY" ? (
              <DisabledValue>미정</DisabledValue>
            ) : (
              <>
                {mandatoryHoldingCommitmentRate}%
                <CaretButton onClick={onScrollIpoConfirmBoxClick} width={16} height={16} />
              </>
            )}
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
const IPOInfoAgentList = styled.ul`
  > li + li {
    margin-top: 8px;
  }
`;
const CaretButton = styled(CaretIcon.right)`
  margin-left: 2px;
  cursor: pointer;
`;
const ShowAllAgentButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  margin-top: 12px;
  color: ${colors.FONT_LIGHT.TERIARY};
  ${getFonts("CAPTION1_SEMIBOLD")}
  > svg {
    margin-left: 4px;
  }
`;
const IPOInfoAgentListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0 4px;
`;
const DisabledValue = styled.span`
  color: ${colors.FONT_LIGHT.DISABLED};
`;
const DisabledRangePrice = styled.span`
  margin-left: 4px;
`;
