import Header from "../../Header";
import BenefitsCard from "./BenefitsCard";

export default function Benefits() {
    return(
        <div className="benefits-con">
            <Header 
                name={'Our'}
                nameGreen2={'Benefits'}
                para={'At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.'}    
            />
            <div className="benefits-cards">
                <BenefitsCard />
            </div>
        </div>
    );
}