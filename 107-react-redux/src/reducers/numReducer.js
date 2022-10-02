const numInitialState = ["Nguyen Van A", "Nguyen Van B", "Nguyen Van c", "Nguyen Van D"];
const numReducer = (state = numInitialState, action) => {
    switch (action.type) {

        case "ADD_NEW":
            return [...state, action.newItem]

        case "DELETE":
            return [state.filter((value, i) => i !== action.number)]
            
        default:
            return state
    }
}

export default numReducer;