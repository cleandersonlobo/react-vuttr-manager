import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CreatableSelect from 'react-select/lib/Creatable';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  FormGroup,
  Input,
} from 'reactstrap';

const AddModalForm = ({
  values,
  handleChange,
  setValues,
  isOpen,
  toggle,
  errors,
  touched,
  resetForm,
  handleSubmit,
}) => {
  useEffect(() => {
    if (!isOpen) {
      resetForm({
        title: '',
        link: '',
        description: '',
        tags: [],
      });
    }
  }, [isOpen, resetForm]);
  const { title, link, description, tags } = values;
  const [inputTag, setInputTag] = useState('');
  function handleChangeInputChange(value) {
    setInputTag(value);
  }

  function handleOnChangeTags(items) {
    setValues({
      ...values,
      tags: items,
    });
  }

  function handleOnKeyDow(event) {
    event.preventDefault();
    setInputTag('');
    setValues({
      ...values,
      tags: [...tags, { label: inputTag, value: inputTag }],
    });
  }

  function handleOnKeyDownTags(event) {
    if (!inputTag) return;
    const action = {
      Tab: handleOnKeyDow,
      Enter: handleOnKeyDow,
    }[event.key];
    if (action) action(event);
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Add new tool</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup className="mb-3">
            <Label for="labelTitle">Tool Name</Label>
            <Input
              type="text"
              name="title"
              id="labelTitle"
              onChange={handleChange}
              className={classnames('rounded-0', {
                'is-invalid': errors.title && touched.title,
              })}
              value={title}
              placeholder="enter name"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="labellink">Tool Link</Label>
            <Input
              type="text"
              name="link"
              id="labellink"
              onChange={handleChange}
              className={classnames('rounded-0', {
                'is-invalid': errors.link && touched.link,
              })}
              value={link}
              placeholder="enter link"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="labeldescription">Tool Description</Label>
            <Input
              type="textarea"
              name="description"
              id="labeldescription"
              onChange={handleChange}
              value={description}
              className={classnames('rounded-0', {
                'is-invalid': errors.description && touched.description,
              })}
              placeholder="enter description"
            />
          </FormGroup>
          <FormGroup className="mb-3">
            <Label for="labeltags">Tags</Label>
            <CreatableSelect
              classNamePrefix="react-select"
              id="labeltags"
              components={{ DropdownIndicator: null }}
              inputValue={inputTag}
              isClearable
              isMulti
              menuIsOpen={false}
              className={classnames('rounded-0', {
                'is-invalid': errors.tags && touched.tags,
              })}
              onChange={handleOnChangeTags}
              onInputChange={handleChangeInputChange}
              onKeyDown={handleOnKeyDownTags}
              placeholder="Type tag and press enter..."
              value={tags}
            />
          </FormGroup>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSubmit}>
          Add tool
        </Button>
      </ModalFooter>
    </Modal>
  );
};

AddModalForm.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  setValues: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  values: PropTypes.instanceOf(Object).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired,
};

export default AddModalForm;
