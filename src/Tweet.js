import React from 'react';
import './tweet.scss';
import './component/addTweet';
import { isTemplateElement, thisTypeAnnotation } from '@babel/types';
import addTweet from './component/addTweet';
// import { ReactComponent } from '*.svg';

// const AddTweet = (porps) => {
//     // let tweetList = [
//     //     {id: props.id, name: props.name, content: props.textValue}
//     // ]
//     return (
        
//        <addTweet/>
//     )
// }

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
            items: [
                {id: 0, name: '', textValue: '',}
            ]
        }
    }
    
    // handleInputText = (e) => {
    //     this.setState({
    //         text: e.target.value,
    //     })
        
    // }

    handleAddTweet = (e) => {
        // this.setState({
        //     id: this.state.id++,
        // });

        // let tweet = (
        // <div key = {this.state.id}>
        //     <h3>{}</h3>
        //     <p>{this.state.textValue}</p>
        // </div>
        // // )
        // return (
        //     <div>
        //     ff
        //     </div>
        // )
        // console.log(this.state.textValue)
    //    return {<addTweet/>}
    //  return AddTweet
    // e.preventDefault();
    this.state.items.textValue = this.newItem.value;
    let newItem = this.state.items 
    // console.log(item)
    // console.log(this.input)
    console.log(newItem)
    this.setState({
            items: [...this.state.items, newItem],
            textValue: ''
            // items.push(newItem)
        })
    // this.state.items.textValue = '';
        console.log(this.state.items[0])
    }
    
    render() {
        // const {items} = this.state.item; 
        // console.log(items)
        return(
            <div id="contain">
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
        <input type="button" ref ={ input => this.clear = input} value="Tweet" className="addTweetButton" onClick = {this.handleAddTweet}/>
            </div>
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