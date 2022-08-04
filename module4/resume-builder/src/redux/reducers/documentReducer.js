import initialState from "./initialState.json"


export default function documentReducer(state = initialState.document,action){
    switch(action.type){
        case "SET_SKIN":
            return{
                ...state,
                document:action.document
            }
        case "UPDATE_SKIN":
            return{
                ...state,
                document:action.document
            }
        default:
            return state;
    }
}