import React, { useState, useEffect } from "react";

const Countdown = () => {
  const targetDate = new Date("2025-03-20T23:59:59").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-center text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-10">
        Countdown Go Live CRM PSR
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="bg-white/10 p-6 md:p-8 rounded-xl shadow-xl">
            <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              {value}
            </span>
            <span className="block text-base sm:text-lg md:text-xl mt-3 capitalize">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
