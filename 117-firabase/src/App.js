import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { firebaseConnect } from './FirebaseConnect';
import firebase from 'firebase/compat/app';
import { getDatabase, ref, onValue, set, push, child, remove } from "firebase/database";


class App extends Component {
  pushData = () => {
    const db = getDatabase();

    // Tao mot key moi cho database
    const newPostKey = push(child(ref(db), 'post')).key;

    set(ref(db, 'post/' + newPostKey), {
      title: 'adwadad',
      name: 'aevfdv'
    })

    console.log('okkkkkkkkkkkkkkkkkkk');
  }


  removeData = (id) => {
    const db = getDatabase();

    // Xoa du lieu bang ham remove()
    remove(ref(db, 'post/' + id));
    
    console.log('aaaaaaaaa');
  }


  render() {
    // console.log(firebaseConnect);
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={() => this.pushData()}>
            click me
          </button>
          <button onClick={() => this.removeData('-N-b4sPULM-IOa5WZ1Dw')}>
            delete
          </button>
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


        </header>
      </div>
    );
  }
}


export default App;
