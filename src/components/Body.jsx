import React from "react";
import { useState } from "react";

export default function Body() {
  const [sec, setSec] = useState("00");
  const [min, setMin] = useState("00");
  const [hour, setHour] = useState("00");

  const [date, setDate] = useState("00");
  const [month, setMonth] = useState("00");
  const [year, setYear] = useState("00");

  const [remDay, setRemDay] = useState("00");
  const [remMonth, setRemMonth] = useState("00");

  const [remSec, setRemSec] = useState("00");
  const [remMin, setRemMin] = useState("00");
  const [remhour, setRemHour] = useState("00");

  const birthdayDate = new Date("04/12/2025");

  var timeTimer = setInterval(() => {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth() + 1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    setSec(second);
    setMin(minute);
    setHour(hour);
    setDate(day);
    setMonth(month);
    setYear(year);
    setRemDay(Math.floor((birthdayDate - now) / (1000 * 60 * 60 * 24)));
    setRemMonth(Math.floor((birthdayDate - now) / (1000 * 60 * 60 * 24 * 30)));
    setRemSec(Math.floor((birthdayDate - now) / 1000));
    setRemMin(Math.floor((birthdayDate - now) / (1000 * 60)));
    setRemHour(Math.floor((birthdayDate - now) / (1000 * 60 * 60)));
  }, 1000);

  setTimeout(function () {
    clearInterval(timeTimer);
  }, 10 * 1000);

  return (
    <div className="content">
      <div className="time">
        <h1 className="birthDate">
          The Date -{birthdayDate.getDate()}/{birthdayDate.getMonth()}/
          {birthdayDate.getFullYear()}
        </h1>
        <h1 className="currentTime">
          Current Time
          <span>{hour}</span>:<span>{min}</span>:<span>{sec}</span>
        </h1>
        <h1 className="currentDate">
          <span>Current date</span>
          {date}/{month}/{year}
        </h1>
        <h1 className="remainingHour">Remaining Hour - {remhour}</h1>
        <h1 className="remainingMin">Remaining Min - {remMin}</h1>
        <h1 className="remainingSec">
          Remaining Sec <span>{remSec}</span>
        </h1>
        <div className="remainingDayContainer">
          <h1 className="remainingDay">Remaining Day - {remDay}</h1>
          <h1 className="remainingDay">Remaining Month - {remMonth}</h1>
        </div>
      </div>
    </div>
  );
}
