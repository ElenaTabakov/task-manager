import React, { useState, useEffect } from "react";
import { Indicator } from "@mantine/core";
import { DatePicker, Calendar, Month, getMonthDays } from "@mantine/dates";
import { RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasksDates } from "../../store/slices/tasksSlice";
import { ThunkActionDispatch, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "@reduxjs/toolkit";
import { useMediaQuery } from "@mantine/hooks";
import {ActiveDay} from "./CustomCalendar.styles"

interface CustomCalendarProps {
  setDateValue: React.Dispatch<React.SetStateAction<Date>>;
  dateValue: Date;
}

const CustomCalendar = ({ setDateValue, dateValue }: CustomCalendarProps) => {
  const dispatch = useDispatch<ThunkDispatch<{}, void, AnyAction>>();
  const taskDates = useSelector((state: RootState) => state.taskSlice.dates);

  const convertDatesBefore = taskDates?.map((date) =>
    new Date(date).toLocaleDateString("he-IL", { timeZone: "Asia/Jerusalem" })
  );

  useEffect(() => {
    const convertDatesBefore = taskDates?.map((date) =>
      new Date(date).toLocaleDateString("he-IL", { timeZone: "Asia/Jerusalem" })
    );
    setConvertDates(convertDatesBefore);
  }, [taskDates]);

  const [convertDates, setConvertDates] = useState(convertDatesBefore);

  useEffect(() => {
    dispatch(fetchTasksDates());
  }, []);

  const largeScreen = useMediaQuery("(min-width: 900px)");

  return (
    <>
      <Calendar
        getDayProps={(date) => ({
          onClick: () => date !== null && setDateValue(date),
        })}
        monthLabelFormat={"MMMM, YYYY"}
        defaultDate={dateValue}
        // allowLevelChange={false}
        // size="xl"
        size={largeScreen ? "xl" : "md"}
        renderDay={(date) => {
          const day = date.getDate();
          const dayT = new Date(date).toLocaleDateString("he-IL", {
            timeZone: "Asia/Jerusalem",
          });
          const currD = new Date().toLocaleDateString();
          if (convertDates?.includes(dayT)) {
            return (
              // <Indicator size={largeScreen ? 15 : 10} color="yellow" offset={8}>
              <ActiveDay>
                {day}
                <div className="bg_active_day"></div>
              </ActiveDay>

              // </Indicator>
            );
          }

          return <div>{day}</div>;
        }}
      />
    </>
  );
};

export default CustomCalendar;
