import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2025-03-20T23:59:59').getTime();
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
      <h1 className="text-2xl md:text-4xl font-bold mb-8">Countdown Go Live CRM PSR</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white/10 p-4 md:p-6 rounded-lg shadow-lg">
          <span className="text-3xl md:text-5xl font-bold">{timeLeft.days}</span>
          <span className="block text-sm mt-2">Days</span>
        </div>
        <div className="bg-white/10 p-4 md:p-6 rounded-lg shadow-lg">
          <span className="text-3xl md:text-5xl font-bold">{timeLeft.hours}</span>
          <span className="block text-sm mt-2">Hours</span>
        </div>
        <div className="bg-white/10 p-4 md:p-6 rounded-lg shadow-lg">
          <span className="text-3xl md:text-5xl font-bold">{timeLeft.minutes}</span>
          <span className="block text-sm mt-2">Minutes</span>
        </div>
        <div className="bg-white/10 p-4 md:p-6 rounded-lg shadow-lg">
          <span className="text-3xl md:text-5xl font-bold">{timeLeft.seconds}</span>
          <span className="block text-sm mt-2">Seconds</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;