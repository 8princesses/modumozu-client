"use client";
import styled from "styled-components";
import MenuList from "./MenuList";
import colors from "@/styles/colors";
import { useState } from "react";
import SmallModalBox from "../common/SmallModalBox";
import { useMutation } from "@tanstack/react-query";
import { deleteMember } from "@/api/member";
import { useRouter } from "next/navigation";
import { removeAllTokens } from "@/util/storage";

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
  const { mutate: withdrawal } = useMutation(deleteMember);
  const router = useRouter();

  const handleCloseComfirmModal = () => {
    setIsModalShowing(initalModalData);
  };
  const handleLogoutClick = () => {
    setIsModalShowing(logoutModalData);
  };
  const showDeleteAlertModal = () => {
    setIsModalShowing(withdrawalDoneModalData);
  };
  const handleDeleteClick = () => {
    setIsModalShowing(withdrawalAskModalData);
  };

  const logoutModalData: ModalData = {
    title: "로그아웃하시겠습니까?",
    buttonText: ["취소", "확인"],
    handlePrimaryButtonClick: () => {
      // TODO: 로그인 방식 변경되면 수정
      removeAllTokens();
      handleCloseComfirmModal();
      router.push("/");
    },
  };

  const withdrawalDoneModalData: ModalData = {
    title: "모두모주 탈퇴가 완료되었습니다.",
    buttonText: "다음에 또 올게요.",
    handlePrimaryButtonClick: () => {
      handleCloseComfirmModal();
      router.push("/");
    },
  };

  const withdrawalAskModalData: ModalData = {
    title: "탈퇴하시겠습니까?",
    content: "탈퇴 시 모든 정보는\n삭제되며 복구는 불가능합니다.\n정말 탈퇴하시겠습니까?",
    buttonText: ["더써볼래요", "탈퇴할게요"],
    handlePrimaryButtonClick: () => {
      withdrawal();
      removeAllTokens();
      showDeleteAlertModal();
    },
  };

  return (
    <SectionWrapper>
      <MenuGroup>
        <MenuList
          menuName="FAQ"
          handleClick={() => {
            window.open("https://almond-sand-202.notion.site/FAQ-49d2dd9ff6d640df9751e14aee7a8a6f", "_blank");
          }}
        />
        <MenuList menuName="로그아웃" handleClick={handleLogoutClick} />
        <MenuList menuName="탈퇴하기" handleClick={handleDeleteClick} />
      </MenuGroup>
      <MenuGroup>
        <MenuList
          menuName="개인정보 처리 방침"
          handleClick={() => {
            window.open("https://almond-sand-202.notion.site/90bc8f665696435eac65113c22be8b2e", "_blank");
          }}
        />
        <MenuList
          menuName="서비스 이용 동의"
          handleClick={() => {
            window.open("https://almond-sand-202.notion.site/85b714cd3b454b25b0175c265b8af861", "_blank");
          }}
        />
      </MenuGroup>
      <SmallModalBox
        visible={isModalShowing.title.length > 0}
        title={isModalShowing.title}
        content={isModalShowing.content}
        buttonText={isModalShowing.buttonText}
        handlePrimaryButtonClick={isModalShowing.handlePrimaryButtonClick}
        onClose={handleCloseComfirmModal}
      />
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
