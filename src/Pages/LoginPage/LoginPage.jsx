import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Corrected import
import { auth } from 'FirebaseConfig'; // Corrected import

export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState(''); // Corrected variable name

    const handleSubmit = (e) => {
        e.preventDefault();
        // Use createUserWithEmailAndPassword from auth object
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                console.error(error);
                console.log(error.message); // Corrected error.message
                console.log(error.code); // Corrected error.code
            });
    }

    return (
        <div className='container'>
            <h3>Sign In</h3>
            <p>Sign in to your account</p>
            <form className="inputForm" onSubmit={handleSubmit}>
                <label htmlFor='name'>Name</label> {/* Added label text */}
                <input
                    type="text"
                    name='name'
                    id='name'
                    value={name}
                    onChange={(e) => setName(e.target.value)} {/* Changed onSubmit to onChange */}
                />
                <label htmlFor='Email'>Email</label> {/* Added label text */}
                <input
                    type="text"
                    name='Email' {/* Corrected the name attribute */}
                    id='email' {/* Corrected the id attribute */}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label> {/* Added label text */}
                <input
                    type="password" {/* Changed the input type to password for the password field */}
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
