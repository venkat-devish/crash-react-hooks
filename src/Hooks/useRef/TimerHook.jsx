import React, { useEffect, useRef, useState } from "react";

const TimerHook = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      Timer - {timer}
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
        }}
      >
        Clear Timer
      </button>
    </div>
  );
};

export default TimerHook;
