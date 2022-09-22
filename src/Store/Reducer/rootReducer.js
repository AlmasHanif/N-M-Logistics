import { combineReducers } from "redux";
import { cardsReducer } from "./serviceCardReducer";

const rootReducer = combineReducers({
    cardsReducer,
    
})

export default rootReducer;