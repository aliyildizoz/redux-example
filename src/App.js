import React from "react";
import { Container, Row, Col } from "reactstrap";
import TodoAdd from "./components/TodoAdd";
import TodoRemove from "./components/TodoList";
import TodoSearch from "./components/TodoSearch";

function App() {
  return (
    <div className="App">
      <Container className="mt-5">
        <Row>
          <Col>
            <TodoAdd></TodoAdd>
          </Col>
          <Col>
            <TodoSearch></TodoSearch>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
