import { Dispatch, FC, SetStateAction, forwardRef, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import "@/styles/datepicker.css";
import { AgentRegisterType } from "../account/AddAccount";
import CaretIcon from "@/svg/CaretIcon";
import colors from "@/styles/colors";

interface CustomDatePickerProps {
  boxIdx: number;
  setAccounts: Dispatch<SetStateAction<AgentRegisterType[]>>;
}

const CustomDatePicker: FC<CustomDatePickerProps> = (props) => {
  const { boxIdx, setAccounts } = props;
  const [selectedDate, setSelectedDate] = useState<Date | null>();
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
    />
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
