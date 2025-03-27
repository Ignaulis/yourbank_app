import { useState } from "react";
import OurFeaturesCards, {OnlineBanking, FinancialTools, CustomerSupport} from "./ourFeaturesCards";
import Header from "../../Header";

export default function OurFeatures() {

    const [activeSection, setActiveSection] = useState('OnlineBanking')

    const sectionData = {
        OnlineBanking, 
        FinancialTools, 
        CustomerSupport
    }

    return(

        <div className="features-wrap">
            <Header 
                name={'Our'}
                nameGreen2={'Features'}
                para={'Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience'}
            />
            <div className="features-cards">
                <div className="features-buttons">
                    {
                        Object.keys(sectionData).map((section) => (
                            <button
                                key={section}
                                className={activeSection === section ? 'active' : ''}
                                onClick={() => setActiveSection(section)}
                            >{section.replace(/([A-Z])/g, " $1").trim()}</button>
                        ))
                    }
                </div>
                <div className="cards">
                    <OurFeaturesCards data={sectionData[activeSection]} />
                </div>
            </div>
        </div>
    );
}