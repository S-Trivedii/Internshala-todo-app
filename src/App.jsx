import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ToDoApp from "./pages/ToDoApp";

const router = createBrowserRouter([{ path: "/", element: <ToDoApp /> }]);

function App() {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 min-h-screen space-y-4">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
