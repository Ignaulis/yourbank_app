import Testimonial from "../components/Home/testimonial/testimonial";
import LoginCard from "../components/Login-signup/LoginCard";

export default function Login() {
    return (
        <>
            <div className="login-con">
                <LoginCard />
            </div>
            <Testimonial />
        </>
    )
}