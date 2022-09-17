import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }

  render() {
    return (
      <button type="button" onClick={this.handleClick}>
        const
        {' '}
    {/*     { state }
  */}       {' '}
       const state = this.state;
        {state.isToggleOn ? 'ON' : 'State'}
      </button>
    );
  }
}

export default Toggle;
