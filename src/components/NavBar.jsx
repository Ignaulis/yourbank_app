import logo from '../assets/hero/Logo.svg';
import { hash } from '../api/functions';
import hamb from '../assets/Button (2).svg'
import { useState, useEffect } from 'react';


export default function NavBar() {
    const [showHamb, setShowHamb] = useState(window.innerWidth);
    const [clickedHamb, setClickedHamb] = useState(false);

    useEffect(() => {
        const handleResize = () => setShowHamb(window.innerWidth <= 900);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <div className="nav-con">
            <div className="nav-wrap">
                <div className='nav-logo'>
                    <img src={logo} alt="logo" />
                </div>

                {
                    showHamb
                        ?
                        (
                            <img src={hamb} className='hamb' onClick={() => setClickedHamb(e => !e)} />
                        )
                        :
                        (
                            <div className="nav-content">
                                <div className='nav-btns'>
                                    <button onClick={() => hash('#')}>Home</button>
                                    <button onClick={() => hash('#careers')}>Careers</button>
                                    <button onClick={() => hash('#about')}>About</button>
                                    <button onClick={() => hash('#security')}>Security</button>
                                </div>
                                <div className='nav-sign'>
                                    <button onClick={() => hash('#signup')} className='sign'>Sign Up</button>
                                    <button onClick={() => hash('#login')} className='log'>Login</button>
                                </div>
                            </div>
                        )
                }

                {
                    clickedHamb
                        ?
                        (
                            <div className='nav-content-hamb'>
                                <div className='nav-btns'>
                                    <button onClick={() => hash('#')}>Home</button>
                                    <button onClick={() => hash('#careers')}>Careers</button>
                                    <button onClick={() => hash('#about')}>About</button>
                                    <button onClick={() => hash('#security')}>Security</button>
                                </div>
                                <div className='nav-sign'>
                                    <button onClick={() => hash('#signup')} className='sign'>Sign Up</button>
                                    <button onClick={() => hash('#login')} className='log'>Login</button>
                                </div>
                            </div>
                        )
                        :
                        ''

                        
                }


            </div>
        </div>
    );
}