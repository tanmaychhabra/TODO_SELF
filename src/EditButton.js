import React, { Component } from "react";
import Button from "@material-ui/core/Button";

class EditButton extends Component {
  state = {
    updatedTodo: this.props.secondItem,
    currentText: ""
  };
  render() {
    const editHandler = (index, currentTodo) => {
      const newUpdatedTodo = this.state.updatedTodo.splice(index, 1);
      this.setState({
        updatedTodo: this.newUpdatedTodo
      });
    };
    return (
      <Button
        color="primary"
        variant="contained"
        onClick={() => editHandler(this.props.firstItem, this.props.secondItem)}
      >
        EDIT
      </Button>
    );
  }
}

export default EditButton;
