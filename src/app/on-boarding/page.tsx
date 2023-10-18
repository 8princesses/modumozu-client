"use client";

import { useEffect } from "react";

const OnBoarding = () => {
  useEffect(() => {}, []);

  return (
    <div>
      온보딩
      <button
        onClick={() => {
          console.log("znzlemf", document.cookie);
        }}
      >
        쿠키들
      </button>
    </div>
  );
};

export default OnBoarding;
