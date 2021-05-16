import React, { useState } from "react";

const CommonInput = ({ fieldName }) => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ display: "flex" }}>
      <div>{fieldName}</div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
};
export default CommonInput;
