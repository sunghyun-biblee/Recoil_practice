import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../todoappAtom";

export const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  return (
    <div>
      {todoList &&
        todoList.map((items) => (
          <div>
            <span>{items.inputValue}</span>
          </div>
        ))}
    </div>
  );
};
