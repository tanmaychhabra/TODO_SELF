import React, { useState } from "react";
import { DeleteIcon } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import EditButton from "./EditButton";

const DeleteButton = (props) => {
  const [updatedTodo, setUpdatedTodo] = useState([""]);
  const deleteHandler = (index) => {
    const updatedTodo = props.secondItem;
    updatedTodo.splice(index, 1);

    setUpdatedTodo(updatedTodo);
    alert(updatedTodo);
    let newUpdatedTodo = [...updatedTodo];
  };

  return (
    <div>
      <Button
        onClick={() => deleteHandler(props.firstItem)}
        color="secondary"
        variant="contained"
        style={{ margin: "20px ", align: "center" }}
      >
        DONE
      </Button>
    </div>
  );
};

export default DeleteButton;
