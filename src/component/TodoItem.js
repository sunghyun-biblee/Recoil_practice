import React from "react";
import { useRecoilState } from "recoil";
import { todoItemid, todoListState } from "../todoappAtom";

export const TodoItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const [todoid, setTodoid] = useRecoilState(todoItemid);
  const index = todoList.findIndex((listItem) => listItem === item);
  const edit = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });
    setTodoList(newList);
  };
  const complete = ({ target: { checked } }) => {
    console.log(item);

    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: checked,
    });
    setTodoList(newList);
  };
  const deleteItem = (event) => {
    let newList = [];
    console.log(event.target.id);
    console.log(todoList);
    todoList.forEach((item) => {
      if (item.id == event.target.id) {
        return;
      } else {
        newList.push(item);
      }
    });
    console.log(newList);
    setTodoList(newList);
  };
  return (
    <div>
      <input
        type="text"
        value={item.text}
        onChange={edit}
        style={{
          textDecoration: item.isComplete ? "line-through" : "none",
        }}
      />
      <input type="checkbox" checked={item.isComplete} onChange={complete} />
      <button onClick={deleteItem} id={item.id}>
        삭제
      </button>
    </div>
  );
};

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
