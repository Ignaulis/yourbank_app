import img1 from '../../assets/login-signin/icon (2).svg'
import gog from '../../assets/login-signin/icon Container (16).svg'
import fac from '../../assets/login-signin/icon Container (17).svg'
import apl from '../../assets/login-signin/icon Container (18).svg'
import imgcorner from '../../assets/hero/Abstract Design (3).svg'
import { useState } from 'react'

export default function SignUpCard() {

    const [showPass, setShowPass] = useState(false);

    console.log(showPass);
    

    // const handleShowPass = () => {
    //     setShowPass(e => !e)
    // }
    return (
        <div className="signup-wrap">
            <div className="signUpCard-con">
                <div className="signUp-top">
                    <h3>Sign Up</h3>
                    <span>Join our community today! Create an account to unlock exclusive features and personalized experiences.</span>
                </div>
                <div className="signup-inputs">
                    <div className="names">
                        <input type="text" placeholder='Enter First Name' />
                        <input type="text" placeholder='Enter Last Name' />
                    </div>
                    <div className="email">
                        <input type="text" placeholder='Enter your Email' />
                        <div className='eye'>
                            <input type={showPass ? 'text' : 'password'} placeholder='Enter your Password' />
                            <img src={img1} alt="" onClick={() => setShowPass(e => !e)} />
                        </div>
                    </div>
                </div>

                <div className="signup-bot">
                    <div className="signup-buttons">
                        <button className="signup">Sign Up</button>
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