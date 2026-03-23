import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div style={{ maxWidth: "500px", margin: "40px auto", fontFamily: "Arial" }}>
      <h1>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
