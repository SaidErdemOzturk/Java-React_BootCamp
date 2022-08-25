

import { EMPLOYERLOGIN,EMPLOYERLOGOUT } from "../actions/employerActions";
import { employerItems } from "../initialValues/employerItems";

const initialState={
    employerItems:employerItems
}

export default function employerReducer(state=initialState,{type,employer}){
    switch (type) {
        case EMPLOYERLOGIN:
        return{
            employerItems:employer
        }
        
        case EMPLOYERLOGOUT:
        return{
            employerItems:{id:0,email:"",password:"",companyName:"",webSite:"",phoneNumber:"",employerImage:""}
        }

        default:
            return state;
    }
    
}