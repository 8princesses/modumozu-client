import axios from "axios";

const API_BASE_URL = "https://api.modumozu.com/api/ipo/v1";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: "Bearer token",
  },
});

export interface StockCountInfoType {
  total: number;
  ready: number;
  inProgress: number;
  done: number;
}

export interface StockInfoType {
  id: number;
  pinned: true;
  status: string;
  offerBeginAt: string;
  offerEndAt: string;
  name: string;
  category: string;
  minDesiredOfferPrice: number;
  maxDesiredOfferPrice: number;
  fixedOfferPrice: number;
  remainAgents: number[];
  nonRemainAgents: number[];
  proposal: {
    cardType: string;
    proposalTyp: string;
    needAt: string;
    agentId: number;
  };
}

interface InterestingStockType {
  count: StockCountInfoType;
  ipos: StockInfoType[];
}

export const fetchInterestingStocks = async (): Promise<InterestingStockType> => {
  const { data } = await client.get(API_BASE_URL + "/ipo/pin");
  return data.data;
};

export const modifyInterestingStock = async (id: number) => {
  const resp = await client.put(API_BASE_URL + "/ipo/pin", {
    ipoId: id,
  });
  return resp;
};
