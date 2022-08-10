import { combineReducers } from "redux";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart:cartReducer
    //baika reducerleri de buraya ekliyoruz
})
export default rootReducer; 