import React, { useState } from "react";
import { useMantineTheme, Indicator } from '@mantine/core';
import { DatePicker, Calendar, Month, getMonthDays } from "@mantine/dates";

const CustomCalendar = () => {
  const [month, onMonthChange] = useState(new Date());
  const [valueDate, setValueDate] = useState( new Date());
  const theme = useMantineTheme();

  return (
    <>

      <Calendar
        initialMonth={new Date()}
        value ={valueDate}
        allowLevelChange={false}
        labelFormat="MMMM, YYYY"
        renderDay={(date) => {
          const day = date.getDate();
          if( day == 13){
            return (
            <Indicator size={20} color="blue" offset={8}>
              <div>{day}</div>
            </Indicator>
            )
          }
          return (
            <Indicator size={6} color="red" offset={8} disabled={day !== 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      
      />
    </>
  );
};

export default CustomCalendar;
