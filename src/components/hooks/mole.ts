import { useState, useEffect } from "react";

const useMole: () => [boolean, () => void] = () => {
  const [mole, setMole] = useState(true);
  const clearMole = () => {
    setMole(false);
  };

  useEffect(() => {
    // 2초에서 5초 랜덤 타임간격으로 두더지가 들어갔다 나왔다함.
    const randomTime = Math.random() * 3000 + 2000;
    const elaspedTime = setInterval(() => {
      setMole((prev) => !prev);
    }, randomTime);

    setTimeout(() => {
      clearInterval(elaspedTime);
      setMole(false);
    }, 15000);
  }, []);

  return [mole, clearMole];
};
export default useMole;
