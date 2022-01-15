import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions/actions";

const AddTask = () => {
  const [info, setInfo] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <Form.Label htmlFor="inputToDo" className>
        Add Task
      </Form.Label>

      <Form.Control
        type="text"
        id="inputToDo"
        onChange={(e) => setInfo({ description: e.target.value })}
        style={{ Border: "3px solid" }}
      />
      <Button variant="primary" onClick={() => dispatch(addTodo(info))}>
        Add To Do
      </Button>
    </div>
  );
};

export default AddTask;
