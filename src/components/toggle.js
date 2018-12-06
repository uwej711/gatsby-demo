import React from 'react'

class Toggle extends React.Component{

  constructor(props) {
    super(props);
    this.state = { open: false}
  }

  handleClick = () => {
    this.setState((prevState, props) => ({open: !prevState.open}));
  };

  render(){
    return (
      <>
        <h2 onClick={this.handleClick}>{this.props.heading}</h2>
        <p style={this.state.open ? {display: 'block'} : {display: 'none'}}>{this.props.text}</p>
      </>
    )
  }
}

export default Toggle
