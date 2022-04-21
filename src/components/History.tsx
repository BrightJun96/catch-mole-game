import React, { useState } from "react";
import { RecordType } from "./App";
import "../styling/History.scss";

interface HistoryProps {
  recordList: RecordType[];
}

const History: React.FunctionComponent<HistoryProps> = ({ recordList }) => {
  // TODO

  const [text, setText] = useState<string>("");
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) =>
    setText(e.target.value);
  return (
    <div className="history">
      {/* TODO */}
      <label htmlFor="record">
        Filter
        <input type="text" name="record" value={text} onChange={onChange} />
      </label>
      <table>
        <thead>
          <tr>
            <th>두더지 좌표</th>
            <th>경과 시간</th>
          </tr>
        </thead>
        <tbody>
          {recordList
            .sort((a, b) => {
              return b.timeStamp - a.timeStamp;
            })
            .filter((record) => {
              if (text === "") return true;
              return record.location.toString() === text;
            })
            .map((record) => {
              const elaspedTime = (Date.now() - record.timeStamp) / 1000;
              return (
                <tr key={record.timeStamp}>
                  <td>{record.location}</td>
                  <td>{elaspedTime}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
export default History;
