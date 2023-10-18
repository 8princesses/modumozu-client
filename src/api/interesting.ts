import { InterestingStockType } from "@/types";
import instance from "./common";

const url = "/api/ipo/v1";

/**
 * 관심 공모주 조회
 */
export const fetchInterestingStocks = async (): Promise<InterestingStockType> => {
  const { data } = await instance.get(url + "/ipo/pin");
  return data.data;
};

/**
 * 관심 공모주 수정
 */
export const modifyInterestingStock = async (id: number) => {
  const resp = await instance.put(url + "/ipo/pin", {
    ipoId: id,
  });
  return resp;
};
