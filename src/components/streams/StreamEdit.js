import React from "react";
import "./StreamEdit.css";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }


  onSubmit = formValues =>{
      this.props.editStream(this.props.match.params.id, formValues);
  }

  render() {
    console.log(this.props);
    if (!this.props.streamUser) {
      return(<div>Loading</div>)
    }
    return (
      <div>
          <h1>Edit Stream</h1>
        <StreamForm 
        initialValues = {{title: this.props.streamUser.title, description: this.props.streamUser.description}}
         onSubmit={this.onSubmit}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streamUser: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream,editStream })(StreamEdit);
