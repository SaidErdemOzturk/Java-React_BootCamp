export const LOGIN="LOGIN"
export const LOGOUT="LOGOUT"

export function login(user){
    return{
        type: LOGIN,
        user: user
    }
}

export function logout(){
    return{
        type: LOGOUT,
        user: {id:0,email:"",password:"",firstName:"",lastName:"",birthDay:""}
    }
}
