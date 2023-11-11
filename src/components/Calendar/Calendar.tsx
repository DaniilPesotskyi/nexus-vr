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

  function chunkArray<T>(array: T[], size: number) {
    const chunkedArray = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArray.push(array.slice(i, i + size));
    }
    return chunkedArray;
  }

  const getMonthDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 0);
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
        <span className={css.monthTitle}>November</span>
        <button onClick={handleNextMonth} className={css.monthsBtn}>
          next
        </button>
      </div>
      <table className={css.calendar}>
        <thead className={css.days}>
          <tr className={css.daysRow}>
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
          {chunkArray(getMonthDays(), 7).map((week, index) => (
            <tr className={css.daysRow} key={index}>
              {week.map((day, index) => (
                <>
                  {day ? (
                    <td className={css.dayCell} key={index}>
                      {day.getDate()}
                    </td>
                  ) : (
                    <td className={css.emptyCell} key={index}>
                      {""}
                    </td>
                  )}
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
