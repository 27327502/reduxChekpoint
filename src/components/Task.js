import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { doneTodo, editTodo } from "../redux/actions/actions";

const Task = ({ description, id, isDone }) => {
  const [info, setInfo] = useState({ id, description, isDone });

  const dispatch = useDispatch();
  let btnDeclaration;
  const handleClick = (id) => {
    dispatch(doneTodo(id));
  };

  if (isDone) {
    btnDeclaration = "btn btn-success";
  } else {
    btnDeclaration = "btn btn-danger";
  }

  return (
    <Card key={id}>
      <Card.Body>
        <Card.Text>
          <p> {description}</p>
          <>
            <input
              type="text"
              placeholder="edit another thing to do.."
              onChange={(e) =>
                setInfo({ ...info, description: e.target.value })
              }
            />
            <button onClick={() => dispatch(editTodo(info))}>Edit</button>
          </>

          <button
            className={btnDeclaration}
            style={{ marginLeft: "20px" }}
            onClick={() => handleClick(id)}
          >
            {isDone ? "is Done " : "Not Done "}
          </button>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Task;
