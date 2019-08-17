import React from 'react';
// import logo from './logo.svg';
import './signup.scss';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      name: '',
      pw: '',
      profile: '',
    };
  }

    handleInputEmail = (e) => {
      this.setState({
        email: e.target.value,
      });
    }

    handleInputName = (e) => {
      this.setState({
        name: e.target.value,
      });
    }

    handleInputPw = (e) => {
      this.setState({
        pw: e.target.value,
      });
    }

    handleInputProfile = (e) => {
      this.setState({
        profile: e.target.value,
      });
    }

    render() {
      return (
        <div className="Signup-page">
          <h1>Sign up to Miniter</h1>
          <input type="text" placeholder="Enter ID or Enter Email" className="signInputID getDom" onChange={this.handleInputEmail} />
          {this.state.email
            ? (<p style={{ marginBottom: `${23}px` }} />)
            : (<p className="signInputIDNoti noti">ID 또는 Email을 입력해주세요.</p>)}

          <input type="text" placeholder="Enter Name" className="signInputName getDom" onChange={this.handleInputName} />
          {this.state.name
            ? (<p style={{ marginBottom: `${23}px` }} />)
            : (<p className="signInputNameNoti noti">Name을 입력해주세요.</p>)}

          <input type="text" placeholder="Password" className="signInputPw getDom" onChange={this.handleInputPw} />
          {this.state.pw
            ? (<p style={{ marginBottom: `${23}px` }} />)
            : (<p className="signInputPwNoti noti">Password를 입력해주세요.</p>)}

          <input type="text" placeholder="Enter Profile" className="signInputProfile getDom" onChange={this.handleInputProfile} />
          {this.state.profile
            ? (<p style={{ marginBottom: `${23}px` }} />)
            : (<p className="signInputProfileNoti noti">Profile을 입력해주세요.</p>)}

          {(this.state.email && this.state.name && this.state.pw && this.state.profile)
            ? ((<button className="signUpBtn" style={{ backgroundColor: 'deepskyblue' }}>Sign up</button>))
            : (<button className="signUpBtn">Sign up</button>)}


        </div>
      );
    }
}

export default Signup;
