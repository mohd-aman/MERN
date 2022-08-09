import initialState from "./initialState.json"

export default function authReducer(state = initialState.auth,action){
    switch(action.type){
        case "LOGOUT":
            return{
                auth:{isAuth:false,user:null}
            }
        default:
            return state
    }
}