import React, { useState } from "react";
import Button from "./Button";
import Header from "./Header";

const Counter = () => {
  // let temp: number[]
  // let temp: Array<number> ; Generic types
  const [count, setCount] = useState(0);
  // const [count, setCount] = useState<number>(0);
  // const [count, setCount] = useState<string>(0);
  // for useState ts already assigned <number> to it because we have passed 0 to it -> just hover -> useState<number> -> but still we can manually define it as a number
  const handleClick = (value: number) => {
    setCount(count + value);
  };

  return (
    <div>
      <Header label={"Counter"} />
      <Header label={`${count}`} />
      <Header>
        <div>First child div</div>
        <div>First child div</div>
        <div>First child div</div>
      </Header>
      <Button label="Add" handleClick={() => handleClick(1)} />
      <Button label="Substract" handleClick={() => handleClick(-1)} />
    </div>
  );
};

export default Counter;
