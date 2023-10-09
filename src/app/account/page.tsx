"use client";
import { NoAccount } from "@/components/account/NoAccount";
import { fetchMyAccounts } from "@/service/apiService";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const MyPage: FC = () => {
  const { isLoading, data } = useQuery({ queryKey: ["fetchMyAccounts"], queryFn: fetchMyAccounts });

  if (isLoading) {
    return <p>loading...</p>;
  }

  return <NoAccount></NoAccount>;
};

export default MyPage;
