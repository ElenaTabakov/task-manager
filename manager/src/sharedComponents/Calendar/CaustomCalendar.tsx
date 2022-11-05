import React, { useState } from "react";
import { useMantineTheme } from '@mantine/core';
import { DatePicker, Calendar, Month, getMonthDays } from "@mantine/dates";

const CustomCalendar = () => {
  const [month, onMonthChange] = useState(new Date());
  const theme = useMantineTheme();

  return (
    <>
      {/* <Calendar month={month} onMonthChange={onMonthChange} />; */}
      <Calendar initialMonth={new Date()} initialLevel="month" />
      <Calendar
        initialMonth={new Date()}
        value ={new Date()}
        allowLevelChange={false}
        labelFormat="MMMM, YYYY"
        dayStyle = {(date) =>
          date.getDay() ===  6
            ? { backgroundColor: theme.colors.red[9], color: theme.white }
            : {backgroundColor: theme.colors.dark[1], color: theme.white }
        }
      />
    </>
  );
};

export default CustomCalendar;
