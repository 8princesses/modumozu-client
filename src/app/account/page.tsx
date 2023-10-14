"use client";
import Accounts from "@/components/account/Accounts";
import { NoAccount } from "@/components/account/NoAccount";
import { fetchMyAccounts } from "@/service/apiService";
import { useQuery } from "@tanstack/react-query";
import { FC } from "react";

const MyPage: FC = () => {
  const { isLoading, data } = useQuery({ queryKey: ["fetchMyAccounts"], queryFn: fetchMyAccounts });

  if (isLoading) {
    return <p>loading...</p>;
  } else {
    return data?.length == 0 || !data ? <NoAccount /> : <Accounts myAccounts={data ?? []} />;
  }
};

export default MyPage;
