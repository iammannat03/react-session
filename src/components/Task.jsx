import { CheckIcon, Plus, Trash } from "lucide-react";
import React from "react";

const Task = ({ task, toggleTask, deleteTask }) => {
  return (
    <div
      className={`flex items-center justify-between px-3 py-6 bg-purple-950/50 rounded-lg ${
        task.done
          ? "line-through text-gray-500"
          : "text-purple-400"
      }`}
    >
      <p className="text-base">{task.text}</p>
      <div className="flex items-center gap-4">
        <button onClick={() => toggleTask(task.id)}>
          {task.done ? (
            <Plus className="h-5 w-5" />
          ) : (
            <CheckIcon className="h-5 w-5" />
          )}
        </button>
        <button
          className="text-purple-500 hover:text-purple-500/80"
          onClick={() => deleteTask(task.id)}
        >
          <Trash className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Task;
