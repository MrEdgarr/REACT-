import { noteData } from "./firebaseConnect";
import { child, onValue, push, ref, remove, set, update } from 'firebase/database';


var redux = require('redux');


const noteInitialState = {
    isEdit: false,
    editItem: {}
}
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            const newPostKey = push(child(ref(noteData), 'post/')).key;
            // const postListRef = ref(noteData, 'post');
            // const newPostRef = push(postListRef);


            set(ref(noteData, '/post/' + newPostKey), {
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            })
                .then(() => {
                    console.log(JSON.stringify(action.getItem));
                })
                .catch((error) => {
                    console.log(error);
                });
            return state

        case "CHANGE_EDIT_STATUS":
            return { ...state, isEdit: !state.isEdit }
        case "CHANGE_ADD_STATUS":
            return { ...state, isAdd: !state.isAdd }

        case "GET_EDIT_DATA":
            return { ...state, editItem: action.editObject }


        case "SET_EDIT":
            const postData = {
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            }
            const updates = {};
            updates['/post/' + action.getItem.id] = postData;
            update(ref(noteData), updates);

            console.log("du lieu sua la " + JSON.stringify(action.getItem));
            return { ...state, editItem: {} }
        case "DELETE":
            remove(ref(noteData, 'post/' + action.deleteID))
            console.log("da xoa thanh cong " + action.deleteID);
            return state
        default:
            return state
    }
}


var store = redux.createStore(allReducer)

store.subscribe(function () {
    console.log(JSON.stringify(store.getState()));
})

export default store;