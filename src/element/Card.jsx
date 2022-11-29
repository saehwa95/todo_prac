import React from "react";

const Card = ({ todo, deleteButton, editButton }) => {
  return (
    <>
      <div key={todo.id}>
        <div>
          <span>{todo.title}</span>
        </div>
        <div>
          <span>{todo.content}</span>
        </div>
        <div>
          <button onClick={() => deleteButton(todo.id)}>삭제하기</button>
          <button onClick={() => editButton(todo.id)}>
            {todo.isDone ? "완료" : "취소"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
