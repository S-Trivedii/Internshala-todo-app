import { useState } from "react";
import { ToDoList } from "../components/ToDoList";
import { Header } from "../components/Header";
import { Plus } from "lucide-react";
import { Footer } from "../components/Footer";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <>
      <div className="flex flex-col items-center p-4 md:p-8 lg:p-12 shadow-lg rounded-lg bg-white">
        <Header />
        <div className="flex flex-row gap-0 mt-4 w-full max-w-md">
          <input
            type="text"
            className="p-2 border rounded-l-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500 h-11"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-r-lg flex items-center h-11 hover:bg-blue-600 flex-shrink-0"
            onClick={addTask}
          >
            <Plus className="mr-2" /> Add
          </button>
        </div>
        <ToDoList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleCompletion={toggleCompletion}
          editTask={editTask}
        />
      </div>
      <Footer className="fixed bottom-0 w-full" />
    </>
  );
}

export default ToDoApp;
