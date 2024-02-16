import { Input } from "./components/Input";

function App() {
  return (
    <div className="bg-slate-700 text-white w-full h-[100vh]">
      <header className="pt-10 h-20  text-2xl text-center font-semibold ">
        Todo app
      </header>
      <div className="body-part">
        <Input />
      </div>
    </div>
  );
}

export default App;
