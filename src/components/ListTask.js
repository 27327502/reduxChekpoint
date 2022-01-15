import React from "react";
import Task from "./Task";

const ListTask = ({ todos }) => {
  return (
    <div>
      {todos.map((element) => (
        <Task
          isDone={element.isDone}
          id={element.id}
          description={element.description}
        />
      ))}
    </div>
  );
};

export default ListTask;
