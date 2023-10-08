import { BottomSheetTitle } from "./BottomSheetTitle";
import Button from "../Button";
import { Table } from "../Table";

type availableTimeMapType = {
  [key: string]: string;
};

export const BottomSheetAvaillabeTime = () => {
  const availableTimeMap: availableTimeMapType = {
    KB증권: "9 ~ 16시",
    한화투자증권: "10 ~ 16시",
    현대차증권: "10 ~ 16시",
    유진투자증권: "10 ~ 16시",
    미래에셋증권: "10 ~ 16시",
  };

  return (
    <>
      <BottomSheetTitle>
        <h2>주간사별 청약 가능 시간</h2>
      </BottomSheetTitle>
      <Table>
        <thead>
          <tr>
            <th>주간사</th>
            <th>청약 가능 시간</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(availableTimeMap).map((key) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{availableTimeMap[key]}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button color="secondary" fill={false} width="100%" $font="BUTTON1_REGULAR">
        닫기
      </Button>
    </>
  );
};
