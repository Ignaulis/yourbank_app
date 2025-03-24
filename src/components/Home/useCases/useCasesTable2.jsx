import { hash } from "../../../api/functions";

export default function UseCasesTable2({data}) {

    return(
        <div className="usecases-wrap">
            <span>{data.head}</span>
            <p>{data.text}</p>
            <div className="proc">
                <div className="line">
                    <span>{data.p1}</span>
                    <p>{data.t1}</p>
                </div>
                <div className="line">
                    <span>{data.p2}</span>
                    <p>{data.t2}</p>
                </div>
                <div className="line">
                    <span>{data.p3}</span>
                    <p>{data.t3}</p>
                </div>
            </div>
            <button onClick={() => hash('#login')}>Learn More</button>
        </div>
    );
}