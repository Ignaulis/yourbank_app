import FaqCard from "./faqCard";
import { useState } from "react";


export default function Faq() {
    const [showAll, setShowAll] = useState(false);

    const toggle = () => {
        setShowAll(e => !e)
    }


    return (



        <div className="faq-wrap">
            <div className="faq-top">
                <span><span className="green">Frequently</span> Asked Questions</span>
                <p>Still you have any questions? Contact our Team via support@yourbank.com</p>
            </div>
            <div className="faq-cards">
                <FaqCard showAll={showAll} />
            </div>
            <div className="faq-btn">
                <button onClick={toggle}>{showAll ? "Show Less FAQ’s ▲" : "Load All FAQ’s ▼"}</button>
            </div>
        </div>
    );
}