"use client";

import { FC, ReactNode } from "react";
import styled from "styled-components";

interface WorkThroughContentProps {
  header: ReactNode;
  content: ReactNode;
  blur?: boolean;
}

const WorkThroughContent: FC<WorkThroughContentProps> = ({ header, content, blur = true }) => {
  return (
    <>
      {header}
      <WorkThroughWrap>
        <Content>{content}</Content>
        {blur && <Blur />}
      </WorkThroughWrap>
    </>
  );
};

export default Object.assign(WorkThroughContent);

const WorkThroughWrap = styled.div`
  flex: 1;
  position: relative;
  margin-top: 20px;
  height: 30px;
  overflow: hidden;
`;
const Content = styled.div`
  margin: 60px auto 0px auto;
  width: 70%;
`;
const Blur = styled.div`
  position: absolute;
  height: 375px;
  bottom: 0;
  width: 100%;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) -11.99%, #fff 27.38%);
`;
