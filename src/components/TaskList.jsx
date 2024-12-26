import React from "react";
import Task from "./Task";

const TaskList = ({
  tasks,
  done,
  toggleTask,
  deleteTask,
}) => {
  return (
    <section className="p-4 flex flex-col gap-3 w-full">
      <h2 className="text-lg font-semibold text-purple-200 ">
        {done === true
          ? `Done - ${tasks.length}`
          : `Task to do - ${tasks.length}`}
      </h2>

      <div className="flex flex-col gap-2">
        {tasks.map((task) => (
          <Task
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </section>
  );
};

export default TaskList;
