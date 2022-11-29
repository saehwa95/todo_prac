import React, { useState } from "react";
import TodoList from "./TodoList";

const Create = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "리액트",
      content: "컴포넌트에 대해 알아보자",
      isDone: true,
    },
  ]);
  // todos를 한 놈과 해야될 놈으로 나눈다.
  // const willDo = [
  //   {
  //     id: 1,
  //     title: "리액트 공부하기",
  //     content: "컴포넌트 알아보기",
  //     haetda: true,
  //   },
  // ];
  // const noDone = [
  //   {
  //     id: 2,
  //     title: "리액트",
  //     content: "props 알아보기",
  //     haetda: false,
  //   },
  // ];
  const [input, setInput] = useState({ title: "", content: "" });

  const addTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: todos.length + 1,
      ...input,
      isDone: true,
    };
    setTodos([...todos, newTodo]);

    setInput({ title: "", content: "" });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  return (
    <>
      <div>
        <form onSubmit={addTodo}>
          <div>
            <label>
              <span>제목</span>
              <input onChange={handleInput} value={input.title} name="title"/>
            </label>
          </div>

          <div>
            <label>
              <span>내용</span>
              <input onChange={handleInput} value={input.content} name="content" />
            </label>
          </div>

          <button type="submit">추가하기</button>
        </form>
      </div>
      <div>
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
};
// TodoList => 얘는 같은 컴포넌트
// 하나의 일만 정리할 수 있다.
export default Create;

// Todolist
// map으로 Card 그리기
// map에서 그리는 친구들의 위치 : Create.jsx
// => title 넘겨준것처럼(props)로 넘겨준다.

// 컴포넌트 => 재사용할 경우 => 기능이 있을 때
// Card
// Todolist에서 넘어온 각각의 요소를 html 요소 안에 값으로 넣어주기
// 버튼 => value = {Done? '완료' : '취소'}

// 삭제 / 값 수정
