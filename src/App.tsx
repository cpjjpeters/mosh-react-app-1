import { useState } from "react";
import { produce } from "immer";
import "./App.css";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, description: "Bug 1", fixed: false },
    { id: 2, description: "Bug 2", fixed: false },
    { id: 3, description: "Bug 3", fixed: false },
  ]);

  const handleClick = () => {
    // setBugs(bugs.map((bug) => (bug.id === 2 ? { ...bug, fixed: true } : bug)));
    setBugs(
      produce(bugs, (draft) => {
        const bug = draft.find((bug) => bug.id === 2);
        if (bug) {
          bug.fixed = true;
        }
      })
    );
  };

  return (
    <>
      <div>
        <button onClick={handleClick}>Click Me</button>
        {bugs.map(
          (bug) => (
            console.log(bug),
            (
              <div key={bug.id}>
                {bug.description} - {bug.fixed ? "Fixed" : "Not Fixed"}
              </div>
            )
          )
        )}
      </div>
    </>
  );
}

export default App;
