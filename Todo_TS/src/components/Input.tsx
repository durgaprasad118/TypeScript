import { useState } from "react";
import { TodoItem } from "./TodoItem";
interface todo {
  id: number;
  title: string;
  done: boolean;
}
const Input: React.FunctionComponent = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<todo[]>([
    {
      id: 1,
      title: "go to temple",
      done: false,
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: value,
        done: false,
      },
    ]);
    setValue("");
  }
  // TODO: delete Todo get the id from the todo and filter the todos without it and setTodos
  function DeleteTodo(id: number) {
    const filteredTodos = todos.filter((x) => x.id !== id);
    setTodos([...filteredTodos]);
  }
  //toogleTodos =>
  function ToogleTodos(id: number) {
    const filteredTodos = todos.map(
      (x) => (x = x.id === id ? { ...x, done: !x.done } : x),
    );
    setTodos([...filteredTodos]);
  }
  //NOTE: edit the title of the todos-list
  function EditTodos(id: number, updatedTitle: string) {
    const filteredTodos = todos.map(
      (x) => (x = x.id === id ? { ...x, title: updatedTitle } : x),
    );
    setTodos([...filteredTodos]);
  }
  return (
    <div>
      <div className="flex items-center justify-center md:gap-4 gap-2">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter todo"
          type="text"
          className="border md:px-10 py-3 text-black   rounded-md focus:border-none outline-none shadow shadow-slate-50 "
        />
        <button
          onClick={addTodo}
          className="border border-transparent bg-blue-500 outline:none hover:bg-blue-600 rounded-md text-white px-6 py-3 "
        >
          Add todo
        </button>
      </div>
      <div className="todos-list flex justify-center mt-5 px-30 h-96 ">
        <div className="w-3/4  flex flex-col gap-y-3">
          {todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                title={todo.title}
                done={todo.done}
                deleteTodo={DeleteTodo}
                toogleTodos={ToogleTodos}
                editTodos={EditTodos}
                id={todo.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { Input };
