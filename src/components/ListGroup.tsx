import { MouseEvent, useState } from "react";

// { items: [], heading: string}
// using an interface
interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  // const items = ["New York", "Los Angeles", "Chicago", "London", "Tokyo"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const hancleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <h2>No item found</h2>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={hancleClick}
            onClickCapture={(event) => {
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

export default ListGroup;
