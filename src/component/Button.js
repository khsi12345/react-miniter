import React from 'react';

class Button extends React.Component {
  render() {
    return (
      <button
        type={this.props.type}
        className={this.props.className}
        value={this.props.value}
        style={this.props.style}
      >{this.props.name}
      </button>
    );
  }
}
export default Button;
