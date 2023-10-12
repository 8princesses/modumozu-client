import colors from "@/styles/colors";
import { Dispatch, FC, SetStateAction, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import "@/styles/datepicker.css";
import { AgentRegisterType } from "../account/AddAccount";

interface CustomDatePickerProps {
  boxIdx: number;
  setAccounts: Dispatch<SetStateAction<AgentRegisterType[]>>;
}

const CustomDatePicker: FC<CustomDatePickerProps> = (props) => {
  const { boxIdx, setAccounts } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>();

  return (
    <StyledDatePicker
      renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
        <StyledHeader>
          <span className="react-datepicker__current-month">
            {monthDate.toLocaleString("ko-KR", {
              month: "numeric",
              year: "numeric",
            })}
          </span>
          <ButtonGroup>
            <button aria-label="Previous Month" onClick={decreaseMonth}>
              <span>{"<"}</span>
            </button>
            <button aria-label="Next Month" onClick={increaseMonth}>
              <span>{">"}</span>
            </button>
          </ButtonGroup>
        </StyledHeader>
      )}
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      maxDate={new Date()}
      selected={selectedDate}
      onChange={(date: Date) => {
        setSelectedDate(date);
        setAccounts((prev) => {
          const newPrev = [...prev];
          newPrev.splice(boxIdx, 1, {
            agentId: prev[boxIdx].agentId,
            registeredAt:
              date.getFullYear() +
              "-" +
              ("0" + (date.getMonth() + 1)).slice(-2) +
              "-" +
              ("0" + date.getDate()).slice(-2),
          });
          return newPrev;
        });
      }}
      placeholderText="개설일 선택"
      dayClassName={(date) => (date.getDay() === 0 || date.getDay() === 6 ? "weekend" : "")}
      withPortal
    ></StyledDatePicker>
  );
};

export default CustomDatePicker;

const StyledDatePicker = styled(DatePicker)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: 44px;
  padding: 9px 12px 9px 16px;
  color: ${colors.FONT_LIGHT.PRIMARY};
  border: 1px solid ${colors.ON.BASIC_LIGHT};
  border-radius: 2px;
  text-align: left;
`;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const ButtonGroup = styled.div``;
