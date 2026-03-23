import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategorySelector from "./components/CategorySelector";
import TaskList from "./components/TaskList";
import { addTask } from "./features/tasks/tasksSlice";
import { selectCompletedTasks } from "./features/tasks/selectors";

export default function App() {
  const dispatch = useDispatch();
  const completedCount = useSelector(selectCompletedTasks);
  const categories = useSelector((state) => state.categories);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskCategoryId, setTaskCategoryId] = useState("cat-1");

  const handleAddTask = () => {
    if (!taskTitle.trim()) return;
    dispatch(addTask({ title: taskTitle, categoryId: taskCategoryId }));
    setTaskTitle("");
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto", padding: "1rem" }}>
      <h1>Productivity Tracker</h1>
      <p>Completed tasks: {completedCount}</p>

      <CategorySelector
        selectedCategory={selectedCategory}
        onChange={setSelectedCategory}
      />

      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="New task"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          style={{ marginRight: "8px" }}
        />

        <select
          value={taskCategoryId}
          onChange={(e) => setTaskCategoryId(e.target.value)}
          style={{ marginRight: "8px" }}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <TaskList selectedCategory={selectedCategory} />
    </div>
  );
}
