export const CANDIDATELOGIN="CANDIDATELOGIN"
export const CANDIDATELOGOUT="CANDIDATELOGOUT"

export function candidateLogin(candidate){
    return{
        type: CANDIDATELOGIN,
        candidate: candidate
    }
}

export function candidateLogout(){
    return{
        type: CANDIDATELOGOUT,
        candidate: {id:0,email:"",password:"",firstName:"",lastName:"",birthDay:"",candidateImage:""}
    }
}
