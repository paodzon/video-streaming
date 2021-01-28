import React from "react";
import "./StreamCreate.css";
import { Field, reduxForm } from "redux-form";
import { Button, Label, Input, FormText } from "reactstrap";

class StreamForm extends React.Component {
  renderInput = (formProps) => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? "error" : ""
    } `;
    return (
      <div className={`streamcreate-input ${className}`}>
        <Label>{formProps.label}</Label>
        <Input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
          autoComplete="off"
        />
        {this.renderError(formProps.meta)}
      </div>
    );
  };

  renderError = ({ touched, error }) => {
    if (touched) {
      return (
        <div>
          <FormText>{error}</FormText>
        </div>
      );
    }
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  }

  render() {
    return (
      <div className="streamcreate">
        <form
          className="streamcreate-form"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            name="title"
            component={this.renderInput}
            label="Enter Title"
          />
          <Field
            name="description"
            component={this.renderInput}
            label="Enter Description"
          />
          <Button className="streamcreate-btn">Submit</Button>
        </form>
      </div>
    );
  }
}
const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};


export default reduxForm({form:'streamForm', validate})(StreamForm)
