import { useState } from "react";

import "./App.css";

function App() {
  const [tags, setTags] = useState(["tag1", "tag2", "tag3"]);
  const TimeRanges = tags.map((tag, index) => (
    <span key={index} className="badge bg-primary me-1">
      {tag}
    </span>
  ));
  const handleClick = () => {
    // Add
    setTags([...tags, "tag"]);
    // Remove
    // setTags(tags.filter(tag => tag !== "tag1"));
    // Update
    // setTags(tags.map(tag => (tag === "tag1" ? "tag1.1" : tag)));
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
        <p>{TimeRanges.map}</p>
      </div>
    </>
  );
}

export default App;
