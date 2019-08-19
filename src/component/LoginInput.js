import React from 'react';

class LoginInput extends React.Component {
  render() {
    return (
      <input
        type={this.props.type}
        name={this.props.name}
        placeholder={this.props.placeholder}
        className={this.props.className}
        onChange={this.props.onChange}
      />
    );
  }
}
export default LoginInput;
