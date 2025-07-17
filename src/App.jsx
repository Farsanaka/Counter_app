import "./App.css";
import Counter from "./components/Counter";
import TotalCount from "./components/TotalCount";
function App() {
  const username = "Farsana";
  return (
    <>
      {" "}
      <h1 class="text-3xl font-bold underline text-red-500">Hello world!</h1>
      <h1>Testing tailwind</h1>
      <Counter />
      <TotalCount username={username} />
    </>
  );
}

export default App;
