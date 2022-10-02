import logo from './logo.svg';
import './App.css';
import News from './News';
import { connect } from 'react-redux';
import React, { Component } from 'react'

class App extends Component {
  render() {
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
        {this.props.dulieu}

        <News />
      </div>
    )
  }
}

/*
Hàm mapStateToProps là một bộ lọc (filter) sử dụng để lấy (select) những thứ trong cái thùng chứa mà component yêu cầu.

Những thứ được select trở thành properties của component. 

Nhưng mapStateToProps() thôi là chưa đủ, bởi vì hàm này chỉ lấy được những thứ được yêu cầu trong thùng chứa mà không biết được thùng chứa đó nằm ở đâu. 

connect() sẽ làm điều còn thiếu, hàm này biết vị trí của thùng chứa và truyền (pass) nó vào hàm mapStateToProps. 

Vì vậy, component có thể lấy được chính xác những gì nó cần.
*/

const mapStateToProps = (state, ownProps) => {
  return {
    dulieu: state.num,
  }
}


export default connect(mapStateToProps)(App);
