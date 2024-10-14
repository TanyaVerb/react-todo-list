import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoList from "./components/TodoList/TodoList";
import TodoAdd from "./components/TodoAdd/TodoAdd";
import "./style.css";

function App() {
  const [todo, setTodo] = useState([
    {
      id: uuidv4(),
      text: "Hello world",
      isImportant: false,
      isDone: true,
    },
  ]);
  return (
    <div className="App">
      <TodoAdd todo={todo} setTodo={setTodo} />
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
