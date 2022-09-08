export const LOGIN="LOGIN"
export const UPDATE="UPDATE"
export const LOGOUT="LOGOUT"

export function login(user){
    return{
        type: LOGIN,
        user: user
    }
}

export function update(user){
    return{
        type: UPDATE,
        user: user
    }
}

export function logout(){
    return{
        type: LOGOUT,
        user: {}
    }
}
