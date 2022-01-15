import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import Task from "./components/Task";
import "./App.css";
import { filterTodo } from "./redux/actions/actions";

const App = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);
  return (
    <div>
      <AddTask />
      <div className="filter">
        <Button onClick={() => dispatch(filterTodo("All"))}>all</Button>
        <Button onClick={() => dispatch(filterTodo(true))}>is done</Button>
        <Button onClick={() => dispatch(filterTodo(false))}>not done</Button>
      </div>
      <ListTask
        todos={
          filter == "All"
            ? todos
            : todos.filter((element) => element.isDone == filter)
        }
      />
    </div>
  );
};

export default App;
