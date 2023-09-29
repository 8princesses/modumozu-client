"use client";

import colors from "@/styles/colors";
import { ReactNode } from "react";
import styled from "styled-components";

const DetailCardItem = ({ children }: { children: ReactNode }) => {
  return <DetailCardWrap>{children}</DetailCardWrap>;
};

const DetailCardWrapper = ({ children }: { children: ReactNode }) => {
  return <DetailCardWrapperStyle>{children}</DetailCardWrapperStyle>;
};

export default Object.assign(
  {},
  {
    wrapper: DetailCardWrapper,
    item: DetailCardItem,
  },
);

const DetailCardWrapperStyle = styled.main`
  border-radius: 24px 24px 0px 0px;
  box-shadow: 0px -8px 16px 0px rgba(192, 192, 192, 0.08);
  overflow: hidden;
  > article + article {
    margin-top: 12px;
  }
`;

const DetailCardWrap = styled.article`
  background-color: ${colors.WHITE};
`;
