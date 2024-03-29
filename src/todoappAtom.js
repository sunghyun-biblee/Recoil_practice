import { atom, selector } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [],
});
export const todoItemid = atom({
  key: "todoItemid",
  default: "",
});
export const todoText = selector({
  key: "todoText",
  get: ({ get }) => {
    const text = get(todoListState);
  },
});
