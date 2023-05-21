/*function ListGroup1() {
  const items = ["Canada", "Nigeria"];
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup1;*/

/*function ListGroup1() {
    let items = ["Canada", "Nigeria"];
    items = [];
    return (
      <>
        <h1>List Group</h1>
        {items.length === 0 ? <p>No items found</p> : null}
        <ul className="list-group">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </>
    );
  }
  export default ListGroup1;*/

/*function ListGroup1() {
  let items = ["Canada", "Nigeria"];
  items = [];

  const getMessage = () => {
    //return items.length === 0 ? <p>No items found</p> : null;
    return items.length === 0 && <p>No items found</p>;
  };
  return (
    <>
      <h1>List Group</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup1;*/

/*function ListGroup1() {
  const items = ["Canada", "Nigeria", "America"];
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup1;*/

//HANDLING AN EVENT
/*import { MouseEvent } from "react";
function ListGroup1() {
  let items = ["Canada", "Nigeria", "America"];
  let selectedIndex = 0;
  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={handleClick}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup1;*/

// MANAGING STATE; each component has is own state and work independently of eachother when duplicated in app.tsx div space.
/*function ListGroup1() {
  let items = ["Canada", "Nigeria", "America"];

  //Hook;'useState' it is a function that help us tap into built in functions in react
  //     state variable,  function
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List Group</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup1;*/

//PASSING DATA VIA PROPS/PROPERTY
/*import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
//function ListGroup1(props:Props); the parameter in list group means; props(:)of type Props
function ListGroup1({ items, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup1;*/

//'line 37'/const getMessage = () =>/ is also the same as /function getMessage()/
//altenative for the if statement is;'line 6' {items.length === 0 ? <p>No items found</p> : null}
//the "lets" is used to assign variables
//alnative method for using the for function in react is thru mapping for arrays method
//with braces'{}', you can render anything dynamically
//items.map()
// x=> <li>{x}</li> mean; take each 'x'and convert it to an li element
// to use other compents within a function, we make use of curly braces'{}'
