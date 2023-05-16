//USESTATE HOOKS
/*import { useState } from "react";
const Hooksdemo = () => {
  const [count, setCount] = useState(10);
  return (
    <div>
      <p>
        the current count is {count}
        <br></br>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </p>
    </div>
  );
};
export default Hooksdemo;*/

import { useState, useEffect } from "react";
const Hooksdemo = (props: any) => {
  const [count, setCount] = useState(props.count);
  //LIFECYCLE HOOK(useEffect)
  useEffect(() => {
    console.log("called everytime");
  }, []);

  useEffect(() => {
    console.log("called on update");
  }, [count]);

  return (
    <div>
      <p>
        the current count is {count}
        <br></br>
        <button onClick={() => setCount(count + 1)}>increment</button>
        <button onClick={() => setCount(count - 1)}>decrement</button>
        <button onClick={() => setCount(props.count)}>reset</button>
      </p>
    </div>
  );
};
Hooksdemo.defaultProps = {
  count: 0,
};
export default Hooksdemo;
