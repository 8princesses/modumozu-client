import axios from "axios";
import { StockInfoType } from "./interestingApiService";

const API_BASE_URL = "https://api.modumozu.com/api/ipo/v1";

const client = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: "Bearer token",
  },
});

interface UpcomingStockType {
  totalIpoCount: number;
  activeIpoCount: number;
  ipos: StockInfoType[];
}

export const fetchUpcomingStocks = async (): Promise<UpcomingStockType> => {
  const { data } = await client.get(API_BASE_URL + "/ipo");
  return data.data;
};

interface EndedStockType {
  id: number;
  logo: string;
  name: string;
  status: string;
  listingAt: string;
  comparedRate: number;
}

export const fetchEndedStocks = async (): Promise<EndedStockType[]> => {
  const { data } = await client.get(API_BASE_URL + "/closed-ipo");
  return data.data.ipos;
};
