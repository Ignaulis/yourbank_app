import img1 from '../../assets/login-signin/icon (2).svg'
import gog from '../../assets/login-signin/icon Container (16).svg'
import fac from '../../assets/login-signin/icon Container (17).svg'
import apl from '../../assets/login-signin/icon Container (18).svg'
import imgcorner from '../../assets/hero/Abstract Design (3).svg'
import { useState } from 'react'

export default function LoginCard() {

    const [showPass, setShowPass] = useState(false)

    return (
        <div className="login-wrap">
            <div className="loginCard-con">
                <div className="logn-top">
                    <h3>Login</h3>
                    <span>Welcome back! Please log in to access your account.</span>
                </div>
                <div className="login-inputs">
                    <input type="text" placeholder='Enter your Email'/>
                    <div className="pass-input">
                        <input className='pass' type={showPass ? 'text' : 'password'} placeholder='Enter your Password'/>
                        <img src={img1} alt="" onClick={() => setShowPass(e => !e)}/>
                    </div>

                </div>
                <a href="#forget">Forgot Password?</a>

                <div className="login-bot">
                    <div className="login-buttons">
                        <button className="login">Login</button>
                        <button className="signup">Sign Up</button>
                    </div>
                    <span>Or Continue with</span>
                    <div className="socials">
                        <img src={gog} alt="" />
                        <img src={fac} alt="" />
                        <img src={apl} alt="" />
                    </div>
                </div>
                <img src={imgcorner} className='corner-img' alt="" />
            </div>
        </div>
    )
}