import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiCloseCircleOutline } from '@mdi/js';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';

const ToolsListItem = ({ tool, onRemove }) => {
  const { id, title, link, description, tags } = tool;
  function handleOnRemove() {
    onRemove(tool);
  }
  return (
    <Card key={id} className="mb-4 rounded-0">
      <CardBody>
        <Row className="d-flex align-items-center">
          <Col xs={8} lg={10}>
            <a href={link} className="btn-title" target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </Col>
          <Col xs={4} lg={2}>
            <Button
              color="link"
              onClick={handleOnRemove}
              className="btn-nolink d-flex w-100 justify-content-end text-danger align-items-center"
            >
              <Icon path={mdiCloseCircleOutline} size={1} color="#dc3545" />
              <span className="ml-1 d-inline-block font-weight-bold">remove</span>
            </Button>
          </Col>
        </Row>
        <Row className="mt-1">
          <Col xs={12}>
            <span>{description}</span>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col xs={12}>
            {tags.map(tag => (
              <span key={tag} className="d-inline-block font-weight-bold mr-2">
                #{tag}
              </span>
            ))}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

ToolsListItem.propTypes = {
  onRemove: PropTypes.func.isRequired,
  tool: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    link: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default ToolsListItem;
