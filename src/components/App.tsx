import React from "react";
import "../styling/App.scss";
import Mole from "./Mole";
import History from "./History";
import { useState } from "react";
export interface RecordType {
  location: number;
  timeStamp: number;
}
function App() {
  const [score, setScore] = useState<number>(0);
  const [recordList, setRecordList] = useState<RecordType[]>([]);

  const onHit = () => {
    setScore((score) => score + 1);
  };

  console.log(recordList);

  const moleList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <>
      <h1>React-A-Mole</h1>
      <p>score: {score}</p> {/* TODO */}
      <div id="hh-newbie-exam">
        {moleList.map((item) => (
          <Mole
            onHit={onHit}
            key={item}
            item={item}
            recordList={recordList}
            setRecordList={setRecordList}
          />
        ))}
      </div>
      <History recordList={recordList} />
    </>
  );
}

export default App;
