import React, { useEffect, Dispatch, SetStateAction } from "react";
import "../styling/Timer.scss";
export interface TimerProps {
  restTime: number;
  setRestTime: Dispatch<SetStateAction<number>>;
}

export default function Timer({ restTime, setRestTime }: TimerProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setRestTime((prev) => prev - 1);
    }, 1000);

    if (restTime === 0) {
      clearTimeout(timer);
    }
  }, [restTime]);

  return (
    <div className="timer-container">
      <h2>남은 시간</h2>
      <h1>{restTime}초</h1>
    </div>
  );
}
