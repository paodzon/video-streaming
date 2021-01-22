import React from "react";
import "./StreamCreate.css";
import { Field, reduxForm } from "redux-form";
import { Button, Label, Input } from "reactstrap";

class StreamCreate extends React.Component {
  renderInput(formProps) {
    return (
      <div className="streamcreate-input">
        <Label>{formProps.label}</Label>
        <Input
          onChange={formProps.input.onChange}
          value={formProps.input.value}
        />
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    return (
      <div className="streamcreate">
        <form className="streamcreate-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
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

export default reduxForm({
  form: "streamCreate",
})(StreamCreate);
