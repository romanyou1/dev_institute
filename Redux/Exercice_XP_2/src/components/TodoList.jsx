import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);

  if (todos.length === 0) {
    return <p>No todos yet. Add one!</p>;
  }

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;