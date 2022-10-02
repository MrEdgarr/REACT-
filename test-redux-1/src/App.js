import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  render() {
    
    // var  a = [1,2,3,4,5];
    // var  b = [a,6,7,8,9];
    // var  c = [...a,6,7,8,9];

    // console.log(b);
    // console.log(c);

    /* 
    Actions đơn giản là các events
    
    Reducers  là các function nguyên thủy chúng lấy state hiện tại của app, thực hiện một action và trả về một state mới

    Store lưu trạng thái ứng dụng và nó là duy nhất trong bất kỳ một ứng dụng Redux nào

    action -> reducer -> store -> view
    */
    

    var redux = require('redux');

    var oldState = {
      num: ["a", "b", "c"],
      eidtStatus: true
    }
    var reducer1 = (state = oldState, action) => {
      switch (action.type) {
        case "CHANGE_EDIT_STATUS":
          return { ...state, eidtStatus: !state.eidtStatus }


        case "ADD_NEW":
          return { ...state, num: [...state.num, action.newItem] }

        case "DELETE":
          return { ...state, num: state.num.filter((value, i) => i !== action.number) }


        default:
          return state; // muc dich cua reducer la tra ra cai state moi 

      }

    }

    /*
    createStore(myReducer): Khởi tạo store

    getState(): Giúp lấy ra state hiện tại

    dispatch(action): Thực hiện gọi 1 action

    subscrible(listener): Luôn lắng nghe xem có thay đổi gì ko rồi ngay lập tức cập nhật ra View
    */

    //Khoi tao store
    var store1 = redux.createStore(reducer1);

    store1.subscribe(() => {
      console.log(JSON.stringify(store1.getState()));
    })


    // {type: "CHANGE_EDIT_STATUS"} : Thuc hien cong viec thay doi status
    // luc nay action o tren reducer1 chinh la action nay
    store1.dispatch({ type: "CHANGE_EDIT_STATUS" })
    // console.log(store1.getState());

    store1.dispatch({
      type: "ADD_NEW",
      newItem: "Tai nghe"
    })

    // console.log(store1.getState());

    store1.dispatch({
      type: "DELETE",
      number: 0
    })
    // console.log(store1.getState());



    return (
      <div className="App">
        <header className="App-header">
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
