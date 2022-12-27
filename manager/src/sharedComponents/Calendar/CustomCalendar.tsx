import React, { useState, useEffect } from "react";
import { useMantineTheme, Indicator } from "@mantine/core";
import { DatePicker, Calendar, Month, getMonthDays } from "@mantine/dates";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksDates } from "../../store/slices/tasksSlice";
import { ThunkActionDispatch, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";

interface CustomCalendarProps {
  setDateValue : React.Dispatch<React.SetStateAction<Date>>,
  dateValue : Date
}

const CustomCalendar = ({setDateValue, dateValue} : CustomCalendarProps) => {
  const [month, onMonthChange] = useState(new Date());
  // const [valueDate, setValueDate] = useState(new Date());
  // const [value, setValue] = useState<Date | null>(null);
  const theme = useMantineTheme();
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const taskDates = useSelector((state: RootState) => state.taskSlice.dates);
  const convertDates = taskDates.map((date) => 
    new Date(date).toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'})
  )

  // console.log(convertDates, "dates");

  useEffect(() => {
    dispatch(fetchTasksDates());
  }, []);
//  const handleChangeFetchDate = () => {
//   setValue(value);
//   // setDateValue(value);
//   console.log(value)
//  }
  return (
    <>
      <Calendar
        onChange={(date) => {date !== null && setDateValue(date)}}
        // onChange={handleChangeFetchDate}
        initialMonth={new Date()}
        value={dateValue}
        allowLevelChange={false}
        labelFormat="MMMM, YYYY"
        size="xl"
        renderDay={(date) => {
          const day = date.getDate();
          const dayT = new Date(date).toLocaleDateString('he-IL', {timeZone:'Asia/Jerusalem'});
          const currD = (new Date()).toLocaleDateString();
          if(convertDates.includes(dayT)){
            return(
              <Indicator size={20} color="green" offset={8}>
                 <div>{day}</div>
              </Indicator>
              )
          }
          // convertDates.find((dayY) => {
          //   // const formatingDate = (new Date(dayY)).toLocaleDateString();
          //   // console.log(formatingDate);
          //   if ( dayY  == dayT) {
          //     return(
          //     <Indicator size={20} color="green" offset={8}>
          //        <div>{day}</div>
          //     </Indicator>
          //     )
             
          //   }
          // });
          //   taskDates.find((dateD)=> {
          //     const formatingDate = (new Date(dateD)).toLocaleDateString();
          //     console.log(formatingDate);
          //     if(formatingDate == dayT){

          //     }
          //    }
          //  )
          // if (taskFormatDate == dayT) {
          //   return (
          //     <Indicator size={20} color="green" offset={8}>
          //       <div>{day}</div>
          //     </Indicator>
          //     )
          // }

          // if( dayT == currD ){
          //   return (
          //   <Indicator size={20} color="green" offset={8}>
          //     <div>{day}</div>
          //   </Indicator>
          //   )
          // }
          return (
            <Indicator size={6} color="red" offset={8} disabled={day != 16}>
              <div>{day}</div>
            </Indicator>
          );
        }}
      />
    </>
  );
};

export default CustomCalendar;
