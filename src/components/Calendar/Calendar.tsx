"use client";

import css from "./Calendar.module.css";

import { useState } from "react";
import cn from "classnames";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  const getMonthDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];
    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  return (
    <div className={css.wrap}>
      <div className={css.months}>
        <button onClick={handlePrevMonth} className={css.monthsBtn}>
          prev
        </button>
        <span>
          {currentDate.toLocaleString("default", {
            month: "long",
            year: "2-digit",
          })}
        </span>
        <button onClick={handleNextMonth} className={css.monthsBtn}>
          next
        </button>
      </div>
      <table className={css.calendar}>
        <thead className={css.days}>
          <tr className={css.daysList}>
            <th className={css.daysItem}>Mon</th>
            <th className={css.daysItem}>Tue</th>
            <th className={css.daysItem}>Wed</th>
            <th className={css.daysItem}>Thu</th>
            <th className={css.daysItem}>Fri</th>
            <th className={css.daysItem}>Sat</th>
            <th className={css.daysItem}>Sun</th>
          </tr>
        </thead>
        <tbody>
          {getMonthDays().map((day, index) =>
            index % 7 === 0 ? (
              <tr key={index}></tr>
            ) : (
              <td key={index}>{day ? day.getDate() : ""}</td>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
