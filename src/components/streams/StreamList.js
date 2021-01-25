import React from "react";
import './StreamList.css';
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList(){
      return(<div>
      {this.props.streams.map(stream =>{
          return(<div className="streamlist-con">
              <h5>{stream.title}</h5>
              <p>{stream.description}</p>
          </div>)
        })}
      </div>)

  }
  render() {
    return (
      <div className="streamlist">
          <div className="streamlist-table">
            <div className="streamlist-header">
                <div><h3>Streams</h3></div>

            </div>
          {this.renderList()}
          </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { streams: Object.values(state.streams) };
};

export default connect(mapStateToProps, {
  fetchStreams,
})(StreamList);
