import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light'
    }
  }

  pageSize = 16;

  setMode = () => {
    if (this.state.mode === 'light') {
      this.setState({ mode: 'dark' });
      document.body.style.backgroundColor = '#743232';
    } else {
      this.setState({ mode: 'light' });
      document.body.style.backgroundColor = '#B89DE4';
    }
  }



  render() {

    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} setMode={this.setMode} />

          <Routes>
            <Route exact path="/business" element={<News key="business" mode={this.state.mode} pageSize={this.pageSize} category="business" country="in" />} />
            <Route exact path="/entertainment" element={<News key="entertainment" mode={this.state.mode} pageSize={this.pageSize} category="entertainment" country="in" />} />
            <Route exact path="/general" element={<News key="general" mode={this.state.mode} pageSize={this.pageSize} category="general" country="in" />} />
            <Route exact path="/health" element={<News key="health" mode={this.state.mode} pageSize={this.pageSize} category="health" country="in" />} />
            <Route exact path="/science" element={<News key="science" mode={this.state.mode} pageSize={this.pageSize} category="science" country="in" />} />
            <Route exact path="/sports" element={<News key="sports" mode={this.state.mode} pageSize={this.pageSize} category="sports" country="in" />} />
            <Route exact path="/technology" element={<News key="technology" mode={this.state.mode} pageSize={this.pageSize} category="technology" country="in" />} />


          </Routes>
        </Router>

      </div>
    )
  }
}

