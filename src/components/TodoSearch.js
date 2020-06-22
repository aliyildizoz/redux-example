import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/actions/actionCreators";
import { Input } from "reactstrap";
import TodoList from "./TodoList";
class TodoSearch extends Component {
  state = {
    todos: [],
    filter: "",
  };
  onChangeHandler = (e) => {
    var filter = e.target.value;
    this.setState({ filter });
    this.props.actions.todoSearch(filter);
  };

  render() {
    return (
      <div>
        <Input className="mb-3" type="text" onChange={this.onChangeHandler} placeholder="ara" />
        <TodoList
          todos={
            this.state.filter === ""
              ? this.props.todos
              : this.props.filterResult
          }
        ></TodoList>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todoReducer.todos,
    filterResult: state.todoReducer.filterTodos
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      todoSearch: bindActionCreators(actionCreators.todoSearch, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoSearch);
