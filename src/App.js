import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Zid  , NA9ES} from './actions/ExperienceActions'
import {connect} from 'react-redux'
import Receive from './Receive'

class App extends Component {

  state = {
    nb : 0
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <button onClick={()=> this.props.Zid()} >Ziiid</button>
        <button onClick={()=> this.props.NA9ES(20)} >na9es</button>
        <button onClick={()=> this.setState({nb:this.state.nb+1}) } >zeyda</button>

        <Receive nb={this.state.nb} />


        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //nb : state.Experience.nb
})

const mapDispatchToProps = {
  Zid , 
  NA9ES
}

export default connect(mapStateToProps , mapDispatchToProps)(App)

