import colors from "@/styles/colors";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import "@/styles/datepicker.css";

const CustomDatePicker = () => {
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
      onChange={(date: Date) => setSelectedDate(date)}
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
