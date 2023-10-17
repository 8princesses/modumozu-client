import React, { useEffect } from "react";
import Portal from "./Portal";
import styled from "styled-components";
import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import { useRecoilState } from "recoil";
import { ToastAtom } from "@/recoil/toastState";

const Toast = () => {
  const [toastString, setToastString] = useRecoilState(ToastAtom);
  useEffect(() => {
    const timer = setInterval(() => {
      if (toastString.length > 0) {
        setToastString("");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [toastString, setToastString]);

  return <Portal>{toastString.length > 0 && <ToastBox>{toastString}</ToastBox>}</Portal>;
};

export default Toast;

const ToastBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 343px;
  position: fixed;
  left: 50%;
  translate: -50%;
  bottom: 20px;
  background-color: ${colors.BLACK_TRANSPARENT_SCALE[2]};
  border-radius: 6px;
  padding: 12px 16px 12px 16px;
  text-align: center;
  color: white;
  ${getFonts("H5_REGULAR")}
`;
