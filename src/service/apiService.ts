import axios from "axios";

const API_BASE_URL = "https://api.modumozu.com/api/ipo/v1";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization:
      "Bearer token",
  },
});

interface myAccounts {
  data: string[];
  timestamp: number;
}

export const fetchMyAccounts = async (): Promise<myAccounts> => {
  const { data } = await client.get(API_BASE_URL + "/agent/member");
  return data;
};
