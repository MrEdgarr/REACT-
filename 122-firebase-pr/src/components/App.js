import React, { Component } from 'react';
import Nav from "./Nav";
import NoteList from "./NoteList";
import NoteForm from "./NoteForm";
import { noteData } from './firebaseConnect'
import { child, onValue, push, ref, set } from 'firebase/database';
import { connect } from 'react-redux';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }
  showForm = () => {
    if (this.props.isEdit) {
      return <NoteForm />
    }
  }
  // addData = (item) => {
  //   const newPostKey = push(child(ref(noteData), 'post/')).key;
  //   set(ref(noteData, '/post/' + newPostKey), {
  //     noteTitle: item.noteTitle,
  //     noteContent: item.noteContent
  //   })
  //     .then(() => {
  //       console.log();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    // onValue(ref(noteData, 'post/'), (snapshot) => {
    //   const data = snapshot.val();
    //   console.log(data);
    // });
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <NoteList />

            {
              this.showForm()
            }
            {/* <NoteForm  
            getData={(item) => this.addData(item)}
            /> */}
          </div>
        </div>
      </div>
    )
  }
}


const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit
  }
}


export default connect(mapStateToProps)(App)