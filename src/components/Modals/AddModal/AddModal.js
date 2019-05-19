import { object, string, array } from 'yup';
import { withFormik } from 'formik';
import AddModalForm from './AddModalForm';

const validationSchema = object().shape({
  title: string().required(),
  link: string()
    .url()
    .required(),
  description: string().required(),
  tags: array().min(1),
});

const AddModal = withFormik({
  mapPropsToValues: () => {
    const INITIAL_STATE = {
      title: '',
      link: '',
      description: '',
      tags: [],
    };
    return INITIAL_STATE;
  },
  handleSubmit: (values, formProps) => {
    const { title, link, description, tags } = values;
    const tagsMap = tags.map(it => it.value);
    const {
      props: { toggle, addTool },
    } = formProps;
    addTool({ title, link, description, tags: tagsMap });
    // close modal
    toggle();
  },
  validationSchema,
  displayName: 'AddModalForm',
})(AddModalForm);

export default AddModal;
