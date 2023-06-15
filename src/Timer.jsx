import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const targetDate = new Date('August 21, 2023');
    const difference = targetDate - currentDate;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setCountdown({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Countdown till August 21st, 2023</h1>
      <p>{countdown.days} days</p>
      <p>{countdown.hours} hours</p>
      <p>{countdown.minutes} minutes</p>
      <p>{countdown.seconds} seconds</p>
    </div>
  );
};

export default Timer;