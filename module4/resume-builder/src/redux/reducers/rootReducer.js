import documentReducer from "./documentReducer";
import {combineReducers} from "redux"
import contactReducer from "./contactReducer";
import educationReducer from "./educationReducer";

const rootReducer = combineReducers({
    documentReducer:documentReducer,
    contactReducer:contactReducer,
    educationReducer:educationReducer
})

export default rootReducer