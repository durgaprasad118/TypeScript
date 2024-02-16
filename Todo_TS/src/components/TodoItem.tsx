import { useState } from "react";

interface todoItemProps {
  id: number;
  title: string;
  done: boolean;
  deleteTodo: (id: number) => void;
  toogleTodos: (id: number) => void;
  editTodos: (id: number, val: string) => void;
}
const TodoItem: React.FunctionComponent<todoItemProps> = ({
  id,
  title = "",
  done = false,
  deleteTodo,
  editTodos,
  toogleTodos,
}: todoItemProps) => {
  const [checked, setChecked] = useState<boolean>(done);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [val, setVal] = useState<string>(title);
  return (
    <div className=" flex items-center justify-center gap-x-4 ">
      <div className="flex gap-2">
        <input
          className=""
          checked={checked}
          onChange={() => {
            setChecked(!checked);
            toogleTodos(id);
          }}
          type="checkbox"
        />
        {isEditing ? (
          <input
            value={val}
            onChange={(e) => setVal(e.target.value)}
            placeholder="Edit todo"
            type="text"
            className="border md:px-10 py-3 text-black   rounded-md focus:border-none outline-none shadow shadow-slate-50 "
          />
        ) : (
          <h1
            className={`text-xl text-slate-300  ${checked ? "line-through" : ""}`}
          >
            {title}
          </h1>
        )}
      </div>
      <div className="flex itemsc-center gap-4">
        {/* {TODO: editing todo} */}
        <button
          onClick={() => {
            setIsEditing(!isEditing);
            if (isEditing) {
              editTodos(id, val);
            }
          }}
          className="border border-transparent bg-green-500 hover:bg-green-600 rounded-md text-white px-6 py-3 "
        >
          Edit Todo
        </button>
        <button
          onClick={() => deleteTodo(id)}
          className="border border-transparent bg-red-500 hover:bg-red-600 rounded-md text-white px-6 py-3 "
        >
          Delete Todo
        </button>
      </div>
    </div>
  );
};
export { TodoItem };
