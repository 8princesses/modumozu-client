"use client";

import colors from "@/styles/colors";
import { getFonts } from "@/styles/fonts";
import CheckBackground from "@/svg/CheckBackground";
import IngIcon from "@/svg/IngIcon";
import styled from "styled-components";
import dayjs, { Dayjs } from "dayjs";
import { Fragment } from "react";
import NumberMarkIcon from "@/svg/NumberMarkIcon";

const processes: POPlanProcessList = [
  { label: "수요 예측일", date: "2023-09-20" },
  { label: "청약일", date: ["2023-09-23", "2023-10-03"] },
  { label: "환불일", date: "2023-10-04" },
  { label: "상장일", date: "2023-10-15" },
];

export type POPlanProcessList = POPlanProcessObject[];
type POPlanProcessDate = string | [string, string] | null;
type MarkStatus = "pass" | "ing" | "yet";
interface POPlanProcessObject {
  label: string;
  date: POPlanProcessDate;
}

const POPlan = () => {
  const checkNextDate = (index: number) => {
    if (index + 1 < processes.length) {
      let pass = false;
      for (let i = index; i < processes.length; i++) {
        const nextDate = processes[index + 1].date;
        if (nextDate !== null) {
          const today = dayjs();
          if (typeof nextDate === "string" && today.isAfter(dayjs(nextDate))) {
            pass = true;
            break;
          } else if (typeof nextDate === "object" && today.isAfter(dayjs(nextDate[1]))) {
            pass = true;
            break;
          }
        }
      }
      return pass;
    }
    return false;
  };
  const checkIsBetween = (today: Dayjs, start: string, end: string) => {
    return today.isAfter(start) && today.isBefore(end);
  };
  const getMarkStatus = (date: POPlanProcessDate, index: number): MarkStatus => {
    const today = dayjs();
    if (typeof date === "string") {
      const isAfter = today.isAfter(dayjs(date));
      if (isAfter) {
        return "pass";
      }
      return "yet";
    } else if (typeof date === "object" && date !== null) {
      const isAfter = today.isAfter(dayjs(date[1]));
      const isBetween = checkIsBetween(today, date[0], date[1]);
      if (isAfter) {
        return "pass";
      } else if (isBetween) {
        return "ing";
      }
      return "yet";
    } else {
      const isPass = checkNextDate(index);
      if (isPass) {
        return "pass";
      }
      return "yet";
    }
  };
  const renderProcessNumberIcon = (index: number) => {
    switch (index) {
      case 1:
        return <NumberMarkIcon.one />;
      case 2:
        return <NumberMarkIcon.two />;
      case 3:
        return <NumberMarkIcon.three />;
      case 4:
        return <NumberMarkIcon.four />;
      default:
        return null;
    }
  };
  const renderProcessIcon = (status: MarkStatus, index: number) => {
    switch (status) {
      case "pass":
        return <CheckBackground />;
      case "ing":
        return <IngIcon />;
      default:
        return renderProcessNumberIcon(index);
    }
  };
  const renderProcessDateText = (date: POPlanProcessDate) => {
    if (typeof date === "string") {
      return date;
    } else if (typeof date === "object" && date !== null) {
      return `${date[0]} ~ ${date[1]}`;
    } else {
      return "-";
    }
  };
  const renderProcessElement = (index: number, status: MarkStatus, date: POPlanProcessDate, label: string) => {
    return (
      <POPlanProcessItem key={label}>
        {renderProcessIcon(status, index + 1)}
        <POPlanProcessInfoWrap>
          <POPlanProcessInfoTitle>{label}</POPlanProcessInfoTitle>
          <POPlanProcessInfoDate>{renderProcessDateText(date)}</POPlanProcessInfoDate>
        </POPlanProcessInfoWrap>
      </POPlanProcessItem>
    );
  };
  const renderProcess = () => {
    return processes.map((process, index) => {
      const { date, label } = process;
      const status = getMarkStatus(date, index);
      if (index === 0) {
        return renderProcessElement(index, status, date, label);
      }
      return (
        <Fragment key={process.label}>
          {status === "ing" || status === "pass" ? (
            <BarWrap>
              <Bar />
            </BarWrap>
          ) : (
            <BarWrap>
              <DisabledBar />
            </BarWrap>
          )}
          {renderProcessElement(index, status, date, label)}
        </Fragment>
      );
    });
  };

  return (
    <POPlanWrap>
      <POPlanTitle>공모 일정</POPlanTitle>
      <POPlanProcessList>{renderProcess()}</POPlanProcessList>
    </POPlanWrap>
  );
};

export default POPlan;

const POPlanWrap = styled.div`
  padding: 32px 16px;
`;

const POPlanTitle = styled.h2`
  ${getFonts("H2_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY};
`;

const POPlanProcessList = styled.ul`
  margin-top: 24px;
`;

const POPlanProcessItem = styled.li`
  display: flex;
  align-items: center;
`;
const POPlanProcessInfoWrap = styled.div`
  margin-left: 16px;
`;
const POPlanProcessInfoTitle = styled.div`
  ${getFonts("CAPTION1_MEDIUM")}
  color:${colors.FONT_LIGHT.TERIARY};
`;
const POPlanProcessInfoDate = styled.div`
  margin-top: 2px;
  ${getFonts("H5_SEMIBOLD")}
  color:${colors.FONT_LIGHT.PRIMARY}
`;

const BarWrap = styled.div`
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Bar = styled.div`
  width: 2px;
  height: 24px;
  background-color: ${colors.BLUE[5]};
`;
const DisabledBar = styled.div`
  width: 2px;
  height: 24px;
  background-color: ${colors.GRAY[2]};
`;
