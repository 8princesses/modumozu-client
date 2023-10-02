"use client";
import styled from "styled-components";
import MenuList from "./MenuList";
import colors from "@/styles/colors";
import { useState } from "react";
import Modal from "../common/Modal";

export interface ModalData {
  title: string;
  content?: string;
  buttonText: [string, string] | string;
  handlePrimaryButtonClick: () => void;
}

export const initalModalData = {
  title: "",
  buttonText: "",
  handlePrimaryButtonClick: () => {},
};

const MenuSection = () => {
  const [isModalShowing, setIsModalShowing] = useState<ModalData>(initalModalData);

  const logoutModalData: ModalData = {
    title: "로그아웃하시겠습니까?",
    buttonText: ["취소", "확인"],
    handlePrimaryButtonClick: () => setIsModalShowing(initalModalData),
  };

  const withdrawalDoneModalData: ModalData = {
    title: "모두모주 탈퇴가 완료되었습니다.",
    buttonText: "다음에 또 올게요.",
    handlePrimaryButtonClick: () => setIsModalShowing(initalModalData),
  };

  const withdrawalAskModalData: ModalData = {
    title: "탈퇴하시겠습니까?",
    content: "탈퇴 시 모든 정보는\n삭제되며 복구는 불가능합니다.\n정말 탈퇴하시겠습니까?",
    buttonText: ["더써볼래요", "탈퇴할게요"],
    handlePrimaryButtonClick: () => setIsModalShowing(withdrawalDoneModalData),
  };

  return (
    <SectionWrapper>
      <MenuGroup>
        <MenuList menuName="FAQ" handleClick={() => {}} />
        <MenuList menuName="로그아웃" handleClick={() => setIsModalShowing(logoutModalData)} />
        <MenuList menuName="탈퇴하기" handleClick={() => setIsModalShowing(withdrawalAskModalData)} />
      </MenuGroup>
      <MenuGroup>
        <MenuList menuName="개인정보 처리 방침" handleClick={() => {}} />
        <MenuList menuName="서비스 이용 동의" handleClick={() => {}} />
      </MenuGroup>
      {isModalShowing.title.length > 0 && (
        <Modal
          title={isModalShowing.title}
          content={isModalShowing.content}
          buttonText={isModalShowing.buttonText}
          handlePrimaryButtonClick={isModalShowing.handlePrimaryButtonClick}
          setIsModalShowing={setIsModalShowing}
        />
      )}
    </SectionWrapper>
  );
};

const SectionWrapper = styled.section`
  height: 100%;
  background-color: ${colors.GRAY[1]};
`;

const MenuGroup = styled.div`
  padding-top: 12px;
`;

export default MenuSection;
