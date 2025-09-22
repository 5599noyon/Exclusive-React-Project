import React, { useState, useEffect } from "react";

export default function FlashSalesTimer() {
  // Target time: 3 days from now
  const targetDate = new Date().getTime() + 3 * 24 * 60 * 60 * 1000;

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (value) => value.toString().padStart(2, "0");

  return (
    <div className="bg-gray-50 grid items-start pr-[830px] p-[20px] ">
      {/* Header */}
      <div className="flex items-center justify-between pb-[15px] pr-[155px] ">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-[20px] h-[50px] bg-red-500 rounded-[4px] "></div>
            <span className="text-red-500 font-medium text-lg">Today's</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Flash Sales</h2>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mt-6 flex items-center gap-4">
        <div className="text-center px-4 py-2 bg-white shadow rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Days</div>
          <div className="text-4xl font-bold text-gray-900">
            {formatTime(timeLeft.days)}
          </div>
        </div>

        <div className="text-3xl font-bold text-gray-900 pb-6">:</div>

        <div className="text-center px-4 py-2 bg-white shadow rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Hours</div>
          <div className="text-4xl font-bold text-gray-900">
            {formatTime(timeLeft.hours)}
          </div>
        </div>

        <div className="text-3xl font-bold text-gray-900 pb-6">:</div>

        <div className="text-center px-4 py-2 bg-white shadow rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Minutes</div>
          <div className="text-4xl font-bold text-gray-900">
            {formatTime(timeLeft.minutes)}
          </div>
        </div>

        <div className="text-3xl font-bold text-gray-900 pb-6">:</div>

        <div className="text-center px-4 py-2 bg-white shadow rounded-lg">
          <div className="text-sm text-gray-600 mb-1">Seconds</div>
          <div className="text-4xl font-bold text-gray-900">
            {formatTime(timeLeft.seconds)}
          </div>
        </div>
      </div>
    </div>
  );
}
