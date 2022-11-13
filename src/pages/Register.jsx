import React from 'react'
import {Link} from "react-router-dom";
const Register = () => {
  return (
    <div className='auth'>
        <h1>REGISTER - NGO</h1>
        <form>
            <input required type = "text" placeholder='USERNAME' />
            <input required type = "email" placeholder='MAIL' />
            <input required type = "password" placeholder = 'PASSWORD' />
            <input required type = "password" placeholder='CONFIRM PASSWORD' />
            {/* donator type */}
            <input  type = "text" placeholder='FIRM NAME (for organisations)' />  
            <input  type = "text" placeholder = 'NAME (for individuals)' />
            <input required type = "text" placeholder='address' />
            <input required type = "email" placeholder='email' />
            <input required type = "password" placeholder = 'password' />
            <input required type = "text" placeholder='username' />
            <input required type = "email" placeholder='email' />
            <input required type = "password" placeholder = 'password' />
            <input required type = "text" placeholder='username' />
            <input required type = "email" placeholder='email' />
            <input required type = "password" placeholder = 'password' />
            <button >Register</button>
            <p>This is an Error!</p>
            <span>Already have an Account? <Link to= "/login">Login</Link>
            </span>
        </form>
    </div>

  )
}

export default Register
