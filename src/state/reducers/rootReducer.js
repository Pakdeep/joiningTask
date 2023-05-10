import { combineReducers } from "redux";
import displayReducer from "./displayReducer";
import searchReducer from "./searchReducer";





const rootReducer=combineReducers({
    search:searchReducer,
    display:displayReducer,
})

export default rootReducer;