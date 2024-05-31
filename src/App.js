import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      mode: 'light',
      progress: 0
    }
  }

  pageSize = 8;
  apiKey= process.env.REACT_APP_NEWS_API

  setProgress = (progress) => {
    this.setState({progress: progress})
  }

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
          <LoadingBar
            color={this.state.mode==='light'?'black':'white'}
            height={2}
            progress={this.state.progress}
            
          />
          <Routes>
            <Route exact path="/business" element={<News  key="business" apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} category="business" country="in" />} />
            <Route exact path="/entertainment" element={<News  key="entertainment" apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} category="entertainment" country="in" />} />
            <Route exact path="/general" element={<News  key="general" apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} category="general" country="in" />} />
            <Route exact path="/health" element={<News  key="health" apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} category="health" country="in" />} />
            <Route exact path="/science" element={<News  key="science" apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} category="science" country="in" />} />
            <Route exact path="/sports" element={<News  key="sports" apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} category="sports" country="in" />} />
            <Route exact path="/technology" element={<News  key="technology" apiKey={this.apiKey} setProgress={this.setProgress} mode={this.state.mode} pageSize={this.pageSize} category="technology" country="in" />} />


          </Routes>
        </Router>

      </div>
    )
  }
}

