import React, { useEffect, useState } from "react";
import "../styling/Timer.scss";
export interface TimerProps {}

export default function Timer(props: TimerProps) {
  const [restTime, setRestTime] = useState<number>(15);
  useEffect(() => {
    const timer = setTimeout(() => {
      setRestTime((prev) => prev - 1);
    }, 1000);

    if (restTime === 0) {
      clearTimeout(timer);
    }
  }, [restTime]);
  console.log("render");

  return (
    <div className="timer-container">
      <h2>남은 시간</h2>
      <h1>{restTime}초</h1>
    </div>
  );
}
