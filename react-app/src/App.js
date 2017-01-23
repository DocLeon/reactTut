import React, { Component } from 'react';

class App extends Component {  
  constructor () {
    super();
    this.state = {
      txt: 'this txt from state',
      cat: 0
    }
  }
  render() {
    return <div>
     <h1>{this.state.txt} - {this.state.cat}</h1>
     <Widget update={this.update.bind(this)}/>      
     <Widget update={this.update.bind(this)}/> 
     <Widget update={this.update.bind(this)}/> 
     <Button>react</Button>
     <Button>I <Heart /> React</Button>
    </div>
  }
  update( e ){
    this.setState({txt: e.target.value})
  }
}

const Widget = (props) => <input type="text"
        onChange={props.update}/>

class Heart extends React.Component {
  render(){
    return <span>&hearts;</span>
  }
}

const Button = (props) => <button>{props.children}</button>


App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

App.defaultProps = {
  txt: 'this is the default text'
}

export default App;
