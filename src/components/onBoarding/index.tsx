"use client";

import { useEffect, useState } from "react";
import OnboardingContent from "./OnBoardingContent";
import AccountList from "./AccountList";
import SelectedAccount from "./SelectedAccount";
import ProgressBar from "../common/ProgressBar";
import Button from "../common/Button";
import styled from "styled-components";
import { getFonts } from "@/styles/fonts";
import colors from "@/styles/colors";
import dayjs from "dayjs";
import { useRouter } from "next/navigation";
import SmallModalBox from "../common/SmallModalBox";
import { useMutation } from "@tanstack/react-query";
import BottomSheetSelectDate from "@/components/common/bottomSheet/BottomSheetSelectDate";
import { addMyAccounts } from "@/api/account";
import { AgentRegisterType } from "@/types";

type SelectDateType = "select" | "today" | "month";

const OnBoarding = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const { mutate } = useMutation(addMyAccounts, {
    onSuccess: () => {
      moveToHome();
    },
  });

  const [selectedAgent, setSelectedAgent] = useState<boolean[]>(
    Array(24)
      .fill(null)
      .map(() => false),
  );
  const [selectedAgentNumber, setSelectedAgentNumber] = useState<number[]>([]);
  const [isDateModalOpen, setIsDateModalOpen] = useState(false);
  const [isComfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();

  const checkSelectedAgent = () => {
    return selectedAgent.findIndex((value) => value) > -1;
  };

  const buildRequestAddAccountForm = (type: SelectDateType): AgentRegisterType[] => {
    const accountList = buildSelectedAgentList();

    const getDate = (type: SelectDateType) => {
      switch (type) {
        case "month":
          return dayjs().subtract(30, "day").format("YYYY-MM-DD");
        case "select":
          return dayjs(selectedDate).format("YYYY-MM-DD");
        case "today":
          return dayjs().format("YYYY-MM-DD");
        default:
          return dayjs().format("YYYY-MM-DD");
      }
    };

    return accountList.map((agentId) => {
      return {
        agentId,
        registeredAt: getDate(type),
      };
    });
  };
  const buildSelectedAgentList = () => {
    return selectedAgent.reduce((list, value, index) => {
      if (value) {
        return list.concat(index);
      } else {
        return list;
      }
    }, [] as number[]);
  };
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };
  const handleOpenConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };
  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };
  const handleDateModalOpen = () => {
    setIsDateModalOpen(true);
  };
  const handleNextStepClick = () => {
    setStep((step) => step + 1);
  };
  const handleBankClick = (id: number) => {
    if (selectedAgent[id]) {
      const temp = [...selectedAgent];
      temp[id] = false;
      setSelectedAgent(temp);
    } else {
      const temp = [...selectedAgent];
      temp[id] = true;
      setSelectedAgent(temp);
    }
  };
  const handleSendFormClick = (type: SelectDateType) => {
    return () => {
      const formData = buildRequestAddAccountForm(type);
      mutate(formData);
    };
  };
  const moveToHome = () => {
    router.push("/home");
  };

  const renderPage = () => {
    switch (step) {
      case 1:
        return (
          <OnboardingContent
            title={
              <OnboardingTitleWrap>
                <OnboardingTitle>
                  보유하고 있는
                  <br />
                  증권 계좌를 선택해 주세요.
                </OnboardingTitle>
                <OnboardingDescription>복수 선택 가능</OnboardingDescription>
              </OnboardingTitleWrap>
            }
            content={<AccountList selectedAgent={selectedAgent} onChange={handleBankClick} />}
          />
        );
      case 2:
        return (
          <OnboardingContent
            title={
              <OnboardingTitleWrap>
                <OnboardingTitle>
                  마지막 계좌 개설을 {dayjs().subtract(20, "day").format("MM월 DD일")}
                  <br />
                  이전에 하셨나요?
                </OnboardingTitle>
                <OnboardingDescription>
                  일부 증권사에서 20일 이내에 계좌를 개설한 내역이 있을 경우 신규 계좌 개설을 막고 있어요.
                  <br />
                  마지막 개설 시점을 입력 후 더 정확한 일정을 확인하세요.
                </OnboardingDescription>
              </OnboardingTitleWrap>
            }
            content={<SelectedAccount selectedAccount={selectedAgentNumber} />}
          />
        );
      default:
        return null;
    }
  };
  const renderButton = () => {
    if (step === 1) {
      if (checkSelectedAgent()) {
        return (
          <>
            <Button shape="round" width="100%" onClick={handleNextStepClick}>
              선택 완료
            </Button>
            <Button color="secondary" shape="round" width="100%" onClick={moveToHome}>
              보유 계좌 없음
            </Button>
          </>
        );
      }
      return (
        <>
          <Button disabled shape="round" width="100%">
            선택 완료
          </Button>
          <Button color="secondary" shape="round" width="100%" onClick={moveToHome}>
            보유 계좌 없음
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button shape="round" width="100%" onClick={handleSendFormClick("month")}>
            네
          </Button>
          <Button color="secondary" shape="round" width="100%" onClick={handleDateModalOpen}>
            아니요
          </Button>
        </>
      );
    }
  };

  useEffect(() => {
    if (step === 2) {
      setSelectedAgentNumber(buildSelectedAgentList());
    }
  }, [step, buildSelectedAgentList]);

  return (
    <OnboardingWrap>
      <ProgressBar totalStep={5} currentStep={3 + step} />
      {renderPage()}
      <ButtonWrap>{renderButton()}</ButtonWrap>
      <SmallModalBox
        visible={isComfirmModalOpen}
        title={"개설일 입력을 그만하시겠어요?"}
        content={
          <span>
            개설일을 입력하지 않으면{" "}
            <ComfirmModalText>청약 가능한 공모주 일정을 확인하지 못할 수 있어요.</ComfirmModalText>
          </span>
        }
        buttonText={["그만할래요.", "입력할게요."]}
        handlePrimaryButtonClick={handleCloseConfirmModal}
        onClose={handleSendFormClick("today")}
      />
      <BottomSheetSelectDate
        visible={isDateModalOpen}
        setInvisible={handleOpenConfirmModal}
        onClick={handleSendFormClick("select")}
        selectedDate={selectedDate}
        disableButton={!selectedDate}
        onDateChange={handleDateChange}
      />
    </OnboardingWrap>
  );
};

export default OnBoarding;

const OnboardingWrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: calc(var(--var, 1vh) * 100);
  height: 1vh;
  height: 500px;
  padding-bottom: 20px;
`;

const ButtonWrap = styled.div`
  width: 100%;
  height: 100px;

  > * + * {
    margin-top: 8px;
  }
  padding: 0px 16px;
`;
const ComfirmModalText = styled.span`
  color: ${colors.FONT.PRIMARY};
`;

const OnboardingTitleWrap = styled.div`
  padding: 32px 16px 16px 16px;
`;
const OnboardingTitle = styled.h1`
  color: ${colors.FONT_LIGHT.PRIMARY};
  ${getFonts("H2_SEMIBOLD")}
`;
const OnboardingDescription = styled.div`
  margin-top: 16px;
  color: ${colors.FONT_LIGHT.SECONDARY};
  ${getFonts("BODY1_REGULAR")};
`;
