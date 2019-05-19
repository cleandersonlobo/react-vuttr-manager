import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RemoveModal = ({ isOpen, toggle, onConfirm, tool }) => {
  if (!tool) return null;
  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Remove tool</ModalHeader>
      <ModalBody>
        Are you sure you want to remove
        <span className="font-weight-bold"> {tool.title}</span>?
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
        <Button color="danger" onClick={onConfirm}>
          Yes, remove
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

RemoveModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  tool: PropTypes.oneOfType([
    PropTypes.any,
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    }),
  ]),
};

export default RemoveModal;
