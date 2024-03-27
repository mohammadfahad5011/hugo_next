"use client";

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="flex gap-x-3 items-center text-white">
      <button
        onClick={decrement}
        className="border border-white rounded-full w-[20px] h-[20px] flex justify-center items-center"
      >
        -
      </button>
      <span className="text-white font-bold text-lg">{count}</span>
      <button
        onClick={increment}
        className="border border-white rounded-full w-[20px] h-[20px]  flex justify-center items-center"
      >
        +
      </button>
    </div>
  );
}

export default Counter;
