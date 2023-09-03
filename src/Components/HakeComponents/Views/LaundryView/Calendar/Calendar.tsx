import { useState } from "react";
import ArrowIcon from "../../../../Icons/Arrow";
import "./Calendar.css";

function getWeek(now: Date) {
  const startDate = new Date(now.getFullYear(), 0, 1);
  const days = Math.floor(
    (now.valueOf() - startDate.valueOf()) / (24 * 60 * 60 * 1000)
  );
  return Math.ceil(days / 7);
}

function addDays(now: Date, days: number) {
  const sum = now.getTime() + 60 * 60 * 24 * 1000 * days;
  return new Date(sum);
}

const numToDay = ["Mån", "Tis", "Ons", "Tors", "Fre", "Lör", "Sön"];

const Calendar = () => {
  const now = new Date();
  const thisWeek = getWeek(now);
  const thisWeeksMonday = new Date(now.setDate(now.getDate() - now.getDay()));
  const [weekOffset, setWeekOffset] = useState(0);
  const isGrabbed = true;

  return (
    <div className="calendar">
      <div className="calendar-header">
        <div onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}>
          <ArrowIcon direction="left" />
        </div>
        <h2>{thisWeek + weekOffset}</h2>
        <div onClick={() => setWeekOffset(weekOffset + 1)}>
          <ArrowIcon direction="right" />
        </div>
      </div>
      <div className="calendar-body">
        {Array.from(Array(7)).map((_, i) => {
          const test = addDays(thisWeeksMonday, i + 7 * weekOffset);

          return (
            <div className="day-container" key={test.toDateString()}>
              <div className="day-header">
                <p>{test.getDate()}</p>
                <p>{numToDay[i]}</p>
              </div>
              <div className="day-body">
                {Array.from(Array(24)).map((_, j) => {
                  test.setHours(8 + Math.floor(j / 2), j % 2 !== 0 ? 30 : 0, 0);

                  return (
                    <div
                      className={`day-chunk ${isGrabbed && "is-grabbed"}`}
                      key={test.toTimeString()}
                    >
                      {test.toTimeString().substring(0, 5)}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
