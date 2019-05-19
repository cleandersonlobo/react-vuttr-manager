import React from 'react';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import { Button } from 'reactstrap';

const AddButton = buttonProps => {
  return (
    <Button
      color="primary"
      block
      className="d-flex justify-content-center align-items-center"
      {...buttonProps}
    >
      <Icon path={mdiPlus} size={1} color="#FFFFFF" />
      <span className="d-inline-block font-weight-bold">Add</span>
    </Button>
  );
};

export default AddButton;
