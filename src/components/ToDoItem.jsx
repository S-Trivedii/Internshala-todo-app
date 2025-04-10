import { useState } from "react";
import { Trash2 } from "lucide-react";

export function ToDoItem({ task, deleteTask, toggleCompletion, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  return (
    <li className="flex justify-between items-center p-2 mt-2 border rounded-lg bg-gray-50">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleCompletion(task.id)}
        className="mr-2 h-5 w-5"
      />
      {isEditing ? (
        <input
          type="text"
          className="p-1 border rounded-lg"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={`cursor-pointer ${task.completed ? "line-through" : ""}`}
          onClick={() => toggleCompletion(task.id)}
        >
          {task.text}
        </span>
      )}
      <div className="flex gap-1">
        <button
          className="p-1 text-red-500 rounded-lg"
          onClick={() => deleteTask(task.id)}
        >
          <Trash2 />
        </button>
        {isEditing ? (
          <button
            className="px-2 py-1 text-green-400 rounded-lg"
            onClick={() => {
              editTask(task.id, newText);
              setIsEditing(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="px-2 py-1 text-blue-400 rounded-lg"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
      </div>
    </li>
  );
}
