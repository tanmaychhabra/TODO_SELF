import React, { Component } from "react";
import "./styles.css";
import DeleteButton from "./DeleteButton";
import axios from "axios";
import Icon from "@material-ui/core/Icon";
import { green } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import EditButton from "./EditButton";

export default class App extends Component {
  inputRef = React.createRef();
  state = {
    text: "",
    todo: [],
    posts: [],
    disabled: true
  };
  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleSubmit = (e) => {
    if (this.state.todo !== "") {
      //const newItem = [...this.state.todo, this.state.text];
      let newItem = this.state.todo.concat(this.state.text);
      this.setState({
        todo: newItem,
        text: "",
        disabled: false
      });
    }
  };

  // cancelHandler = (e) => {
  //   let newItem = [];
  //   newItem = this.state.todo;

  //   this.setState({
  //     todo: this.state.todo,
  //     text: "",
  //     cancelDisabled: true
  //   });
  // };

  clearHandler = (e) => {
    this.setState({
      todo: [],
      disabled: true
    });
  };

  editHandler = (index, todo) => {
    const updatedTodo = this.state.todo;
    const newUpdatedTodo = updatedTodo.splice(index, 1);
    this.setState({
      text: todo,
      todo: updatedTodo
    });
  };

  componentDidMount() {
    this.inputRef.current.focus();
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.setState({
        posts: response.data
      });
      // console.log(response);
    });
  }
  render() {
    return (
      <div className="App">
        <h1>TODO APP</h1>
        <TextField
          type="text"
          onChange={this.handleChange}
          ref={this.inputRef}
          value={this.state.text}
          variant="standard"
          multiline
        />
        <Button
          onClick={this.handleSubmit}
          color="primary"
          variant="contained"
          size="small"
        >
          ADD TODO
        </Button>

        {/* <Button
          disabed={this.state.cancelDisabled}
          onClick={this.cancelHandler}
          color="primary"
          variant="contained"
          size="small"
          style={{ marginLeft: "20px" }}
        >
          CANCEL
        </Button> */}
        <ul type="circle">
          {this.state.todo.map((todo, index) => {
            return (
              <li key={index}>
                {todo}
                <p></p>
                <DeleteButton firstItem={index} secondItem={this.state.todo} />
                {/* <EditButton firstItem={index} secondItem={this.state.todo} /> */}
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => this.editHandler(index, todo)}
                >
                  EDIT
                </Button>
              </li>
            );
          })}
        </ul>

        <Button
          disabled={this.state.disabled}
          color="warning"
          variant="contained"
          onClick={this.clearHandler}
        >
          CLEAR LIST
        </Button>
      </div>
    );
  }
}
