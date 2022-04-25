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

  const freshGame = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="top-container">
        <div>
          <h1>두더지를 잡아라!</h1>
          <h2>잡은 두더지 수: {score}</h2>
        </div>
        <Timer restTime={restTime} setRestTime={setRestTime} score={score} />
        <h2>목표 두더지 수 : 40</h2>
        <button style={{ cursor: "pointer" }} onClick={freshGame}>
          다시 하기
        </button>
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
