import logo from '../assets/hero/Logo.svg';

export default function NavBar() {

    return (
        <div className="nav-con">
            <div className="nav-wrap">
                <div className='nav-logo'>
                    <img src={logo} alt="logo" />
                </div>
                <div className='nav-btns'>
                    <button>Home</button>
                    <button>Careers</button>
                    <button>About</button>
                    <button>Security</button>
                </div>
                <div className='nav-sign'>
                    <button className='sign'>Sign Up</button>
                    <button className='log'>Login</button>
                </div>
            </div>
        </div>
    );
}