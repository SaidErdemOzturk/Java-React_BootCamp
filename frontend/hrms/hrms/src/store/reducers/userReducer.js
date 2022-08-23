import { LOGIN, LOGOUT } from "../actions/userActions";
import { userItems } from "../initialValues/userItems";

const initialState={
    userItems:userItems
}

export default function userReducer(state=initialState,{type,user}){
    switch (type) {
        case LOGIN:
        return{
            userItems:user
        }
        
        case LOGOUT:
        return{
            userItems:user
        }

        default:
            return state;
    }
    
}