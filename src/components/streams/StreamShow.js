import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";
import "./StreamShow.css";

class StreamShow extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer() {
    if (this.player || !this.props.streamUser) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`,
    });

    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }
  render() {
    if (!this.props.streamUser) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <video ref={this.videoRef} className="streamshow-vid" controls={true} />
        <h1>{this.props.streamUser.title}</h1>
        <h5>{this.props.streamUser.description}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { streamUser: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
