import React, { useState } from "react";
import axios from 'axios';

function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
        try{
            await axios.post('http://localhost:27017/api/auth/register',{
                name,
                email,
                password,
            });
            alert('User registred successfully');
        }
        catch(error){
            alert("Registered Faild")
        }
    };

    return(
        <div>
            <h2>Signup</h2>
            <form onSubmit={handlesubmit}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;