import React, { Component } from 'react';

class App extends Component {  
  render() {
    let text = this.props.txt;
    return <div>
      <h1>{text}</h1>
      <b>BOLD</b>
    </div>
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text'
}

export default App;
