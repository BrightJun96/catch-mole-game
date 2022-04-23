import React, { Dispatch, SetStateAction, useCallback } from "react";
import { RecordType } from "./App";
import { v4 as uuidv4 } from "uuid";
import useMole from "./hooks/mole";
import "../styling/Mole.scss";

interface MoleProps {
  onHit(): void;
  item: number;
  recordList: RecordType[];
  setRecordList: Dispatch<SetStateAction<RecordType[]>>;
  restTime: number;
}
const Mole: React.FunctionComponent<MoleProps> = ({
  onHit,
  item,
  recordList,
  setRecordList,
  restTime,
}) => {
  //각 두더지는 자기만의 mole을 가지고 있음.
  const [mole, clearMole] = useMole();

  const hitMole = useCallback(() => {
    clearMole();
    onHit();

    const newRecordList = recordList.concat({
      id: uuidv4(),
      location: item,
      timeStamp: restTime,
    });
    setRecordList(newRecordList);
  }, [onHit, clearMole, item, recordList, setRecordList, restTime]);

  const content = mole ? (
    <div className="mole-up" onClick={hitMole}>
      두더지 출현!
      <h3>{item}번</h3>
    </div>
  ) : (
    <div className="mole-fail">Invaild</div>
  );

  return (
    <div className="mole-box">
      <div className="mole-cell">{content}</div>
    </div>
  );
};
export default Mole;
