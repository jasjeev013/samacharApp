import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Home from './components/Home';
import About from './components/About';
import Search from './components/Search';

function App() {

  let [mode, setMode] = useState('light');
  let [progress, setProgress] = useState(0);
  let [country, setCountry] = useState('in');
  let [search, setSearch] = useState('');



  const pageSize = 8;
  const apiKey = process.env.REACT_APP_NEWS_API

  

  function updateMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#743232';
    } else {
      setMode('light')
      document.body.style.backgroundColor = '#B89DE4';
    }
  }

  function updateProgress(progress){
    setProgress(progress);
  }

  function updateSearch(search){
    setSearch(search);

  }

  
  let updateCountry = (country) => {
    setCountry(country);
  }




  return (
    <div>
      <Router>
        <Navbar mode={mode} setMode={updateMode} updateCountry={updateCountry} updateSearch={updateSearch} />
        <LoadingBar
          color={mode === 'light' ? 'black' : 'white'}
          height={2}
          progress={progress}

        />
        <Routes>
          <Route exact path="/" element={<Home mode={mode}/>} />
          <Route   exact path="/search" element={<Search key={`${search}===''?'search':'search+${search}'`} search={search} apiKey={apiKey} setProgress={updateProgress} mode={mode} pageSize={pageSize} country={country}/>} />
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} setProgress={updateProgress} mode={mode} pageSize={pageSize} category="business" country={country}  />} />
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} setProgress={updateProgress} mode={mode} pageSize={pageSize} category="entertainment" country={country}  />} />
          <Route exact path="/general" element={<News key="general" apiKey={apiKey} setProgress={updateProgress} mode={mode} pageSize={pageSize} category="general" country={country}  />} />
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} setProgress={updateProgress} mode={mode} pageSize={pageSize} category="health" country={country}  />} />
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} setProgress={updateProgress} mode={mode} pageSize={pageSize} category="science" country={country}  />} />
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} setProgress={updateProgress} mode={mode} pageSize={pageSize} category="sports" country={country}  />} />
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} setProgress={updateProgress} mode={mode} pageSize={pageSize} category="technology" country={country}  />} />
          <Route exact path="/about" element={<About/>} />


        </Routes>
      </Router>

    </div>
  )

}
export default App;


