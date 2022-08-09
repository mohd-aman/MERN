import initialState from "./initialState.json"

export default function authReducer(state = initialState.auth,action){
    switch(action.type){
        case "LOGOUT":
            return{
                isAuth:false,
                user:null
            }
        case "LOGIN":
            return{
                ...state,
                ...action.user
            }
        default:
            return state
    }
}