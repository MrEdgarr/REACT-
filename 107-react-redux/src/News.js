import React, { Component } from 'react';
import { connect } from 'react-redux';
/*
    ket noi vs STORE
*/
class News extends Component {
    // 
  // userEditStatusInStore = () => {
  //   var { dispatch } = this.props;
  //   dispatch({ type: "CHANGE_EDIT_STATUS" })
  // }
  render() {
    return (
      <div>
        <h2>
          Day la file moi
        </h2>
        <button onClick={() => this.props.userEditStatusInStore()}>Click</button>
        <button onClick={() => this.props.addNew()}>ADdNEW</button>
        <button onClick={() => this.props.delete()}>delete</button>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    editStatus: state.myStatus
  }
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userEditStatusInStore: () => {
      dispatch({type:"CHANGE_EDIT_STATUS"})
    },
    addNew:()=>{
      dispatch({type:"ADD_NEW", newItem:Math.random()})
    },
    delete:()=>{
      dispatch({type:"DELETE"})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(News);
