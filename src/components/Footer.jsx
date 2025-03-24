import logo from '../assets/hero/Logo.svg';
import facebook from '../assets/footer/facebook.svg';
import linked from '../assets/footer/linked.svg';
import location from '../assets/footer/location.svg';
import mail from '../assets/footer/mail.svg';
import tel from '../assets/footer/tel.svg';
import twitter from '../assets/footer/twitter.svg';
import { hash } from '../api/functions';

export default function Footer() {
    

    return(

        <div className="footer-wrap">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='footer-btns'>
                <button onClick={() => hash('#')}>Home</button>
                <button onClick={() => hash('#careers')}>Careers</button>
                <button onClick={() => hash('#about')}>About</button>
                <button onClick={() => hash('#security')}>Security</button>
            </div>
            <div className='footer-info'>
                <div>
                    <img src={mail} alt="mail" />
                    <p>hello@skillbirdge.com</p>
                </div>
                <div>
                    <img src={tel} alt="tel" />
                    <p>+91 91813 23 2309</p>
                </div>
                <div>
                    <img src={location} alt="location" />
                    <p>Somewhere in the World</p>
                </div>
            </div>
            <div className='footer-end'>
                <div className='footer-end-start'>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="facebook" /></a>
                    <a href="https://x.com/"><img src={twitter} alt="twitter" /></a>
                    <a href="https://www.linkedin.com/"><img src={linked} alt="linkedin" /></a>
                    
                </div>
                <div>
                    <p>YourBank All Rights Reserved</p>
                </div>
                <div className='footer-end-end'>
                    <a href='#privacy' className='border'>Privacy Policy</a>
                    <a href='#tos'>Terms of Service</a>
                </div>
            </div>
        </div>
    );
}