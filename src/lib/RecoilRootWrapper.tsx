"use client";

import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

const RecoilRootWrapper = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootWrapper;
