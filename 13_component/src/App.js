import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/TopMenu/TopMenu';
import Slider from './Component/Slider';
import Scroll from './Component/Scroll';
import Footer from './Component/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <Slider/>
        <Scroll/>
        <Footer/>
      </div>
    );
  }
}
<topmenu/>

export default App;
