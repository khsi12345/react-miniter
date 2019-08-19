import React from 'react';
import './tweet.scss';
// import '../../component/UserInfo';
import Button from '../../component/Button';
import UserrInfo from '../../component/UserInfo';
// import AddTweet from './AddTweet';

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
      name: 'Seongho Yang',
      text: '',
      maxInputText: 150,
      items: [
      ],
    };
  }


    handleInputText = (e) => {
      if (this.state.text.length <= this.state.maxInputText) {
        this.setState({
          text: e.target.value,
        });
      } else if (this.state.text === this.state.maxInputText) {
        this.setState({
          text: e.target.value.slice(0, this.stae.maxInputText),
        });
      }
    }

    // handleInputMaxText = (e) => {
    //   if (this.state.text.legnth <= this.state.maxInputText) {
    //     this.setState({
    //       text: e.target.value,
    //     });
    //   }
    // }

    // handleCreate = (data) => {
    //   // console.log(data)
    //   // console.log(this.state.text)
    //   // const {tweet} = this.state;
    //   // this.state.items.push({id: 0, name: '', textValue: this.state.text})
    //   // // this.state.items.concat({id:0, name:'', textValue: this.state.text})
    //   // this.setState({
    //   //     items: this.state.items
    //   // })
    //   // console.log(this.state.items)
    // }

    handleAddTweet = () => {
      const { text, items } = this.state;
      items.push({ id: 0, name: '', textValue: text });
      this.setState({
        items,
        text: '',
      });
    }

    render() {
      // const {items} = this.state.item;
      // console.log(items)


      return (
        <div className="Tweet-page">
          <div id="contain">
            <UserrInfo name={this.state.name} leng={this.state.items.length} />
            <div className="mainView">
              <div className="mainView2">
                <textarea
                  maxLength="150"
                  placeholder="what's happening?"
                  className="textBox"
                  ref={(input) => this.newItem = input}
                  value={this.state.text}

                  onChange={this.handleInputText}
                />
                <div className="textInfo">
                  <span className="curTextLength">{this.state.text.length}</span>
                  <span className="maxTextLength">{this.state.maxInputText}</span>
                </div>
                <Button
                  type="submit"
                  name="Tweet"
                  ref={(input) => this.clear = input}
                  value="Tweet"
                  className="addTweetButton"
                  onClick={this.handleAddTweet}
                />
                {/* <AddTweet onCreate = {this.handleAddTweet}/> */}
                <ul className="tweetContain">
                  { this.state.items.map((tweet) => (
                    <li key={tweet.name}>{tweet.textValue}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
}

export default Tweet;
