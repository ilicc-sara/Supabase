import { useState, useEffect } from "react";
import "./App.css";
import TaskManager from "./task-manager";
import Auth from "./auth";

function App() {
  const [session, setSession] = useState(null);
  return (
    <>
      <TaskManager />
      <Auth />
    </>
  );
}

export default App;
