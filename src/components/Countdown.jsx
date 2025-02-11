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
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-10">Countdown Go Live CRM PSR</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div key={label} className="bg-white/10 p-8 md:p-10 rounded-xl shadow-xl">
            <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold">{value}</span>
            <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4 capitalize">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
