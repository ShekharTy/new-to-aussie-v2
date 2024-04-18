import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Password() {
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const verifyPassword = () => {
        const correctPassword = process.env.REACT_APP_SECRET_PASSWORD;
        if (password === correctPassword) {  
            navigate('/home'); 
        } else {
            alert('Incorrect Password!');
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="p-6 max-w-sm w-full bg-white rounded shadow-lg">
                <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4">Enter Password</h1>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    onClick={verifyPassword}
                    className="w-full bg-blue-500 text-white p-2 mt-4 rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </div>
        </div>
    );
}

export default Password;
