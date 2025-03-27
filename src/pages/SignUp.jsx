import Testimonial from "../components/Home/testimonial/testimonial";
import SignUpCard from "../components/Login-signup/SignUpCard";

export default function SignUp() {
    return (
        <>
            <div className="signup-con">
                <SignUpCard />
            </div>
            <Testimonial />
        </>
    )
}