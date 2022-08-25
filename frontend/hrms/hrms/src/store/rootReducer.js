//stateleri topladığımız yer

import { combineReducers } from "redux";
import candidateReducer from "./reducers/candidateReducer";
import employerReducer from "./reducers/employerReducer";

const rootReducer = combineReducers({
    candidate : candidateReducer,
    employer : employerReducer
})

export default rootReducer;