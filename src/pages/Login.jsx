import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Tanisha Socicore</span>
            <span className="title">Login</span>
            <form >
                <input type="text" placeholder="display name"/>
                <input type="email" placeholder="email"/>
                
                <button>Sign In</button>
            </form>
            <p>You don't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login