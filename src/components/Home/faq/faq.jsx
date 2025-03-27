import Header from "../../Header";
import FaqCard from "./faqCard";
import { useState } from "react";


export default function Faq() {
    const [showAll, setShowAll] = useState(false);

    const toggle = () => {
        setShowAll(e => !e)
    }

    return (

        <div className="faq-wrap">
            <Header 
                nameGreen1={'Frequently'}
                name={'Asked Questions'}
                para={'Still you have any questions? Contact our Team via support@yourbank.com'}
            />
           <div className={`faq-cards ${showAll ? 'expand' : ''}`}>
                <FaqCard showAll={showAll}/>
            </div>
            <div className="faq-btn">
                <button onClick={toggle}>{showAll ? "Show Less FAQ’s ⬆" : "Load All FAQ’s ⬇"}</button>
            </div>
        </div>
    );
}