
import React from 'react';
import {Route} from 'react-router-dom';
import {Routes} from 'react-router-dom'
import 'react-dropdown/style.css';
import Home from './components/Home/Home';
import Navbar from './components/UI/Navbar';
import History from './components/History/History'
import Header from './components/UI/Header';

function App() {
  
  return (
      <React.Fragment>
        <Navbar/>
        <Header/>
        <Routes>
          <Route exact path="/history" element={<History/>}></Route>
          <Route exact path="/" element={<Home/>}></Route>
        </Routes>
      </React.Fragment>

  );
}

export default App;
