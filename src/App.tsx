import Button from "./components/Button";

function App() {
  return (
    <>
      <Button color="danger" onClick={() => console.log("Clicked")}>
        My Button to click on
      </Button>
    </>
  );
}

export default App;
