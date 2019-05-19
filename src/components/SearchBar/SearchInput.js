import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { FormGroup, Label, Col, Input } from 'reactstrap';

const SearchInput = ({ onSearch }) => {
  const [onlyTags, setOnlyTags] = useState(false);
  const [search, setSearch] = useState('');
  function handleOnChangeCheck() {
    setOnlyTags(!onlyTags);
  }

  function handleOnChangeInput(event) {
    const { value } = event.currentTarget;
    setSearch(value);
    onSearch({ search, onlyTags });
  }

  return (
    <FormGroup row className="align-items-center">
      <Col xs={12} md={6} lg={4}>
        <span className="has-search">
          <Icon path={mdiMagnify} size={0.9} color="#aaa" />
        </span>
        <Input
          placeholder="search"
          type="search"
          name="search"
          value={search}
          onChange={handleOnChangeInput}
        />
      </Col>
      <Col xs={12} md={6} lg={8} className="mt-2 mt-md-0">
        <FormGroup check>
          <Label check>
            <Input type="checkbox" checked={onlyTags} onChange={handleOnChangeCheck} />
            search in tags only
          </Label>
        </FormGroup>
      </Col>
    </FormGroup>
  );
};

SearchInput.propTypes = {
  onSearch: PropTypes.func,
};

export default SearchInput;
