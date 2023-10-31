import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Corrected import
import { auth } from 'FirebaseConfig';
import { ToastContainer, toast } from 'react-toastify';




export function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');


    const handleGoogleLongin = () => {
        signInWithPopup(auth, provider).then(result => { })
    }



    const notify = (message) => {
        toast(message, {


            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: false,
            progress: undefined,
            them: 'dark'



        })
    }







    const handleSubmit = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                switch (error.code) {
                    case "auth/invalid-email":
                        notify("bad email")
                        break;
                    case "auth/weak-password":
                        notify("password should be atleast 6 characters")
                        break;
                    case "auth/emaill-already-in-use":
                        notify("User already exists")
                        break;
                    default:
                        notify(error.message)
                        break

                }
                console.log(error)
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
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor='Email'>Email</label>
                <input
                    type="text"
                    name='Email'
                    id='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='password'>Password</label> {/* Added label text */}
                <input
                    type="password"
                    name='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>


            <ToastContainer />
        </div>
    );
}
