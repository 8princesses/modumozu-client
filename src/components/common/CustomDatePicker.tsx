import { FC, forwardRef, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled, { createGlobalStyle } from "styled-components";
import CaretIcon from "@/svg/CaretIcon";
import colors from "@/styles/colors";

interface CustomDatePickerProps {
  selectedDate?: Date;
  onChange: (date: Date) => void;
}

const CustomDatePicker: FC<CustomDatePickerProps> = (props) => {
  const { selectedDate, onChange } = props;
  const inputRef = useRef(null);

  const CustomInput = forwardRef(function fn(props: any, ref) {
    return (
      <CustomButton {...props} ref={ref}>
        {selectedDate ? (
          <p>{selectedDate.getFullYear() + "." + (selectedDate.getMonth() + 1) + "." + selectedDate.getDate()}</p>
        ) : (
          "개설일 선택"
        )}
        <CaretIcon.down />
      </CustomButton>
    );
  });

  return (
    <>
      <DatePicker
        renderCustomHeader={({ monthDate, decreaseMonth, increaseMonth }) => (
          <StyledHeader>
            <span className="react-datepicker__current-month">
              {monthDate.toLocaleString("ko-KR", {
                month: "numeric",
                year: "numeric",
              })}
            </span>
            <div>
              <button aria-label="Previous Month" onClick={decreaseMonth}>
                <span>{"<"}</span>
              </button>
              <button aria-label="Next Month" onClick={increaseMonth}>
                <span>{">"}</span>
              </button>
            </div>
          </StyledHeader>
        )}
        customInput={<CustomInput ref={inputRef} />}
        dateFormat="yyyy.MM.dd"
        shouldCloseOnSelect
        maxDate={new Date()}
        selected={selectedDate}
        onChange={onChange}
        placeholderText="개설일 선택"
        dayClassName={(date) => (date.getDay() === 0 || date.getDay() === 6 ? "weekend" : "")}
        withPortal
      />
      <DatPickerStyle />
    </>
  );
};

export default CustomDatePicker;

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const CustomButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 44px;
  padding: 9px 12px 9px 16px;
  color: ${colors.FONT_LIGHT.SECONDARY};
  border: 1px solid ${colors.ON.BASIC_LIGHT};
  border-radius: 2px;
  text-align: left;

  p {
    color: ${colors.FONT_LIGHT.PRIMARY};
  }
`;

const DatPickerStyle = createGlobalStyle`
  .react-datepicker {
    padding: 20px;
  }

  .react-datepicker__portal {
    max-width: 375px;
    left: 50%;
    translate: -50%;
    background-color: #0000007a;
  }

  .react-datepicker__portal .react-datepicker__current-month {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: #121212;
  }

  .react-datepicker__portal .react-datepicker__day-name {
    font-size: 12px;
    line-height: 16px;
    padding: 8px 9.5px 8px 9.5px;
    width: 32px;
    height: 32px;
    color: #858585;
    margin: 0;
  }

  .react-datepicker__portal .react-datepicker__day {
    font-size: 12px;
    line-height: 16px;
    padding: 8px 9.5px 8px 9.5px;
    width: 32px;
    height: 32px;
    margin: 0;
    text-align: center;
  }

  .react-datepicker__header {
    background-color: white;
    border: none;
  }

  .react-datepicker__day--today {
    font-weight: 600;
    color: #2d5bee;
  }

  .react-datepicker__day--selected {
    background-color: #2d5bee;
    color: white;
    font-weight: 400;
  }

  .react-datepicker__day--selected:hover {
    background-color: #2d5bee;
    color: white;
    font-weight: 400;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #2d5bee;
    color: white;
    font-weight: 400;
  }

  .react-datepicker__navigation {
    display: flex;
    position: static;
    justify-content: flex-end;
  }

  .weekend {
    color: #f36a6a;
  }
`;
