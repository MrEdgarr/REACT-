import React, { Component } from 'react';
import Dieuhuongurl from '../router/Dieuhuongurl';
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import './../css/styles.css';
import Footer from './Footer';
import Slider from './Slider';

class App extends Component {
  render() {
    return (
        <div className="App">
          {/* Header*/}
          <Slider />
          <Dieuhuongurl></Dieuhuongurl>
          <Footer />
        </div>
    );
  }
}


export default App;