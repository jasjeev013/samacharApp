import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light'
    }
  }

  


  render() {

    return (
      <div>
        <Navbar mode = {this.state.mode} setMode = {() =>{
          if(this.state.mode === 'light'){
            this.setState({mode:'dark'});
            document.body.style.backgroundColor = '#743232';
          }else{
            this.setState({mode:'light'});
            document.body.style.backgroundColor = '#B89DE4';
          }
        }} />
        <News mode = {this.state.mode} />
      </div>
    )
  }
}

