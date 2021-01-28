import React from "react";
import "./StreamList.css";
import StreamDelete from './StreamDelete';
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";
import EditIcon from "@material-ui/icons/Edit";

import { Button } from "reactstrap";
import { Link } from "react-router-dom";
class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderActions(stream) {
    if (stream.userId === this.props.authID) {
      return (
        <div className="streamlist-actions">
          <Link to={`/streams/edit/${stream.id}`}>
            <div className="streamlist-icons">
              <EditIcon />
            </div>
          </Link>

          <div className="streamlist-icons">
            <StreamDelete stream={stream}/>
          </div>
        </div>
      );
    }
  }

  renderList() {
    return (
      <div>
        {this.props.streams.map((stream) => {
          return (
            <div className="streamlist-con">
              <div>
                <h4 className="streamlist-title">{stream.title}</h4>
                <span className="streamlist-desc">{stream.description}</span>
                <br></br>
                <span className="streamlist-desc">{stream.userId}</span>
              </div>
              {this.renderActions(stream)}
            </div>
          );
        })}
      </div>
    );
  }
  render() {
    return (
      <div className="streamlist">
        <div className="streamlist-table">
          <div className="streamlist-header">
            <div>
              <h2 className="streamlist-streams">Streams</h2>
            </div>
            {this.props.authID && (
              <div className="streamlist-create">
                <Link to="/streams/new">
                  <Button className="streamlist-btn">Create Stream</Button>
                </Link>
              </div>
            )}
          </div>
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams), authID: state.auth.userId };
};

export default connect(mapStateToProps, {
  fetchStreams,
})(StreamList);
