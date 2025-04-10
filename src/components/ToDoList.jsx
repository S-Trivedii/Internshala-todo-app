import { ToDoItem } from "./ToDoItem";

export function ToDoList({ tasks, deleteTask, toggleCompletion, editTask }) {
  return (
    <ul className="mt-4 w-full max-w-md">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}
