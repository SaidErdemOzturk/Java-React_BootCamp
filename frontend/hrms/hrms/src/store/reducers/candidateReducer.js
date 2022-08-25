

import { CANDIDATELOGIN,CANDIDATELOGOUT } from "../actions/candidateActions";
import { candidateItems } from "../initialValues/candidateItems";

const initialState={
    candidateItems:candidateItems
}

export default function candidateReducer(state=initialState,{type,candidate}){
    switch (type) {
        case CANDIDATELOGIN:
        return{
            candidateItems:candidate
        }
        
        case CANDIDATELOGOUT:
        return{
            candidateItems:{id:0,email:"",password:"",firstName:"",lastName:"",birthDay:"",candidateImage:""}
        }

        default:
            return state;
    }
    
}