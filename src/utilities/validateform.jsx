import {regexemail,regexpassword} from './regexs'






function validator(input){
    let errors={}    
    if(!input.password){
        errors.password="password is require"
    }else if(!regexpassword.test(input.password)){
        errors.password="Invalid password! Not number and symbol"
    }
    if(!input.email){
        errors.email="email is require"
    }else if(!regexemail.test(input.email)){
        errors.email="Invalid email! Must include an @ and .com"
    }
   return errors

}


export {validator}