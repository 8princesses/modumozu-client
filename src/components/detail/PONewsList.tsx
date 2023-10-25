"use client";

import { FC } from "react";
import styled from "styled-components";
import PONews from "./PONews";
import { News, NewsResponse } from "@/dto/news";
import { getFonts } from "@/styles/fonts";

interface PONewsListProps {
  newsList: News[];
}

const PONewsList: FC<PONewsListProps> = ({ newsList }) => {
  return (
    <PONewsListWrap>
      {newsList.length === 0 && <NoPONews>{"관련 뉴스가 없습니다."}</NoPONews>}
      {newsList.map((news) => {
        return <PONews key={news.id} {...news} />;
      })}
    </PONewsListWrap>
  );
};

export default PONewsList;

const PONewsListWrap = styled.div`
  padding-top: 16px;
`;

const NoPONews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  ${getFonts("H3_SEMIBOLD")}
`;
