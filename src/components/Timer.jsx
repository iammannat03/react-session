import React, { useEffect, useState } from "react";

const Timer = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearTimeout(interval);
  }, []);
  return (
    <div className="text-white py-3 px-10 text-3xl flex justify-center items-center font-bold">
      {currentTime.toLocaleTimeString()}
    </div>
  );
};

export default Timer;
