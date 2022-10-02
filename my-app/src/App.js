import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'




//PROPS = properties (thuoc tinh cua component)
//Cach 1
function NumberOne(props) {
  return (
    <div class="card">
      <img class="card-img-top" src={props.image} alt="Card image cap" />
      <div class="card-body">
        <h4 class="card-title">{props.tieude}</h4>
        <p class="card-text">{props.text}</p>
      </div>
    </div>
  )
}
//Cach 2
class NumberTwo extends Component {
  render() {
    return (
      <div class="card">
        <img class="card-img-top" src={this.props.image} alt="Card image cap" />
        <div class="card-body">
          <h4 class="card-title">{this.props.tieude}</h4>
          <p class="card-text">{this.props.text}</p>
        </div>
      </div>
    );
  }
}

class One extends Component {
  render() {
    return (
      <div>
        <div class="row">
          <NumberOne image="http://placehold.it/700x300" tieude="Mot cai j do" text="1525" />
          <NumberOne image="http://placehold.it/700x300" tieude="asdasdasd" text="123123" />
        </div>
        <div class="row">
          <NumberTwo image="http://placehold.it/700x300" tieude="wwww" text="3434" />
          <NumberTwo image="http://placehold.it/700x300" tieude="wwwww" text="34555" />
        </div>
      </div>
    );
  }
}


//map
const so = [1, 2, 3, 4, 5, 6, 7];
const so1 = so.map((x) => {
  return <div>
    <li>
      {x*2}
    </li>
  </div>
})



function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

      </header> */}
      <One/>
      {so1}
    </div>
  );
}

export default App;
