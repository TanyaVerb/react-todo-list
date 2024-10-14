import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todo, setTodo }) => {
  const deleteOneTodo = (id) => {
    setTodo((prev) => prev.filter((item) => item.id !== id));
  };

  const setImportantOneTodo = (id) => {
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isImportant: !item.isImportant };
        }
        return item;
      })
    );
  };
  const setDoneOneTodo = (id) => {
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      })
    );
  };
  const setChangeOneTodo = (id, text) => {
    setTodo((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, text: text };
        }
        return item;
      })
    );
  };
  return (
    <ul>
      {todo.map((item) => (
        <TodoItem
          setChangeOneTodo={setChangeOneTodo}
          setImportantOneTodo={setImportantOneTodo}
          deleteOneTodo={deleteOneTodo}
          setDoneOneTodo={setDoneOneTodo}
          item={item}
          key={item.id}
        />
      ))}
    </ul>
  );
};

export default TodoList;
