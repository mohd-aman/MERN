import initialState from "./initialState.json"

export default function contactReducer(state = initialState.contact,action){
    switch(action.type){
        case "ADD_CONTACT":
            return{
                ...state,
                ...action.contact
            }
        default:
            return state
    }
}