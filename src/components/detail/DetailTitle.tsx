"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import CaretIcon from "@/svg/CaretIcon";
import { FC } from "react";
import styled from "styled-components";

interface DetailTitleProps {
  name: string;
  category: string;
  state?: "" | "" | "" | "";
  date?: string;
}

const DetailTitle: FC<DetailTitleProps> = (props) => {
  const { name, category, state, date } = props;
  return (
    <DetailTitleWrap>
      <DetailDateText>{date}</DetailDateText>
      <DetailTitleText>
        {name}
        <CaretIcon.right />
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
const DetailDateText = styled.p`
  margin-bottom: 8px;
`;
const DetailTitleText = styled.h1`
  display: flex;
  align-items: center;
  gap: 0 2px;
  margin-bottom: 4px;
  ${getFonts("H2_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;
const DetailCategoryText = styled.p`
  ${getFonts("H6_SEMIBOLD")}
  color: ${colors.FONT_DARK.TERIARY};
`;
