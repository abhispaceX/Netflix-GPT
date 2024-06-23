

function validation(email,password) {
  const isEmailIdValid= /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
  const isPasswordVaid= /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)
  if(!isEmailIdValid){
    return "Invalid Email"
  }
  if(!isPasswordVaid){
    return "Invalid Password"
  }
  return null
}

export default validation
