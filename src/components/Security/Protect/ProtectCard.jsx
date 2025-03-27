import { security } from "../../../api/data";

export default function ProtectCard() {

    return(
        <>
            {
                security.map((i,k) => (
                    <div key={k} className="protect-card">
                        <div className="card-top">
                            <img src={i.img} alt="" />
                            <span>{i.n}</span>
                        </div>
                        <div className="card-bot">
                            <p>{i.para}</p>
                        </div>
                    </div>
                ))
            }
        </>

    );
}