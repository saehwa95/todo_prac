import React from "react";
import Card from "../element/Card";

const TodoList = ({ todos, setTodos }) => {
  const deleteButton = (id) => {
    const newTodoList = todos.filter((todo) => todo.id !== id);
    setTodos(newTodoList);
  };

  const editButton = (id) => {
    const newTodoList = todos.map((todo) => {
      return todo.id === id ? { ...todo, isDone: !todo.isDone } : todo;
    });
    setTodos(newTodoList);
  };
  return (
    <>
      <div>
        <h1>해야할 것</h1>
        {todos.map((todo) => {
          return todo.isDone ? (
            <Card
              key={todo.id}
              todo={todo}
              deleteButton={deleteButton}
              editButton={editButton}
            />
          ) : null;
        })}
      </div>
      <div>
        <h1>해낸 것</h1>
        {todos.map((todo) => {
          return !todo.isDone ? (
            <Card
              key={todo.id}
              todo={todo}
              deleteButton={deleteButton}
              editButton={editButton}
            />
          ) : null;
        })}
      </div>
    </>
  );
};

export default TodoList;
