import React, { useState } from "react";
import axios from 'axios';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:27017/api/auth/login',{
                email,
                password,
            });
            localStorage.setItem('token', response.data.token);
            alert('Login Success');
        }
        catch(error)
        {
            alert('Login Failed');
        }
    };
    return (
        <div className="container bg-success row">
            <div className="col-md-6">
            <h2>Login to Your Account</h2>
            <form onSubmit={handlesubmit}>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control" />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required  className="form-control" />
                <button type="submit">Login</button>
            </form>
            </div>
        </div>
    );
}


export default Login;