import React, { useEffect, useState } from "react";

export default function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const FormateedTime = time.toLocaleTimeString();
  const FomrateedDate = time.toDateString();

  return (
    <>
      <div className="clock-wrapper">
        <h1>🕒 Digital Clock</h1>
        <div className="clock">
          <div className="display">
            <div className="timer">
              <h3>{FormateedTime}</h3>
            </div>
            <div className="date">
              <h3>{FomrateedDate}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
