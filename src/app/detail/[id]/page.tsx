"use client";

import { getDetailById, getDetailNewsById } from "@/api/ipo";
import DetailBottomButton from "@/components/detail/DetailBottomButton";
import DetailCard from "@/components/detail/DetailCard";
import DetailHeader from "@/components/detail/DetailHeader";
import DetailTitle from "@/components/detail/DetailTitle";
import IPOConfirm from "@/components/detail/IPOConfirm";
import IPOInfo from "@/components/detail/IPOInfo";
import IPOTapMenu from "@/components/detail/IPOTapMenu";
import InvestCompetition from "@/components/detail/InvestCompetition";
import POInfo from "@/components/detail/POInfo";
import queryKeys from "@/constants/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { useState, useRef } from "react";

interface DetailProps {
  params: { id: string };
}

const Detail: NextPage<DetailProps> = ({ params }) => {
  const id = params.id;
  const [tabState, setTabState] = useState(true);

  const investCompetitionBox = useRef<HTMLDivElement>(null);
  const ipoConfirmBox = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useQuery(queryKeys.DETAIL, () => {
    return getDetailById(id);
  });
  const { data: news = [], isLoading: isNewsLoading } = useQuery(queryKeys.NEWS, () => {
    return getDetailNewsById(id);
  });
  const getAgentIdList = (): number[] => {
    if (data) {
      return data.remainAgents.concat(data.nonRemainAgents).map((agent) => {
        return agent;
      });
    }
    return [];
  };

  const buildMandatoryHoldingCommitmentRate = () => {
    if (data) {
      return [
        { label: "15일", value: data.subscriptionAmountByPeriod15Days },
        { label: "1개월", value: data.subscriptionAmountByPeriod30Days },
        { label: "3개월", value: data.subscriptionAmountByPeriod90Days },
        { label: "6개월", value: data.subscriptionAmountByPeriod180Days },
        { label: "미확약", value: data.subscriptionAmountByPeriodByNone },
        { label: "합계", value: data.subscriptionAmountByTotal },
        { label: "총 수량 대비 비율 (%)", value: `${data.mandatoryHoldingCommitmentRate}%` },
      ];
    }
    return [];
  };
  const handleScrollInvestCompetitionClick = () => {
    if (investCompetitionBox.current) {
      investCompetitionBox.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollIpoConfirmBoxClick = () => {
    if (ipoConfirmBox.current) {
      ipoConfirmBox.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (data === undefined || isLoading) {
    return null;
  }
  return (
    <>
      <DetailHeader id={data.id} pinned={data.pinned} />
      <DetailTitle
        name={data.name}
        category={data.category}
        status={data.status}
        offerBeginAt={data.offerBeginAt}
        offerEndAt={data.offerEndAt}
        listingAt={data.listingAt}
      />
      <DetailCard.wrapper>
        <DetailCard.item>
          <IPOInfo
            status={data.status}
            nonRemainAgents={data.nonRemainAgents}
            remainAgents={data.remainAgents}
            minDesiredOfferPrice={data.minDesiredOfferPrice}
            maxDesiredOfferPrice={data.maxDesiredOfferPrice}
            fixedOfferPrice={data.fixedOfferPrice}
            subscriptionDepositRate={data.subscriptionDepositRate}
            investorCompetitionRate={data.investorCompetitionRate}
            mandatoryHoldingCommitmentRate={data.mandatoryHoldingCommitmentRate}
            resetTabState={() => setTabState(true)}
            onScrollInvestCompetitionClick={handleScrollInvestCompetitionClick}
            onScrollIpoConfirmBoxClick={handleScrollIpoConfirmBoxClick}
          />
        </DetailCard.item>
        <DetailCard.item>
          <IPOTapMenu
            news={news}
            demandForecastBeginAt={data.demandForecastBeginAt}
            refundAt={data.refundAt}
            listingAt={data.listingAt}
            offerBeginAt={data.offerBeginAt}
            offerEndAt={data.offerEndAt}
            state={tabState}
            setState={setTabState}
          />
        </DetailCard.item>
        {tabState && (
          <>
            <DetailCard.item>
              <POInfo
                fixedOfferPrice={data.fixedOfferPrice || data.minDesiredOfferPrice}
                publicOfferingTotalPrice={data.publicOfferingTotalPrice}
                publicOfferingAmount={data.publicOfferingAmount}
                subscriptionDepositRate={data.subscriptionDepositRate}
              />
            </DetailCard.item>
            <DetailCard.item>
              <InvestCompetition ref={investCompetitionBox} investorCompetitionRate={data.investorCompetitionRate} />
            </DetailCard.item>
            <DetailCard.item>
              <IPOConfirm
                ref={ipoConfirmBox}
                mandatoryHoldingCommitmentRate={data.mandatoryHoldingCommitmentRate}
                data={buildMandatoryHoldingCommitmentRate()}
              />
              <DetailBottomButton
                ipoName={data.name}
                agentIdList={getAgentIdList()}
                proposal={data.proposal}
                offerBeginAt={data.offerBeginAt}
              />
            </DetailCard.item>
          </>
        )}
      </DetailCard.wrapper>
    </>
  );
};

export default Detail;
