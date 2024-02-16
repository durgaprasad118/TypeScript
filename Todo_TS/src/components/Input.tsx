import { TodoItem } from "./TodoItem";
import { useTodoState } from "../utils/TodoHook";
const Input: React.FunctionComponent = () => {
  const { value, setValue, todos, addTodo, deleteTodo, toggleTodo, editTodo } =
    useTodoState();
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
                deleteTodo={deleteTodo}
                toogleTodos={toggleTodo}
                editTodos={editTodo}
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
