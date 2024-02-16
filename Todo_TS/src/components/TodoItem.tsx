import { useState } from "react";

interface todoItemProps {
  id: number;
  title: string;
  done: boolean;
  deleteTodo: (id: number) => void;
}
const TodoItem: React.FunctionComponent<todoItemProps> = ({
  id,
  title,
  done = false,
  deleteTodo,
}: todoItemProps) => {
  const [checked, setChecked] = useState<boolean>(done);

  return (
    <div className=" flex items-center justify-center gap-x-4 ">
      <div className="flex gap-2">
        <input
          className=""
          checked={checked}
          onChange={() => setChecked(!checked)}
          type="checkbox"
        />
        <h1
          className={`text-xl text-slate-300  ${checked ? "line-through" : ""}`}
        >
          {title}
        </h1>
      </div>
      <div className="flex itemsc-center gap-4">
        {/* {TODO: editing todo} */}
        {/* <button className="border border-transparent bg-green-500 hover:bg-green-600 rounded-md text-white px-6 py-3 "> */}
        {/*   Edit Todo */}
        {/* </button> */}
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
