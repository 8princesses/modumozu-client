"use cliect";

import colors from "@/styles/colors";
import React from "react";
import styled from "styled-components";
import MyPageButton from "./MyPageButton";
import HeartIcon from "@/svg/HeartIcon";
import BankIcon from "@/svg/BankIcon";
import { useRouter } from "next/navigation";

const ButtonSection = () => {
  const router = useRouter();
  return (
    <Container>
      <ButtonWrapper>
        <MyPageButton handleClick={() => router.push("/account")}>
          <BankIcon color={colors.ON.PRIMARY} />내 계좌
        </MyPageButton>
        <Bar />
        <MyPageButton handleClick={() => router.push("/interesting-stock")}>
          <HeartIcon.fill color={colors.ON.PRIMARY} />
          관심공모주
        </MyPageButton>
      </ButtonWrapper>
    </Container>
  );
};

export default ButtonSection;

const Container = styled.section`
  background-color: ${colors.WHITE};
  padding: 20px 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.GRAY[1]};
  border-radius: 16px;
`;

const Bar = styled.div`
  height: 28px;
  width: 0;
  border-left: 1px solid ${colors.GRAY[3]};
`;
