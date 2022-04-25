import React, { useEffect, Dispatch, SetStateAction } from "react";
import "../styling/Timer.scss";
export interface TimerProps {
  restTime: number;
  setRestTime: Dispatch<SetStateAction<number>>;
  score: number;
}

export default function Timer({ restTime, setRestTime, score }: TimerProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      setRestTime((prev) => prev - 1);
    }, 1000);

    if (restTime === 0) {
      clearTimeout(timer);

      if (score >= 40) {
        alert("성공!");
      } else {
        alert("실패..ㅠ");
      }
    }
  }, [restTime]);

  return (
    <div className="timer-container">
      <h2>남은 시간</h2>
      <h1>{restTime}초</h1>
    </div>
  );
}
