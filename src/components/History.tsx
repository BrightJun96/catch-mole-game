import React, { useState } from "react";
import { RecordType } from "./App";
import "../styling/History.scss";

interface HistoryProps {
  recordList: RecordType[];
}

const History: React.FunctionComponent<HistoryProps> = ({ recordList }) => {
  const [text, setText] = useState<string>("");

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setText(e.target.value);
  return (
    <div className="history">
      <label htmlFor="record">
        Filter
        <input type="text" name="record" value={text} onChange={onChange} />
      </label>
      <table>
        <thead>
          <tr>
            <th>두더지 좌표</th>
            <th>잡은 시간</th>
          </tr>
        </thead>
        <tbody>
          {recordList
            .sort((a, b) => {
              return a.timeStamp - b.timeStamp;
            })
            .filter((record) => {
              if (text === "") return true;
              return record.location.toString() === text;
            })
            .map((record) => {
              return (
                <tr key={record.id}>
                  <td>{record.location} 번</td>
                  <td>{15 - record.timeStamp}초</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default History;
