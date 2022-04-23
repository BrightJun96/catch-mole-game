import React from "react";
import "../styling/App.scss";
import Mole from "./Mole";
import History from "./History";
import { useState } from "react";
import Timer from "./Timer";
export interface RecordType {
  id: string;
  location: number;
  timeStamp: number;
}
function App() {
  const [score, setScore] = useState<number>(0);
  const [recordList, setRecordList] = useState<RecordType[]>([]);
  const [restTime, setRestTime] = useState<number>(15);

  const onHit = () => {
    setScore((score) => score + 1);
  };

  const moleList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <div className="top-container">
        <div>
          <h1>React-A-Mole</h1>
          <h2>score: {score}</h2>
        </div>
        <Timer restTime={restTime} setRestTime={setRestTime} />
      </div>
      <div className="mole-container">
        {moleList.map((item) => (
          <Mole
            onHit={onHit}
            key={item}
            item={item}
            recordList={recordList}
            setRecordList={setRecordList}
            restTime={restTime}
          />
        ))}
      </div>
      <History recordList={recordList} />
    </>
  );
}

export default App;
