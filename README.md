# 두더지 잡기 게임

**Watch Project** | https://catch-mole-byjun.netlify.app/

**Tech** | React , TypeScript

**Hook** | useState , useEffect , useMole(custom hook)

**styling** | scss

## Description

![mole](mole.png)

- 두더지 잡기 게임으로 **16마리의 두더지를 클릭하여 잡을 수 있는 게임**이다.

- 각 두더지는 **랜덤 시간간격**으로 들어갔다 나왔다하며 **15초가 되면 모든 두더지들은 들어간다.**

- 두더지가 **들어가면 Invalid라고 표시**가 된다.

- 두더지를 잡으면 두더지를 **잡은 기록이 우측에 표시**되는데 잡은 **두더지의 좌표**(왼측 상단부터 0으로 시작하여 15로 끝남)와 **경과 시간**이 기록된다.

- 인풋을 이용하여 **원하는 두더지 좌표만 입력**해서 볼 수 있다.(필터링)

- **남는 시간을 체크할 수 있는 타이머**가 화면 상단 중앙에 있다.

## 기능 및 코드 설명

### 1. 타이머

**기능**

- Timer 컴포넌트를 생성하여 15초 타이머를 만들었다.
- 1초가 지날 때마다 15초에서 1씩 카운트 다운되고 0이 되면 타이머를 clear 한다.

코드는 다음과 같다.

**코드 설명**

**Timer.tsx**

```tsx
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
```

1. **총 소요되는 시간은 state값**으로 정해준다.
2.

```tsx
const [restTime, setRestTime] = useState<number>(15);
```

3. 1초가 지날 때마다 restTime이 1씩 count down 되야한다.

- **setTimeout API**를 사용해야함.
- **1초간격**으로 setRestTime을 사용하여 **이전값에서 -1**을 해야함.
- setTimeout은 **비동기 함수이므로 useEffect안에서** 사용해줘야함.
- restTime이 변경될 때만 렌더링되야하기 때문에 **dependency에 restTime**을 할당해줌.

```tsx
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
```

4. 15초가 지났을 때, 즉 **restTime이 0**이 되면 setTimeout이 작동하지 않도록 **clearTimeout**해줌.

```tsx
if (restTime === 0) {
  clearTimeout(timer);
}
```

### 2. recordList의 key값

recordList는 **두더지의 좌표와 잡은 시간을 알려주는 상태값**이다.
History 컴포넌트에서는 이 기록들을 mapping해야한다.
mapping을 위한 **각 요소에 대한 key값은 유니크**해야하므로 **uuid 라이브러리**를 사용하여 id값에 할당한다.

**Mole.tsx**

```tsx

import { v4 as uuidv4 } from "uuid";


    const newRecordList = recordList.concat({
      id: uuidv4(),
      location: item,
      timeStamp: restTime,
    });
    setRecordList(newRecordList);
  }, [onHit, clearMole, item, recordList, setRecordList, restTime]);

```
