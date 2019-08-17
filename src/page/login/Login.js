import React from 'react';
// import logo from './logo.svg';
import './login.scss';
import LoginInput from '../../component/LoginInput';
import Button from '../../component/Button';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class Login extends React.Component {
  // infoStyle = {display: 'none'}
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      pw: '',
    };
  }

  // componentDidMount() {
  //   console.log('마운트');
  // }

  // componentDidUpdate() {
  //   console.log('업데이트');
  // }

  handleLogInInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  render() {
    const { email, pw } = this.state;
    return (
      <div className="Login-page">
        <div className="logo-img">
          <img
            src="https://upload.wikimedia.org/wikipedia/ko/thumb/9/9e/%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg/1200px-%ED%8A%B8%EC%9C%84%ED%84%B0_%EB%A1%9C%EA%B3%A0_%282012%29.svg.png"
            alt="트위터 로고 이미지"
          />
        </div>
        <h1>Log in to Twitter</h1>
        <LoginInput
          type="text"
          name="email"
          placeholder="Phone, email, or username"
          className="inputEmail"
          onChange={this.handleLogInInput}
        />
        {/* <input
          type="text"
          name="email"
          placeholder="Phone, email, or username"
          className="inputEmail"
          onChange={this.handleLogInInput}
        /> */}

        {/* email, PhoneNumber 입력하면 입력창 밑 경고를 없애주는 로직 */}
        {/* {!this.state.email &&
            <p className="inputEmailNoti">*Phone Number 또는 Email을 입력하세요.</p>
          } */}
        {email ? (
          <p style={{ marginBottom: `${23}px` }} />
        ) : (
          <p className="inputEmailNoti">
            *Phone Number 또는 Email을 입력하세요.
          </p>
        )}
        <LoginInput
          type="password"
          name="pw"
          placeholder="Password"
          className="inputPw"
          onChange={this.handleLogInInput}
        />
        {/* <input
          type="text"
          name="pw"
          placeholder="Password"
          className="inputPw"
          onChange={this.handleLogInInput}
        /> */}

        {email && pw ? (
          <Button
            type="submit"
            className="logInBtn"
            style={{ backgroundColor: 'deepskyblue' }}
            name="Login"
          />


        ) : (
          <Button type="submit" className="logInBtn" name="Login" />

        )}
      </div>
    );
  }
}

export default Login;
