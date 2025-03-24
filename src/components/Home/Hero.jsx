import check from '../../assets/hero/check.svg'
import HeroCard from './HeroCard';
import { hash } from '../../api/functions';

export default function Hero() {

    return (
        <div className="hero-wrap">
            <div className="hero-text">
                <div className='div1'>
                    <img src={check} alt="check" />
                    <p>No LLC Required, No Credit Check.</p>
                </div>
                <div>
                    <h2>Welcome to YourBank
                        Empowering Your <span>Financial Journey</span></h2>
                    <p>At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.</p>
                </div>
                <button onClick={() => hash('#signup')}>Open Account</button>
            </div>
            <div className="hero-table">
                <HeroCard />
            </div>
        </div>
    );
}