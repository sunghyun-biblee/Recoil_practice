import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../todoappAtom";

export const TodoTyping = () => {
  const [inputValue, setInputValue] = useState();
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      { id: getId(), text: inputValue, isComplete: false },
    ]);
    setInputValue("");
  };

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>추가</button>
    </div>
  );
};

let id = 0;
function getId() {
  return id++;
}
