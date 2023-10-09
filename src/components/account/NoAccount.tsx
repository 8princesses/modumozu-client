"use client";
import BankIcon from "@/svg/BankIcon";
import Button from "../common/Button";
import styled from "styled-components";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { useState } from "react";
import AddAccount from "./AddAccount";

export const NoAccount = () => {
  const [isShowingBottomSheet, setIsShowingBottomSheet] = useState(false);
  return (
    <NoAccountWrapper>
      <BankIcon width={80} height={80} />
      <h3>보유 중인 증권 계좌가 없어요.</h3>
      <p>
        보유 계좌를 추가하고 더 정확한
        <br /> 공모주 일정을 확인하세요.
      </p>
      <Button shape="round" width="160px" $font="BUTTON1_SEMIBOLD" onClick={() => setIsShowingBottomSheet(true)}>
        보유 계좌 추가
      </Button>
      <AddAccount visible={isShowingBottomSheet} setInvisible={() => setIsShowingBottomSheet(false)} />
    </NoAccountWrapper>
  );
};

const NoAccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;

  svg {
    margin-bottom: 8px;
  }

  h3 {
    margin-bottom: 6px;
    color: ${colors.FONT_LIGHT.PRIMARY};
    ${getFonts("H3_SEMIBOLD")};
  }

  p {
    margin-bottom: 32px;
    color: ${colors.FONT_LIGHT.TERIARY};
    text-align: center;
    ${getFonts("H6_REGULAR")}
  }
`;
