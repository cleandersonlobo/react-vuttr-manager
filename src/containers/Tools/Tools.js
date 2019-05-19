import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { SearchInput, ButtonBlock, ToolsList } from '../../components';

class Tools extends PureComponent {
  componentDidMount() {
    const { getTools } = this.props;
    getTools();
  }

  render() {
    const { tools, deleteTool } = this.props;
    return (
      <Container className="mt-5">
        <h1>VUTRR</h1>
        <h4 className="text-secondary">Very Useful Tools to Remember</h4>
        <Row className="mt-5 mb-3">
          <Col xs={8} lg={10}>
            <SearchInput />
          </Col>
          <Col xs={4} lg={2} className="text-right">
            <ButtonBlock />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ToolsList tools={tools} deleteTool={deleteTool} />
          </Col>
        </Row>
      </Container>
    );
  }
}

Tools.propTypes = {
  getTools: PropTypes.func.isRequired,
  deleteTool: PropTypes.func.isRequired,
  tools: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
      })
    ),
  ]),
};

const mapStateToProps = ({ toolsModel }) => ({ ...toolsModel });
const mapDispatchToProps = ({ toolsModel }) => ({ ...toolsModel });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tools);
