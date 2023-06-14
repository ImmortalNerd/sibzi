import { useMemo, useEffect, useState } from "react";

export const useCountdown = (startCountDown) => {
  const [countDown, setCountDown] = useState(startCountDown);

  const minutes = useMemo(() => Math.floor(countDown / 60), [countDown]);
  const seconds = useMemo(() => Math.floor(countDown % 60), [countDown]);
  // const minutes = Math.floor(countDown / 60);
  // const seconds = Math.floor(countDown % 60);

  // const [minutes, setMinutes] = useState(0);
  // const [seconds, setSeconds] = useState(0);
  // useEffect(() => {
  //   setMinutes(Math.floor(countDown / 60));
  //   setSeconds(Math.floor(countDown % 60));
  // }, [countDown]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((s) => (s < 1 ? 0 : s - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return { minutes, seconds, countDown, setCountDown };
};
