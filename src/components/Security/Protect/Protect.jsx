import Header from "../../Header";
import ProtectCard from "./ProtectCard";

export default function Protect() {
    return(

        <div className="protect-con">
            <Header
                name={'How We'}
                nameGreen2={'Protect You'}
                para={'At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times'}
            />
            <div className="protect-cards">
                <ProtectCard />
            </div>
        </div>
    );
}