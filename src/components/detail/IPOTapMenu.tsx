"use client";

import { Dispatch, FC, SetStateAction } from "react";
import TapMenu from "../common/TapMenu";
import POPlan from "./POPlan";
import PONewsList from "./PONewsList";
import { News } from "@/dto/news";

interface IPOTapMenuProps {
  news: News[];
  demandForecastBeginAt: string;
  refundAt: string;
  listingAt: string;
  offerBeginAt: string;
  offerEndAt: string;
  state: boolean;
  setState: Dispatch<SetStateAction<boolean>>;
}

const IPOTapMenu: FC<IPOTapMenuProps> = ({
  news,
  demandForecastBeginAt,
  refundAt,
  listingAt,
  offerBeginAt,
  offerEndAt,
  state,
  setState,
}) => {
  const handleChangeTapMenu = (value: boolean) => {
    setState(value);
  };

  return (
    <div>
      <TapMenu
        value={state}
        options={[
          { label: "공모주 정보", value: true },
          { label: "관련 뉴스", value: false },
        ]}
        onChange={handleChangeTapMenu}
      />
      {state ? (
        <POPlan
          plan={[
            { label: "수요 예측일", date: demandForecastBeginAt },
            { label: "청약일", date: [offerBeginAt, offerEndAt] },
            { label: "환불일", date: refundAt },
            { label: "상장일", date: listingAt === "2000-01-01" ? "" : listingAt },
          ]}
        />
      ) : (
        <PONewsList newsList={news} />
      )}
    </div>
  );
};

export default IPOTapMenu;
