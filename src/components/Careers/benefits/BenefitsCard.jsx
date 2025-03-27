import { benefits } from "../../../api/data";

export default function BenefitsCard() {
    return (
        <>
            {
                benefits.map((i, k) => (
                    <div className="benefits-card" key={k}>
                        <div className="card-top">
                            <img src={i.img} />
                            <span>{i.n}</span>
                        </div>
                        <p>{i.p}</p>
                    </div>
                ))
            }
        </>
    );
}