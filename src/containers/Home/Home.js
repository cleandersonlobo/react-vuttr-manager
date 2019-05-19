import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SearchInput, AddButton } from '../../components';

class Home extends Component {
  render() {
    return (
      <Container className="mt-5">
        <h1>VUTRR</h1>
        <h4 className="text-secondary">Very Useful Tools to Remember</h4>
        <Row className="my-5">
          <Col xs={8} lg={10}>
            <SearchInput />
          </Col>
          <Col xs={4} lg={2} className="text-right">
            <AddButton />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
