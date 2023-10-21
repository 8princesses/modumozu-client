import { EndedStockType, UpcomingStockType } from "@/types";
import instance from "./common";

const url = "/api/ipo/v1";

/**
 * IPO 상세 조회
 */
export const getDetailById = async (id: string) => {
  const data = await instance.get(`${url}/${id}`);
  console.log("data", data);
};

/**
 * 다가오는 공모주 조회
 */
export const fetchUpcomingStocks = async (): Promise<UpcomingStockType> => {
  const { data } = await instance.get(url + "/ipo");
  return data.data;
};

/**
 * 종료된 공모주 조회
 */
export const fetchEndedStocks = async (page: number): Promise<EndedStockType[]> => {
  const { data } = await instance.get(`${url}/closed-ipo?page=${page}&size=10`);
  return data.data.ipos;
};
