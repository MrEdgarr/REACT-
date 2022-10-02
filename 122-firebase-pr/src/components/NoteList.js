import React, { Component } from 'react'
import { noteData } from "./firebaseConnect";
import { child, onValue, push, ref, set } from 'firebase/database';
import NoteItem from './NoteItem';



export default class NoteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataFirebase: []
        }
    }

    componentWillMount() {
        onValue(ref(noteData, 'post/'), (snapshot) => {
            const data = snapshot.val();
            // console.log(data);


            var arrayData = [];
            snapshot.forEach((childSnapshot) => {

                const childKey = childSnapshot.key;
                const noteTitle = childSnapshot.val().noteTitle;
                const noteContent = childSnapshot.val().noteContent;
                // console.log("1-------" + childKey);
                // console.log("2-------"+JSON.stringify(childData));

                arrayData.push({
                    id: childKey,
                    noteTitle: noteTitle,
                    noteContent: noteContent
                })
            })

            this.setState({
                dataFirebase: arrayData
            });
        })
    }
    getData = () => {
        return this.state.dataFirebase.map((value, key) => {
            console.log();
            return (
                <NoteItem key={key}
                    i={key}
                    noteTitle={value.noteTitle}
                    noteContent={value.noteContent}

                    note={value}
                />
            )
        })
    }

    render() {

        return (
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {
                        this.getData()
                    }
                </div>
            </div>
        )
    }
}
