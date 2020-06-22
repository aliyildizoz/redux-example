import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actionCreators from "../redux/actions/actionCreators";
import { Button, Alert } from "reactstrap";
class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => {
          return (
            <Alert color="primary">
              {todo}
              <Button
                type="button"
                onClick={() => this.props.actions.remove(todo)}
                className="close text-danger btn-alert-primary"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </Button>
            </Alert>
          );
        })}
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      remove: bindActionCreators(actionCreators.todoRemove, dispatch),
    },
  };
}

export default connect(null, mapDispatchToProps)(TodoList);
