import React from "react";
import { v4 as uuidv4 } from "uuid";

const TodoAdd = ({ todo, setTodo }) => {
  const addTodo = async (e) => {
    e.preventDefault();
    let text = e.target[0].value;

    let isHas = todo.some((item) => item.text === text);
    if (!isHas) {
      await setTodo((prev) => [
        ...prev,
        {
          id: uuidv4(),
          text: text,
          isImportant: false,
          isDone: false,
          change: false,
        },
      ]);
    } else {
      alert("Такая задача уже существует!!!");
    }

    e.target[0].value = "";
  };
  return (
    <form onSubmit={addTodo}>
      <input required type="text" />
      <button type="submit">Add todo</button>
    </form>
  );
};

export default TodoAdd;
