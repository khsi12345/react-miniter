import React from 'react';
import './tweet.scss';
import { isTemplateElement, thisTypeAnnotation } from '@babel/types';
import AddTweet from './component/AddTweet';

// import { ReactComponent } from '*.svg';

// class Tweet extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             textValue: '',
//             items: [],
//         }
//         }
//     handleOnChange = (e) => {
//         this.setState({
//             textValue: e.target.value
//         })
//         console.log(this.state.textValue)
//     }
//     handelInputItem = (e) => {

//         // let {tweet} = this.state.items;
//       //  let tweet = this.state.items.tweet;
//         // let tweet = this.state.items;
//         this.state.items.push(this.state.textValue)
//         this.setState({
//             items: this.state.items
//         })
//     }
//     render() {
//        let {items} = this.state;
//     //    for(let i = 0; i < items.length; i++) {
//     //        tweets.push(<li key = {i}> {items[i]} </li>)
//     //    }
//     console.log(items)
//         return(
//             <div>
//                 <textarea value = {this.state.textValue} onChange= {this.handleOnChange}></textarea>
//                 <button onClick = {this.handelInputItem}></button>
//                 <ul>
//                     {items.map( (ele,i) => (
//                         <li key = {i}>{ele}</li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }

class Tweet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: [
      ]
    }
  }

  handleInputText = (e) => {
    this.setState({
      text: e.target.value,
    })

  }

  handleCreate = (data) => {
    // console.log(data)
    // console.log(this.state.text)
    // const {tweet} = this.state;
    // this.state.items.push({id: 0, name: '', textValue: this.state.text})
    // // this.state.items.concat({id:0, name:'', textValue: this.state.text})
    // this.setState({
    //     items: this.state.items
    // })
    // console.log(this.state.items)
  }

  handleAddTweet = (e) => {

    this.state.items.push({id: 0, name: '', textValue: this.state.text})
    this.setState({
      items: this.state.items
    })
    this.setState({
      text: ''
    })
    // this.state.items.text = '';
    console.log(this.state.items)
  }

  render() {
    // const {items} = this.state.item;
    // console.log(items)
    return(
      <div className="tweet-page">
        <div className="sideView">
          <div className="emptyDiv"></div>
          <div className="tweetInfoBox">
            <div className="tweetInfo userName">SeongHo Yang</div>
            <span className="tweetInfo">Tweets</span>
            <span className="tweetInfo tweetCount"></span>
          </div>
        </div>
        <div className="mainView">
          <textarea placeholder="what's happening?" className="textBox"  ref = {input => this.newItem = input} value = {this.state.text} onChange = {this.handleInputText}></textarea>
          <div className="textInfo">
            <span className="curTextLength"></span>
            <span className="maxTextLength"></span>
          </div>
          <input
            type="button"
            ref ={ input => this.clear = input}
            value="Tweet"
            className="addTweetButton"
            onClick = {this.handleAddTweet}
          />
        </div>
        {/* <AddTweet onCreate = {this.handleAddTweet}/> */}
        <ul className="tweetContain">
          { this.state.items.map( (tweet, name) => {
            return (
              <li key = {name}>{tweet.textValue}</li>
            )
          })
          }
        </ul>
      </div>
    )
  }
}

export default Tweet;
