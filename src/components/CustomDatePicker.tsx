import colors from "@/styles/colors";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

const CustomDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState();

  return (
    <StyledDatePicker
      dateFormat="yyyy.MM.dd"
      shouldCloseOnSelect
      maxDate={new Date()}
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
    />
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
