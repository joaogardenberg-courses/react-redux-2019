import React from 'react';

import {
  Field,
  reduxForm
} from 'redux-form';

class StreamForm extends React.Component {
  render() {
    return (
      <form
        className="ui form error"
        onSubmit={ this.props.handleSubmit(this.onSubmit) }
      >
        <Field
          name="title"
          label="Title"
          component={ this.renderInput }
        />
        <Field
          name="description"
          label="Description"
          component={ this.renderInput }
        />
        <button className="ui button primary">
          Submit
        </button>
      </form>
    );
  }

  renderInput = ({
                   input, label, meta,
                   input: { name },
                   meta: { error, touched }
                 }) => {
    const className = `field${error && touched ? ' error' : ''}`;

    return (
      <div className={ className }>
        <label htmlFor={ name }>{ label }</label>
        <input
          { ...input }
          id={ name }
          autoComplete="off"
        />
        { this.renderError(meta) }
      </div>
    );
  };

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">
            { error }
          </div>
        </div>
      );
    }
  }

  onSubmit = (values) => {
    this.props.onSubmit(values);
  };
}

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'You must enter a title';
  }

  if (!values.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

StreamForm = reduxForm({
  validate,
  form: 'streamForm'
})(StreamForm);

export default StreamForm;