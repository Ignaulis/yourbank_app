import Faq from "../components/Home/faq/faq";
import Protect from "../components/Security/Protect/Protect";
import SecurityHero from "../components/Security/SecurityHero";

export default function Security() {
    return (
        <>
                <div className="security-con">
            <SecurityHero />
            <Protect />
        </div>
        <Faq />
        </>

    );
}