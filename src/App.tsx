import React from "react";
import "./assets/css/styles.css";

const newYears = "1 Jan 2022";

function countdown() {
  function formatTime(time: any) {
    return time < 10 ? `0${time}` : time;
  }
  const newYearsDate: any = new Date(newYears);
  const currentDate: any = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = formatTime(Math.floor(totalSeconds / 3600) % 24);
  const mins = formatTime(Math.floor(totalSeconds / 60) % 60);
  const seconds = formatTime(Math.floor(totalSeconds) % 60);

  return {
    days,
    hours,
    mins,
    seconds,
  };
}

function App() {

  const [date, setDate] = React.useState<any>({
    days: 0,
    hours: 0,
    mins: 0,
    seconds: 0,
  });
  React.useEffect(() => {

    setDate(countdown())
    setInterval(countdown, 1000);
  });

  return (
    <>
      <h1>New Years Eve</h1>
      <div className="countdown-container">
        <div className="countdown-el days-c">
          <p className="big-text" id="days">
        {date.days}
          </p>
          <span>days</span>
        </div>
        <div className="countdown-el hours-c">
          <p className="big-text" id="hours">
             {date.hours}
          </p>
          <span>hours</span>
        </div>
        <div className="countdown-el mins-c">
          <p className="big-text" id="mins">
               {date.mins}
          </p>
          <span>mins</span>
        </div>
        <div className="countdown-el seconds-c">
          <p className="big-text" id="seconds">
                {date.seconds}
          </p>
          <span>seconds</span>
        </div>
      </div>
    </>
  );
}

export default App;
