import { AgentRegisterType, myAccountType } from "@/types";
import instance from "./common";

const url = "/api/ipo/v1";

/**
 * 내 계좌 조회
 */
export const fetchMyAccounts = async (): Promise<myAccountType[]> => {
  const { data } = await instance.get(url + "/agent/member");
  return data.data;
};

/**
 * 내 계좌 추가
 */
export const addMyAccounts = async (addAgentList: AgentRegisterType[]) => {
  const resp = await instance.post(url + "/agent/member", {
    memberAgentList: addAgentList,
  });
  return resp;
};

/**
 * 내 계좌 수정
 */
export const modifyMyAccount = async (account: myAccountType) => {
  const resp = await instance.put(url + "/agent/member/" + account.id, {
    agentId: account.agentId,
    registeredAt: account.registeredAt,
  });
  return resp;
};

/**
 * 내 계좌 삭제
 */
export const deleteMyAccount = async (id: string) => {
  const resp = await instance.delete(url + "/agent/member/" + id);
  return resp;
};
