import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {alertVisible && (
        <Alert
          onClose={() => setAlertVisibility(false)}
          children="This is an alert"
        />
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        My Button to click on
      </Button>
      <Alert>This is also an alert but without the onClose functionality</Alert>
    </>
  );
}

export default App;
