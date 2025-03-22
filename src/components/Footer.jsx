import logo from '../assets/hero/Logo.svg';
import facebook from '../assets/footer/facebook.svg';
import linked from '../assets/footer/linked.svg';
import location from '../assets/footer/location.svg';
import mail from '../assets/footer/mail.svg';
import tel from '../assets/footer/tel.svg';
import twitter from '../assets/footer/twitter.svg';

export default function Footer() {
    

    return(

        <div className="footer-wrap">
            <div>
                <img src={logo} alt="logo" />
            </div>
            <div className='footer-btns'>
                <button>Home</button>
                <button>Careers</button>
                <button>About</button>
                <button>Security</button>
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
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={linked} alt="linkedin" />
                </div>
                <div>
                    <p>YourBank All Rights Reserved</p>
                </div>
                <div className='footer-end-end'>
                    <a href='#' className='border'>Privacy Policy</a>
                    <a href='#'>Terms of Service</a>
                </div>
            </div>
        </div>
    );
}