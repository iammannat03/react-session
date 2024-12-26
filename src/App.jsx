import { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import JokeBox from "./components/JokeBox";
import Timer from "./components/Timer";
import ScratchToRevealDemo from "./components/ScratchDemoCard";

const dummy = [
  {
    id: 1,
    text: "Complete React project setup",
    done: false,
  },
  {
    id: 2,
    text: "Fix Vite dynamic import issue",
    done: false,
  },
  { id: 3, text: "Review pull requests", done: true },
  {
    id: 4,
    text: "Write unit tests for TaskList component",
    done: false,
  },
  { id: 5, text: "Prepare for project demo", done: true },
];

export default function App() {
  const [tasks, setTasks] = useState(dummy);

  // Funtions to add and remove tasks and to toggle tasks
  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: text,
        done: false,
      },
    ]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, done: !task.done }
          : task
      )
    );
  };

  return (
    <div className="container mx-auto flex flex-col justify-start items-center py-20 md:grid md:grid-cols-2 gap-x-10">
      <div className="hidden md:block md:col-span-1 h-full w-full flex-col justify-between items-center">
        <div className="w-full flex-col justify-start items-center">
          <Timer />
          <JokeBox />
        </div>
        <div className="w-full flex items-center justify-center py-36">
          <ScratchToRevealDemo />
        </div>
      </div>
      <div className="h-full flex flex-col justify-start items-center w-full px-5">
        <TaskInput addTask={addTask} />
        <div className="w-full flex flex-col justify-start items-stretch gap-y-3">
          <TaskList
            tasks={tasks.filter((task) => !task.done)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            done={false}
          />
          <TaskList
            tasks={tasks.filter((task) => task.done)}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
            done={true}
          />
        </div>
      </div>
    </div>
  );
}
