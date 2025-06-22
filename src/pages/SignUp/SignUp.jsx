import React, { useState } from 'react';
import './SignUp.css'

const SignUp = () => {

    const [user, setUser] = useState({
        username: "",
        password: "",
        age: 0
    });

    const [message, setMessage] = useState("");

    const handleLogin = () => {
        if (user.username === "" || user.password === "" || user.age === 0) {
            setMessage('Въведи всички полета');
        } else {
            if(user.age <= 5) {
                 setMessage(`Въведете истинските си години`);
            }else {
                if(user.name.length >= 10) {
                    setMessage(`Въведете истинското си име!`);
                }else {
                    setMessage(`Добре дошъл, ${user.username}`);
                }
               
            }
            
        }
    }

    return (
        <div className="container">
            <div className="form-wrapper">
                <h2>Sign In</h2>
                <div className="form-elements">
                    <input 
                        onChange={(event) => setUser({ ...user, username: event.target.value })} 
                        type="text" 
                        placeholder="Username" 
                        className="input-field"
                    />
                    <input 
                        onChange={(event) => setUser({ ...user, password: event.target.value })} 
                        type="password" 
                        placeholder="Password" 
                        className="input-field"
                    />
                    <input 
                        onChange={(event) => setUser({ ...user, age: Number(event.target.value) })} 
                        type="number" 
                        placeholder="Age" 
                        className="input-field"
                    />
                    <button 
                        onClick={handleLogin} 
                        className="submit-button"
                    >
                        Sign In
                    </button>
                    <div className="message">{message}</div>
                </div>
            </div>
        </div>
    );

}

export default SignUp;