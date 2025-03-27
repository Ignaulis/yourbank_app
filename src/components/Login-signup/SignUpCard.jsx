import img1 from '../../assets/login-signin/icon (2).svg'
import gog from '../../assets/login-signin/icon Container (16).svg'
import fac from '../../assets/login-signin/icon Container (17).svg'
import apl from '../../assets/login-signin/icon Container (18).svg'
import imgcorner from '../../assets/hero/Abstract Design (3).svg'
import { useState } from 'react'

export default function SignUpCard() {

    const [showPass, setShowPass] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignUp = () => {
        if(!validateEmail(email)) {
            alert('Incorrect email format!');
            return;
        }
        const newUser = {
            firstName,
            lastName,
            email,
            password,
        };

        let existingUsers = localStorage.getItem('users');
        existingUsers = existingUsers ? JSON.parse(existingUsers) : [];
        
        if (!Array.isArray(existingUsers)) {
            existingUsers = [];
        }
        
        existingUsers.push(newUser);
        
        localStorage.setItem('users', JSON.stringify(existingUsers));
        
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        alert('You signed up, now you can log in!')
        window.location.hash = '#login'
    };
    


    return (
        <div className="signup-wrap">
            <div className="signUpCard-con">
                <div className="signUp-top">
                    <h3>Sign Up</h3>
                    <span>Join our community today! Create an account to unlock exclusive features and personalized experiences.</span>
                </div>
                <div className="signup-inputs">
                    <div className="names">
                        <input type="text" placeholder='Enter First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        <input type="text" placeholder='Enter Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>
                    <div className="email">
                        <input type="text" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <div className='eye'>
                            <input type={showPass ? 'text' : 'password'} placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                            <img src={img1} alt="" onClick={() => setShowPass(e => !e)} />
                        </div>
                    </div>
                </div>

                <div className="signup-bot">
                    <div className="signup-buttons">
                        <button className="signup" onClick={handleSignUp}>Sign Up</button>
                        <button className="login">Login</button>
                    </div>
                    <span>Or Continue with</span>
                    <div className="socials">
                        <img src={gog} alt="" />
                        <img src={fac} alt="" />
                        <img src={apl} alt="" />
                    </div>
                </div>
                <img src={imgcorner} className='corner-img' alt=""/>
            </div>
        </div>
    )
}