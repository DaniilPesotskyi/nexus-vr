"use client";

import css from "./BookingModal.module.css";

import { useState } from "react";

interface IProps {
  onClose: () => void;
}

const BookingModal: React.FC<IProps> = ({ onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedTimes, setSelectedTimes] = useState<string[]>([]);

  const onCountPrice = () => {
    return quantity * (300 * selectedTimes.length);
  };

  const onQuantityChange = (action: "increment" | "decrement"): void => {
    switch (action) {
      case "increment":
        if (quantity >= 8) {
          setQuantity(1);
        } else {
          setQuantity(quantity + 1);
        }
        break;
      case "decrement":
        if (quantity === 1) {
          break;
        } else {
          setQuantity(quantity - 1);
        }
        break;
    }
  };

  const onCheckboxChange = (time: string) => {
    const updatedSelectedTimes = [...selectedTimes];
    const index = updatedSelectedTimes.indexOf(time);

    if (index !== -1) {
      updatedSelectedTimes.splice(index, 1);
    } else {
      updatedSelectedTimes.push(time);
    }

    setSelectedTimes(updatedSelectedTimes);
  };

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
                onChange={() => onCheckboxChange("13-14")}
                className={css.timeInput}
                type="checkbox"
                name="13-14"
                id="13-14"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>13.00 - 14.00 </span>
            </label>
            <p className={css.timePrice}>
              8 spaces - 300 UAH / <PersonIcon className={css.personIcon} />
            </p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="14-15">
              <input
                onChange={() => onCheckboxChange("14-15")}
                className={css.timeInput}
                type="checkbox"
                name="14-15"
                id="14-15"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>14.00 - 15.00 </span>
            </label>
            <p className={css.timePrice}>
              8 spaces - 300 UAH / <PersonIcon className={css.personIcon} />
            </p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="15-16">
              <input
                onChange={() => onCheckboxChange("15-16")}
                className={css.timeInput}
                type="checkbox"
                name="15-16"
                id="15-16"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>15.00 - 16.00 </span>
            </label>
            <p className={css.timePrice}>
              8 spaces - 300 UAH / <PersonIcon className={css.personIcon} />
            </p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="16-17">
              <input
                onChange={() => onCheckboxChange("16-17")}
                className={css.timeInput}
                type="checkbox"
                name="16-17"
                id="16-17"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>16.00 - 17.00 </span>
            </label>
            <p className={css.timePrice}>
              8 spaces - 300 UAH / <PersonIcon className={css.personIcon} />
            </p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="17-18">
              <input
                onChange={() => onCheckboxChange("17-18")}
                className={css.timeInput}
                type="checkbox"
                name="17-18"
                id="17-18"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>17.00 - 18.00 </span>
            </label>
            <p className={css.timePrice}>
              8 spaces - 300 UAH / <PersonIcon className={css.personIcon} />
            </p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="18-19">
              <input
                onChange={() => onCheckboxChange("18-19")}
                className={css.timeInput}
                type="checkbox"
                name="18-19"
                id="18-19"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>18.00 - 19.00 </span>
            </label>
            <p className={css.timePrice}>
              8 spaces - 300 UAH / <PersonIcon className={css.personIcon} />
            </p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="20-21">
              <input
                onChange={() => onCheckboxChange("20-21")}
                className={css.timeInput}
                type="checkbox"
                name="20-21"
                id="20-21"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>20.00 - 21.00 </span>
            </label>
            <p className={css.timePrice}>
              8 spaces - 300 UAH / <PersonIcon className={css.personIcon} />
            </p>
          </li>
          <li className={css.timeItem}>
            <label className={css.timeLabel} htmlFor="21-22">
              <input
                onChange={() => onCheckboxChange("21-22")}
                className={css.timeInput}
                type="checkbox"
                name="21-22"
                id="21-22"
              />
              <span className={css.timeIcon}></span>
              <span className={css.timeTime}>21.00 - 22.00 </span>
            </label>
            <p className={css.timePrice}>
              8 spaces - 300 UAH / <PersonIcon className={css.personIcon} />
            </p>
          </li>
        </ul>

        <div className={css.qntAndPrice}>
          <div className={css.quantityWrap}>
            <p className={css.quantityLabel}>Quantity</p>
            <div className={css.quantityInput}>
              <button
                type="button"
                className={css.quantityBtn}
                onClick={() => onQuantityChange("decrement")}
              >
                <DecrementIcon className={css.quantityIcon} />
              </button>
              <span className={css.quantityValue}>{quantity}</span>
              <button
                type="button"
                className={css.quantityBtn}
                onClick={() => onQuantityChange("increment")}
              >
                <IncrementIcon className={css.quantityIcon} />
              </button>
            </div>
          </div>
          <p className={css.price}>
            Price: <span className={css.priceValue}>{onCountPrice()}</span> UAH
          </p>
        </div>

        <div className={css.personData}>
          <div className={css.personDataBlock}>
            <input
              className={css.personDataInput}
              placeholder="Name"
              type="text"
            />
            <input
              className={css.personDataInput}
              placeholder="Number"
              type="text"
            />
          </div>
          <textarea
            placeholder="Message"
            className={css.personDataTextArea}
          ></textarea>
        </div>

        <button className={css.reservationBtn} type="button" onClick={onClose}>
          MAKE A RESERVATION
        </button>
      </div>
    </div>
  );
};

export default BookingModal;

function PersonIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
    >
      <g clipPath="url(#a)">
        <path d="M7.5 0a3.499 3.499 0 100 6.996A3.499 3.499 0 107.5 0zm-2 8.994a3.5 3.5 0 00-3.5 3.5v2.497h11v-2.497a3.5 3.5 0 00-3.5-3.5h-4z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h15v15H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

function DecrementIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <path d="M13.125 7.5a.469.469 0 01-.469.469H2.344a.469.469 0 010-.938h10.312a.469.469 0 01.469.469z"></path>
    </svg>
  );
}

function IncrementIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
    >
      <g clipPath="url(#a)">
        <path d="M12.5 7.083H7.919V2.5a.417.417 0 00-.834 0v4.583H2.501a.417.417 0 00-.417.417.38.38 0 00.417.392h4.583V12.5a.417.417 0 10.834 0V7.917H12.5a.417.417 0 000-.833z"></path>
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h15v15H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

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
