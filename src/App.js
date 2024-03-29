import logo from "./logo.svg";
import "./App.css";
import { atom, selector, useRecoilState } from "recoil";
import { TextInput } from "./component/TextInput";
import { CharacterCounter } from "./component/CharacterCounter";
import { TodoTyping } from "./component/TodoTyping";
import { TodoList } from "./component/TodoList";
import { TodoItem } from "./component/TodoItem";
import { todoListState } from "./todoappAtom";

// 기존 상태선언
// const [text,setText]=useState("")

// 리코일 상태선언
// export const textState = atom({
//   key: "textState", // <- 고유네임 (고유이름) -무조건 고유해야한다.  useSTate의 경우 컴포넌트 내에서 관리하기때문에 상관없지만 아톰같은경우는 전역관리이기 때문에 고유해야함
//   default: "", // <- 초기세팅값
// });
// export const charcterCount = selector({
//   key: "charcterCount",
//   get: ({ get }) => {
//     const test = get(textState);
//     return test.length;
//   },
// });

function App() {
  // const [text, setText] = useRecoilState(textState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <div className="App">
      <TodoTyping></TodoTyping>
      {todoList.map((todoitem) => (
        <TodoItem key={todoitem.id} item={todoitem} />
      ))}
    </div>
  );
}

export default App;
