import React from 'react'

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>Lama Chat</span>
                <span className='title'>Login</span>
                <form>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Sign in</button>
                </form>
                <p>Dont have an account? Register</p>
            </div>
        </div>
    )
}

export default Login