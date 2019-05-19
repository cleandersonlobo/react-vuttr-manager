import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import SearchInput from './SearchInput';
import ButtonAdd from './ButtonAdd';
import { AddModal } from '..';

const SearchBar = ({ addTool, onSearch }) => {
  const [isOpenModal, setTooleModal] = useState(false);

  function handleOnToggleModal() {
    setTooleModal(!isOpenModal);
  }

  return (
    <>
      <AddModal isOpen={isOpenModal} toggle={handleOnToggleModal} addTool={addTool} />
      <Row className="mt-5 mb-3">
        <Col xs={8} lg={10}>
          <SearchInput onSearch={onSearch} />
        </Col>
        <Col xs={4} lg={2} className="text-right">
          <ButtonAdd onClick={handleOnToggleModal} />
        </Col>
      </Row>
    </>
  );
};

SearchBar.propTypes = {
  addTool: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
