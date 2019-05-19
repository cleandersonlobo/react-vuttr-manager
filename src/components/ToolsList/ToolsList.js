import React from 'react';
import PropTypes from 'prop-types';
import { EmptyTools } from '..';
import ToolsListItem from './ToolsListItem';

const ToolsList = props => {
  const { tools } = props;

  if (!tools) return null;

  if (tools && !tools.length) return <EmptyTools />;

  return (
    <React.Fragment>
      {tools.map(tool => (
        <ToolsListItem key={tool.id} tool={tool} />
      ))}
    </React.Fragment>
  );
};

ToolsList.propTypes = {
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

export default ToolsList;
