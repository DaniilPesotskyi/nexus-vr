"use client";

import css from "./BookingModal.module.css";

interface IProps {
  onClose: () => void;
}

const BookingModal: React.FC<IProps> = ({ onClose }) => {
  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <button className={css.closeBtn} type="button" onClick={onClose}>
          Close
          <CloseIcon className={css.closeIcon} />
        </button>
        <h1 className={css.title}>Please select desired time</h1>
        <h2 className={css.address}>m. Dnipro, ave. Dmitra Yavornitsky, 19</h2>

        <ul className={css.timeList}>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="13-14">
              <input
                className={css.timeInput}
                type="checkbox"
                name="13-14"
                id="13-14"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>13.00 - 14.00 </span>
            </label>
            <p className={css.timePrice}>8 spaces - 300 UAH / U</p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="14-15">
              <input
                className={css.timeInput}
                type="checkbox"
                name="14-15"
                id="14-15"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>14.00 - 15.00 </span>
            </label>
            <p className={css.timePrice}>8 spaces - 300 UAH / U</p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="15-16">
              <input
                className={css.timeInput}
                type="checkbox"
                name="15-16"
                id="15-16"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>15.00 - 16.00 </span>
            </label>
            <p className={css.timePrice}>8 spaces - 300 UAH / U</p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="16-17">
              <input
                className={css.timeInput}
                type="checkbox"
                name="16-17"
                id="16-17"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>16.00 - 17.00 </span>
            </label>
            <p className={css.timePrice}>8 spaces - 300 UAH / U</p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="17-18">
              <input
                className={css.timeInput}
                type="checkbox"
                name="17-18"
                id="17-18"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>17.00 - 18.00 </span>
            </label>
            <p className={css.timePrice}>8 spaces - 300 UAH / U</p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="18-19">
              <input
                className={css.timeInput}
                type="checkbox"
                name="18-19"
                id="18-19"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>18.00 - 19.00 </span>
            </label>
            <p className={css.timePrice}>8 spaces - 300 UAH / U</p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="20-21">
              <input
                className={css.timeInput}
                type="checkbox"
                name="20-21"
                id="20-21"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>20.00 - 21.00 </span>
            </label>
            <p className={css.timePrice}>8 spaces - 300 UAH / U</p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="21-22">
              <input
                className={css.timeInput}
                type="checkbox"
                name="21-22"
                id="21-22"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>21.00 - 22.00 </span>
            </label>
            <p className={css.timePrice}>8 spaces - 300 UAH / U</p>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default BookingModal;

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.834 8.333L10 12.5l4.167-4.167"
      ></path>
    </svg>
  );
}
