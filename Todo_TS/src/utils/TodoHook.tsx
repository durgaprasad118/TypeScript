import { useState } from "react";

interface todo {
  id: number;
  title: string;
  done: boolean;
}
const useTodoState = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([
    {
      id: 1,
      title: "go to temple",
      done: false,
    },
  ]);

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), title: value, done: false }]);
    setValue("");
  };

  // NOTE: delete Todo get the id from the todo and filter the todos without it and setTodos
  const deleteTodo = (id: number) => {
    const filteredTodos = todos.filter((x) => x.id !== id);
    setTodos([...filteredTodos]);
  };

  const toggleTodo = (id: number) => {
    const updatedTodos = todos.map((x) =>
      x.id === id ? { ...x, done: !x.done } : x,
    );
    setTodos(updatedTodos);
  };

  //NOTE: edit the title of the todos-list
  const editTodo = (id: number, updatedTitle: string) => {
    const updatedTodos = todos.map((x) =>
      x.id === id ? { ...x, title: updatedTitle } : x,
    );
    setTodos(updatedTodos);
  };

  return { value, setValue, todos, addTodo, deleteTodo, toggleTodo, editTodo };
};
export { useTodoState };
