import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(10);
  //THE FUNCTION IS BEING DEFINED BELOW
  function addOne() {
    setCount(count + 1);
  }
  return (
    <div className="UseState">
      <button onClick={addOne}>Count={count}</button>
    </div>
  );
}

function Cola() {
  return (
    <div>
      <UseState />
      <UseState />
      <UseState />
    </div>
  );
}
export default Cola;
