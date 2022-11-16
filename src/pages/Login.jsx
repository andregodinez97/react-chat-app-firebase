import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { useNavigate, Link} from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {

    const [err, setErr] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const email = e.target[0].value;
        const password = e.target[1].value;
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")

        } catch (err) {
            console.log(err);
            setErr(true);
        }
    }


    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className='logo'>Lama Chat</span>
                <span className='title'>Login</span>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email' />
                    <input type="password" placeholder='Password' />
                    <button>Sign in</button>
                </form>
                {err && <span>Something went wrong</span>}
                <p>Dont have an account? <Link to="/register">Register</Link> </p>
            </div>
        </div>
    )
}

export default Login