import React, { useState, useEffect } from "react";
import { useMantineTheme, Indicator } from '@mantine/core';
import { DatePicker, Calendar, Month, getMonthDays } from "@mantine/dates";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksDates } from "../../store/slices/tasksSlice";
import { ThunkActionDispatch, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

const CustomCalendar = () => {
  const [month, onMonthChange] = useState(new Date());
  const [valueDate, setValueDate] = useState( new Date());
  const [value, setValue] = useState<Date| null>(null);
  const theme = useMantineTheme();
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const taskDates = useSelector((state: RootState) => state.taskSlice.tasks)
  useEffect(() => {
    dispatch(fetchTasksDates());
  },[]);

  console.log(value?.toISOString());

  return (
    <>

      <Calendar
        onChange={setValue}
        initialMonth={new Date()}
        value ={valueDate}
        allowLevelChange={false}
        labelFormat="MMMM, YYYY"
        size="xl"
        renderDay={(date) => {
          const day = date.getDate();
          const dayT = (new Date(date)).toLocaleDateString();
          const currD = (new Date()).toLocaleDateString();
          taskDates.filter((taskDate: Date) => {
            const taskFormatDate = (new Date(taskDate)).toLocaleDateString();
            console.log(taskFormatDate);
            if (taskFormatDate == dayT) {
              return (
                <Indicator size={20} color="green" offset={8}>
                  <div>{day}</div>
                </Indicator>
                )
            }
          })
          // if( dayT == currD ){
          //   return (
          //   <Indicator size={20} color="green" offset={8}>
          //     <div>{day}</div>
          //   </Indicator>
          //   )
          // }
          return (
            <Indicator size={6} color="red" offset={8} disabled={ day != 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      
      />
    </>
  );
};

export default CustomCalendar;
