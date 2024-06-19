
export const checkValidateData = (email, password, uname) =>{

const isEmailValid =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
const isPasswordValid =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
const fullName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/.test(uname)

if(!isEmailValid) return "Please Enter Valid Email"
if(!isPasswordValid)return "Please Enter Valid Password"
if(!fullName) return "Please Enter Valid Name"
return null;
}