import { useState } from "react";

function ToDoList() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type={"text"}
          placeholder={"Write your to do..."}
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((e, index) => (
          <li key={index}>{e}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
