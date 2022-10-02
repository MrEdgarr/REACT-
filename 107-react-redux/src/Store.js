import editStatusReducer from './reducers/editStatusReducer';
import numReducer from './reducers/numReducer';

var redux = require('redux');
// var initialState = {
//     num: ["Nguyen Van A", "Nguyen Van B", "Nguyen Van c", "Nguyen Van D"],
//     myStatus: true
// }

// var myReducer = (state = initialState, action) => {
//     switch (action.type) {

//         case "CHANGE_EDIT_STATUS":
//             return { ...state, myStatus: !state.myStatus }

//         case "ADD_NEW":
//             return { ...state, num: [...state.num, action.newItem] }

//         case "DELETE":
//             return { ...state, num: state.num.filter((value, i) => i !== action.number) }

//         default:
//             return state
//     }
// }





const allReducers = redux.combineReducers({
    num: numReducer,
    editStatus: editStatusReducer
})



var myStore = redux.createStore(allReducers);



myStore.subscribe(() => {
    console.log(JSON.stringify(myStore.getState()));
})

// myStore.dispatch({ type: "CHANGE_EDIT_STATUS" })

// myStore.dispatch({
//     type: "ADD_NEW",
//     newItem: "Nguyen Van E"
// })

// myStore.dispatch({
//     type: "DELETE",
//     number: 0
// })

export default myStore;