import { LOGIN,LOGOUT,UPDATE } from "../actions/userActions";
import { userItems } from "../initialValues/userItems";

const initialState={
    userItems:userItems
}

export default function userReducer(state=initialState,{type,user}){
    switch (type) {
        case LOGIN:
            localStorage.setItem('user',JSON.stringify(user))
        return{
            userItems:user
        }

        case UPDATE:
            localStorage.setItem('user',JSON.stringify(user))
        return{
            userItems:user
        }
        
        case LOGOUT:
            localStorage.removeItem('user')
            console.log(JSON.parse(localStorage.getItem("user")))
        return{
            userItems:{}
        }

        default:
            return state;
    }
    
}