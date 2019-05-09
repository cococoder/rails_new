import React, { useState } from "react";
import { hot } from "react-hot-loader/root";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>You clicked {count} times!</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </>
  );
}

export default hot(Counter);
