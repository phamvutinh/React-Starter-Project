import React from "react";
import { ConvertSecond } from "utils/SecondToTime";

export default function Counter({ limit }) {
  const [seconds, setSeconds] = React.useState(limit);

  React.useEffect(() => {
    if (seconds < 1) {
      return;
    }
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);
  return <div>Time left: {ConvertSecond(seconds)} </div>;
}
