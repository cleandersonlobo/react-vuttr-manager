import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { EmptyTools, RemoveModal } from '..';
import ToolsListItem from './ToolsListItem';

const ToolsList = props => {
  const [isOpenModal, setTooleModal] = useState(false);
  const [tool, setTool] = useState(null);

  const { tools, deleteTool } = props;

  if (!tools) return null;

  if (tools && !tools.length) return <EmptyTools />;

  function handleOnToggleModal() {
    setTooleModal(!isOpenModal);
  }

  function hanldeOnClickRemove(item) {
    handleOnToggleModal();
    setTool(item);
  }

  function handleOnRemove() {
    const { id } = tool;
    deleteTool({ tools, id });
    handleOnToggleModal();
  }

  return (
    <React.Fragment>
      <RemoveModal
        isOpen={isOpenModal}
        toggle={handleOnToggleModal}
        tool={tool}
        onConfirm={handleOnRemove}
      />
      {tools.map(item => (
        <ToolsListItem key={item.id} tool={item} onRemove={hanldeOnClickRemove} />
      ))}
    </React.Fragment>
  );
};

ToolsList.propTypes = {
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

export default ToolsList;
