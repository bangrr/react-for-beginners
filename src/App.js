import { useState } from "react";
import Button from "./Button";
import ToDoList from "./ToDoList";
import CoinTracker from "./CoinTracker";

function App() {
  const [viewNum, setViewNum] = useState(0);
  return (
    <div>
      <Button text={"To Do List"} number={1} setViewNum={setViewNum} />
      <Button text={"Coin Tracker"} number={2} setViewNum={setViewNum} />
      <hr />
      <ToDoList viewNum={viewNum} />
      <CoinTracker viewNum={viewNum} />
    </div>
  );
}

export default App;
