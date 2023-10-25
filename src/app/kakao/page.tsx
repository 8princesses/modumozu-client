"use client";

import Button from "@/components/common/Button";
import { BottomSheet } from "@/components/common/bottomSheet/BottomSheet";
import AgreeAllButton from "@/components/kakao/AgreeAllButton";
import Term from "@/components/kakao/Term";
import TERMS from "@/constants/terms";
import { setStorage } from "@/util/storage";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Kakao = () => {
  const router = useRouter();
  const [agreedTerms, setAgreeTerms] = useState<number[]>([]);
  const searchParams = new URL(window.location.href).searchParams;
  const status = searchParams.get("status");

  if (status !== "ready") {
    router.push("/home");
  }

  const setTokens = () => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (accessToken && refreshToken) {
      setStorage("ACCESS_TOKEN", accessToken);
      setStorage("REFRESH_TOKEN", refreshToken);
    }
  };
  const handleCheckAllClick = () => {
    if (agreedTerms.length === TERMS.length) {
      setAgreeTerms([]);
    } else {
      setAgreeTerms(TERMS.map((_, index) => index));
    }
  };
  const handleCheckClick = (index: number) => {
    if (agreedTerms.includes(index)) {
      setAgreeTerms((prev) => prev.filter((prevIndex) => prevIndex !== index));
    } else {
      setAgreeTerms((prev) => prev.concat([index]));
    }
  };
  const handleSignUpClick = async () => {
    if (agreedTerms.length === TERMS.length) {
      setTokens();
      router.push("/on-boarding");
    }
  };

  useEffect(() => {
    let token = new URL(window.location.href).searchParams.get("accessToken");

    if (!token) {
      router.push("/");
    }
  }, [router]);

  return (
    <BottomSheet visible={true} handleOverlayClick={() => {}}>
      <BottomSheetWrap>
        <AgreeAllButton onClick={handleCheckAllClick} checked={agreedTerms.length === TERMS.length} />
        <TermList>
          {TERMS.map((term, index) => {
            return (
              <Term
                key={term.title}
                title={term.title}
                link={term.link}
                onCheckClick={() => handleCheckClick(index)}
                checked={agreedTerms.includes(index)}
              />
            );
          })}
        </TermList>
        <Button disabled={!(agreedTerms.length === TERMS.length)} onClick={handleSignUpClick} width="100%">
          가입 완료
        </Button>
      </BottomSheetWrap>
    </BottomSheet>
  );
};

export default Kakao;

const BottomSheetWrap = styled.div`
  padding-bottom: 20px;
`;
const TermList = styled.div`
  padding: 12px 16px 24px 16px;
  > * + * {
    margin-top: 9px;
  }
`;
