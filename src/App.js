import "./App.css";
import AddTodo from "./component/AddTodo";
import Todoes from "./component/Todoes";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <Todoes />
    </div>
  );
}

export default App;
