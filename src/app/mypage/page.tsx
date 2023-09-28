"use client";

import ButtonSection from "@/components/mypage/ButtonSection";
import MenuSection from "@/components/mypage/MenuSection";
import ProfileSection from "@/components/mypage/ProfileSection";
import React, { FC } from "react";

const MyPage: FC = () => {
  return (
    <>
      <ProfileSection />
      <ButtonSection />
      <MenuSection />
    </>
  );
};

export default MyPage;
