import React from 'react';
// import logo from './logo.svg';
import './signup.scss';
import LoginInput from '../../component/LoginInput';
import Button from '../../component/Button';

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

    handleSignUpInput = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }


    render() {
      const {
        email, name, pw, profile,
      } = this.state;
      return (
        <div className="Signup-page">
          <h1>Sign up to Miniter</h1>
          <LoginInput type="text" name="email" placeholder="Enter ID or Enter Email" className="signInputID getDom" onChange={this.handleSignUpInput} />
          {email
            ? (<p style={{ marginBottom: `${23}px` }} />)
            : (<p className="signInputIDNoti noti">ID 또는 Email을 입력해주세요.</p>)}

          <LoginInput type="text" name="name" placeholder="Enter Name" className="signInputName getDom" onChange={this.handleSignUpInput} />
          {name
            ? (<p style={{ marginBottom: `${23}px` }} />)
            : (<p className="signInputNameNoti noti">Name을 입력해주세요.</p>)}

          <LoginInput type="text" name="pw" placeholder="Password" className="signInputPw getDom" onChange={this.handleSignUpInput} />
          {pw
            ? (<p style={{ marginBottom: `${23}px` }} />)
            : (<p className="signInputPwNoti noti">Password를 입력해주세요.</p>)}

          <LoginInput type="text" name="profile" placeholder="Enter Profile" className="signInputProfile getDom" onChange={this.handleSignUpInput} />
          {profile
            ? (<p style={{ marginBottom: `${23}px` }} />)
            : (<p className="signInputProfileNoti noti">Profile을 입력해주세요.</p>)}

          {(email && name && pw && profile)
            ? ((<Button type="submit" className="signUpBtn" style={{ backgroundColor: 'deepskyblue' }} name="SignUp" />))
            : (<Button type="submit" className="signUpBtn" name="SignUp" />)}


        </div>
      );
    }
}

export default Signup;
