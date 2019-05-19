import React from 'react';
import { Row, Col } from 'reactstrap';

const EmptyTools = () => {
  return (
    <Row className="my-5">
      <Col xs={12}>
        <h3 className="text-center text-secondary">No data found</h3>
      </Col>
    </Row>
  );
};

export default EmptyTools;
