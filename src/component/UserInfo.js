import React from 'react';

class UserrInfo extends React.Component {
  render() {
    return (
      <div className="sideView">
        <div className="emptyDiv" />
        <div className="tweetInfoBox">
          <div className="tweetInfo userName">{this.props.name}</div>
          <span className="tweetInfo">Tweets</span>
          <span className="tweetInfo tweetCount">{this.props.leng}</span>
        </div>
      </div>
    );
  }
}
export default UserrInfo;
