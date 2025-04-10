import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      {" "}
      <Link
        to="https://github.com/S-Trivedii/Internshala-todo-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub Link Todo App
      </Link>{" "}
    </footer>
  );
};
