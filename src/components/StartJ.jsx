import { hash } from "../api/functions";
import img from '../assets/hero/Abstract Design (2).svg';

export default function StartJ() {

    return (
        <div className="start-wrap">
            <div className="start-con">
                <img src={img} alt="" />
                <div className="start-left">
                    <span>Start your financial journey with <span className="green">YourBank today!</span></span>
                    <p>Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service</p>
                </div>
                <button onClick={() => hash('#signup')}>Open Account</button>
            </div>
        </div>
    );
}