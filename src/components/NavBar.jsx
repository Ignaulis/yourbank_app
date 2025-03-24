import logo from '../assets/hero/Logo.svg';
import { hash } from '../api/functions';


export default function NavBar() {

    return (
        <div className="nav-con">
            <div className="nav-wrap">
                <div className='nav-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav-btns'>
                    <button onClick={() =>hash('#')}>Home</button>
                    <button onClick={() =>hash('#careers')}>Careers</button>
                    <button onClick={() => hash('#about')}>About</button>
                    <button onClick={() => hash('#security')}>Security</button>
                </div>
                <div className='nav-sign'>
                    <button onClick={() => hash('#signup')} className='sign'>Sign Up</button>
                    <button onClick={() => hash('#login')} className='log'>Login</button>
                </div>
            </div>
        </div>
    );
}