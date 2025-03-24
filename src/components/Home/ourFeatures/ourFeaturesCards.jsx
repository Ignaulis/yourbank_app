import arrow from '../../../assets/home/arrowside.svg';
import { OnlineBanking, FinancialTools, CustomerSupport } from '../../../api/data';

export default function OurFeaturesCards({ data }) {

    return (
        <div className="feautures-con">
            {
                data.map((i, k) => (

                    <div className="features-card" key={k}>
                        <div className="card-top">
                            <span>{i.head}</span>
                            <img src={arrow} alt="arrow" />
                        </div>
                        <div className="card-bot">
                            <p>{i.text}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export { OnlineBanking, FinancialTools, CustomerSupport }