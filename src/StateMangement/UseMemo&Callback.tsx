/*import { useState } from "react";
function App() {
  const [numbers] = useState([10, 20, 30]);
  const total = numbers.reduce((acc: any, number: any) => acc + number, 0);
  return <div>Total:{total}</div>;
}
export default App;
//acc means "accumulator"*/

/*import { useState, useMemo } from "react";
function App() {
  const [numbers] = useState([10, 20, 30]);
  const total = useMemo(
    () => numbers.reduce((acc: any, number: any) => acc + number, 0),
    [numbers]
  );
  return <div>Total:{total}</div>;
}
export default App;*/

//USEMEMO HELPS TO DISPLAY THE SAID SOLUTION/ANSWER GOTTEN
/*import { useState, useMemo, useCallback } from "react";

function App() {
  const [names] = useState(["owolabi", "timi", "sola", "segun"]);
  const sortedNames = useMemo(() => [...names].sort(), [names]);
  return (
    <div>
      <div>Names:{names.join(",")}</div>
      <div>sortedNames:{sortedNames.join(",")}</div>
    </div>
  );
}
export default App;*/

import { useState, useMemo, useCallback } from "react";
function SortedList({ list, sortFunc }: any) {
  console.log("Sorted render");
  const sortedList = useMemo(() => [...list].sort(sortFunc), [list, sortFunc]);
  return <div>{sortedList.join(",")}</div>;
}
function App() {
  const [names] = useState(["owolabi", "timi", "sola", "segun"]);
  const sortFunc = useCallback((a: any, b: any) => a.localeCompare(b) * -1, []);
  return (
    <div>
      <div>Names:{names.join(",")}</div>
      <SortedList list={names} />
      <SortedList list={names} sortFunc={sortFunc} />
    </div>
  );
}
export default App;
