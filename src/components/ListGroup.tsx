import { MouseEvent, useState } from "react";

function ListGroup() {
  const items = ["New York", "Los Angeles", "Chicago", "London", "Tokyo"];
  //  with let items = [];

  const message = items.length === 0 && <p>No items to display</p>;
  // let selectedIndex = -1;
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // const hancleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h1>ListGroup</h1>
      {message}
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
