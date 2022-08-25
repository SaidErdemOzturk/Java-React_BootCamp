export const EMPLOYERLOGIN="EMPLOYERLOGIN"
export const EMPLOYERLOGOUT="EMPLOYERLOGOUT"

export function employerLogin(employer){
    return{
        type: EMPLOYERLOGIN,
        employer: employer
    }
}

export function employerLogout(){
    return{
        type: EMPLOYERLOGOUT,
        employer: {id:0,email:"",password:"",companyName:"",webSite:"",phoneNumber:"",employerImage:""}
    }
}
