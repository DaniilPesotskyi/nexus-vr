"use client";

import css from "./Calendar.module.css";

import { useState } from "react";
import cn from "classnames";
import BookingModal from "./BookingModal/BookingModal";

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(true);

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
    const today = new Date();
    const firstDay = new Date(year, month, 0);
    const lastDay = new Date(year, month + 1, 0);

    const days = [];

    for (let i = 0; i < firstDay.getDay(); i++) {
      days.push(null);
    }
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const day = new Date(year, month, i);

      const isBeforeToday =
        day.getTime() < today.getTime() && day.getDate() !== today.getDate();

      const isToday =
        day.getDate() === today.getDate() &&
        day.getMonth() === today.getMonth() &&
        day.getFullYear() === today.getFullYear();

      days.push({
        date: day,
        isBeforeToday: isBeforeToday,
        isToday: isToday,
      });
    }

    return days;
  };

  const getMonthName = (number: number): string => {
    switch (number) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
      default:
        return "";
    }
  };

  return (
    <>
      <div className={css.wrap}>
        <div className={css.months}>
          <button onClick={handlePrevMonth} className={css.monthsBtn}>
            <ArrowIcon className={css.icon} />
          </button>
          <span className={css.monthTitle}>
            {getMonthName(currentDate.getMonth() + 1)}
          </span>
          <button onClick={handleNextMonth} className={css.monthsBtn}>
            <ArrowIcon className={css.icon} />
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
                      <td
                        className={cn(
                          css.dayCell,
                          day.isBeforeToday && css.disabled,
                          day.isToday && css.active
                        )}
                        onClick={() => setIsModalOpen(true)}
                        key={index}
                      >
                        {day.date.getDate()}
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
      {isModalOpen && (
        <BookingModal onClose={() => setIsModalOpen(!isModalOpen)} />
      )}
    </>
  );
};

export default Calendar;

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14 7l-5 5 5 5"
      ></path>
    </svg>
  );
}
