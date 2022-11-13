import React from 'react'
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className='auth'>
        <h1>Login</h1>
        <form1>
            <input type = "text" placeholder='username' />
            <input type = "password" placeholder = 'password' />
            <button >Log in</button>
            <p>This is an Error!</p>
            <span>Don't have an Account? <Link to= "/register">Register</Link>
            </span>
        </form1>
    </div>

  )
}

export default Login