import { releases } from "../../../api/data";

export default function RealeasesCard() {

    return (
        <>
            {
                releases.map((i, k) => (
                    <div className="realeases-card" key={k}>
                        <img src={i.img } />
                        <span>{i.n}</span>
                        <div className="info">
                            <div className="info-span">Location: <span>{i.loc}</span></div>
                            <div className="info-span">Date: <span>{i.date}</span></div>
                        </div>
                        <p>{i.para}</p>
                    </div>
                ))
            }
        </>
    );
}