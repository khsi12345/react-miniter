import React, { Component } from 'react';
import '../tweet.scss';


class AddTweet extends Component {
  state = {
    textValue: '',
  }

  handleInputText = (e) => {
    this.setState({
      textValue: e.target.value
    })
    console.log(this.state.textValue)
  }
  handleAddTweet = (e) => {
    this.props.onCreate(this.state)
    this.setState({
      textValue: '',
    })
  }

  render() { 
    return (
        <div>
            <div className="mainView">
              <textarea placeholder="what's happening?" className="textBox"  value = {this.state.textValue} onChange = {this.handleInputText}></textarea>
              <div className="textInfo">
                <span className="curTextLength"></span>
                <span className="maxTextLength"></span>
              </div>
              <input type="button" value="Tweet" className="addTweetButton" onClick = {this.handleAddTweet} />
            </div>
        </div>
    )
  }
}
export default AddTweet;