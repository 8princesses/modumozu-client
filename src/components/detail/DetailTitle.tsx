"use client";

import { Status } from "@/dto/detail";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import dayjs from "dayjs";
import { FC } from "react";
import styled from "styled-components";

interface DetailTitleProps {
  name: string;
  category: string;
  status: Status;
  offerEndAt: string;
  offerBeginAt: string;
  listingAt: string;
}

const DetailTitle: FC<DetailTitleProps> = (props) => {
  const { name, category, status, offerEndAt, offerBeginAt, listingAt } = props;

  const renderStatus = () => {
    const today = dayjs();

    switch (status) {
      case "READY":
        const isBefore = today.diff(offerBeginAt, "day") + 1;
        return <span>D-{isBefore}</span>;
      case "IN_PROGRESS":
        return <InPregressText>&bull; 진행 중</InPregressText>;
      case "DONE":
        const isBeforeListing = today.isBefore(dayjs(listingAt));
        if (isBeforeListing) {
          const afterDayFromDone = today.diff(dayjs(offerEndAt)) + 1;
          return <span>상장 종료+{afterDayFromDone}</span>;
        }
        return <ListingText>상장 완료</ListingText>;
      default:
        return "";
    }
  };

  return (
    <DetailTitleWrap>
      <StatusWrap>{renderStatus()}</StatusWrap>
      <DetailTitleText>
        {name}
        {/* <CaretIcon.right /> */}
      </DetailTitleText>
      <DetailCategoryText>{category}</DetailCategoryText>
    </DetailTitleWrap>
  );
};

export default DetailTitle;

const DetailTitleWrap = styled.div`
  padding: 12px 16px 48px 16px;
  ${getFonts("H6_SEMIBOLD")}
  color:${colors.FONT_LIGHT.TERIARY};
`;
const StatusWrap = styled.div`
  margin-bottom: 8px;
`;
const InPregressText = styled.span`
  color: ${colors.FONT.ACCENT};
`;
const ListingText = styled.span`
  color: ${colors.BLUE[8]};
`;
const DetailTitleText = styled.h1`
  display: flex;
  align-items: center;
  gap: 0 2px;
  ${getFonts("H2_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;
const DetailCategoryText = styled.div`
  margin-top: 4px;
`;
