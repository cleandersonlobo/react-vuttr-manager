import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';
import { ToolsList, SearchBar } from '../../components';

class Tools extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.hanldeOnAddTool = this.hanldeOnAddTool.bind(this);
    this.hanldeOnSearch = this.hanldeOnSearch.bind(this);
  }

  componentDidMount() {
    const { getTools } = this.props;
    getTools();
  }

  hanldeOnAddTool(tool) {
    const { tools, addTool } = this.props;
    addTool({ tool, tools });
  }

  hanldeOnSearch({ value, onlyTags }) {
    const { search, searchByTag } = this.props;
    if (onlyTags) searchByTag(value);
    else search(value);
  }

  render() {
    const { tools, deleteTool } = this.props;
    return (
      <Container className="mt-5">
        <h1>VUTRR</h1>
        <h4 className="text-secondary">Very Useful Tools to Remember</h4>
        <Row>
          <Col xs={12}>
            <SearchBar addTool={this.hanldeOnAddTool} onSearch={this.hanldeOnSearch} />
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
  addTool: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  searchByTag: PropTypes.func.isRequired,
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
