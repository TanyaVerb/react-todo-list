import React from "react";
import { useState } from "react";

const TodoItem = ({
  setChangeOneTodo,
  setDoneOneTodo,
  item,
  deleteOneTodo,
  setImportantOneTodo,
}) => {
  const [change, setChange] = useState(false);
  const [changeText, setChangeText] = useState(item.text | "");

  const changeFunc = (e) => {
    if (e.target.textContent === "Save") {
      setChangeOneTodo(item.id, changeText);
    }
    setChange((prev) => !prev);
  };
  return (
    <li>
      <input
        checked={item.isDone}
        type="checkbox"
        onChange={() => setDoneOneTodo(item.id)}
      />

      {change ? (
        <input
          type="text"
          value={changeText}
          onChange={(e) => setChangeText(e.target.value)}
        />
      ) : (
        <p style={{ color: item.isDone ? "blue" : "black" }}>{item.text}</p>
      )}
      <button
        style={{ background: item.isImportant ? "gold" : "white" }}
        type="button"
        onClick={() => setImportantOneTodo(item.id)}
      >
        Impotant
      </button>
      <button onClick={changeFunc}>{change ? "Save" : "Change"}</button>
      <button type="button" onClick={() => deleteOneTodo(item.id)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
