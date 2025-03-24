import { faqData } from "../../../api/data";

export default function FaqCard({ showAll }) {

    const displayAll = showAll ? faqData : faqData.slice(0, 4);

    return (
        <>
            {
                displayAll.map((i, k) => (
                    <div className={showAll ? 'faq-card' : 'faq-card faq-card-cl'} key={k}>

                        <span>{i.top}</span>
                        <p>{i.text}</p>
                    </div>

                ))
            }
        </>
    );
}

