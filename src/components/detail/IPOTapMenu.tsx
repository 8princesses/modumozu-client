"use client";

import { useState } from "react";
import TapMenu from "../common/TapMenu";
import PONews from "./PONews";
import POPlan from "./POPlan";

const IPOTapMenu = () => {
  const [state, setState] = useState(true);

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
      {state ? <POPlan /> : <PONews />}
    </div>
  );
};

export default IPOTapMenu;
