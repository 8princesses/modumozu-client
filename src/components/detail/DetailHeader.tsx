"use client";

import BackIcon from "@/svg/BackIcon";
import HeartIcon from "@/svg/HeartIcon";
import ShareIcon from "@/svg/ShareIcon";
import styled from "styled-components";

const DetailHeader = () => {
  return (
    <Header>
      <div>
        <BackButton />
      </div>
      <div>
        <LikeButton />
        <ShareButton />
      </div>
    </Header>
  );
};
export default DetailHeader;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const BackButton = styled(BackIcon)`
  cursor: pointer;
`;

const LikeButton = styled(HeartIcon.border)`
  cursor: pointer;
  margin-right: 12px;
`;

const ShareButton = styled(ShareIcon)`
  cursor: pointer;
`;
