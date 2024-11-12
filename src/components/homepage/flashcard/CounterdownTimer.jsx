import React, { useState, useEffect } from "react";
const CountdownTimer = ({ targetDate }) => {
  const [countdown, setCountdown] = useState({
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
      setCountdown({
        Days: String(Math.floor(timeLeft / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        Hours: String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(
          2,
          "0"
        ),
        Minutes: String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(
          2,
          "0"
        ),
        Seconds: String(Math.floor((timeLeft / 1000) % 60)).padStart(2, "0"),
      });
    } else {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div>
      <div className="flex items-center justify-center w-full gap-2 sm:gap-4 flex-wrap">
        {Object.entries(countdown).map(([key, value], index) => (
          <div key={key} className="timer w-12 sm:w-16">
            <div>
              <h4 className="text-xs sm:text-sm font-normal text-center">
                {key}
              </h4>
            </div>
            <div className="flex items-center justify-center">
              <h3 className="text-center font-bold text-lg sm:text-2x px-5 md:px-8">
                {value}
              </h3>
              {index < Object.entries(countdown).length - 1 && (
                <div className="space-y-2">
                  <div className="h-1 w-1 rounded-full bg-hoverbutton" />
                  <div className="h-1 w-1 rounded-full bg-hoverbutton" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CountdownTimer;
