import React, { Component } from "react";
import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../redux/actions/actionCreators";

class TodoAdd extends Component {
  state = {
    todo: "",
  };
  render() {
    return (
      <div>
        <InputGroup>
          <Input
            onChange={(e) => this.setState({ todo: e.target.value })}
            placeholder="todo"
          />
          <InputGroupAddon addonType="append">
            <Button
              color="success"
              onClick={() => this.props.actions.add(this.state.todo)}
            >
              Ekle
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      add: bindActionCreators(actionCreators.todoAdd, dispatch),
    },
  };
}
export default connect(null, mapDispatchToProps)(TodoAdd);
