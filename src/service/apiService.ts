import { AgentRegisterType } from "@/components/account/AddAccount";
import axios from "axios";

const API_BASE_URL = "https://api.modumozu.com/api/ipo/v1";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: "Bearer token",
  },
});

export interface myAccountType {
  id: string;
  agentId: number;
  registeredAt: string;
}

export const fetchMyAccounts = async (): Promise<myAccountType[]> => {
  const { data } = await client.get(API_BASE_URL + "/agent/member");
  return data.data;
};

export const addMyAccounts = async (addAgentList: AgentRegisterType[]) => {
  const resp = await client.post(API_BASE_URL + "/agent/member", {
    memberAgentList: addAgentList,
  });
  return resp;
};

export const modifyMyAccount = async (account: myAccountType) => {
  const resp = await client.put(API_BASE_URL + "/agent/member/" + account.id, {
    agentId: account.agentId,
    registeredAt: account.registeredAt,
  });
  return resp;
};

export const deleteMyAccount = async (id: string) => {
  const resp = await client.delete(API_BASE_URL + "/agent/member/" + id);
  return resp;
};
