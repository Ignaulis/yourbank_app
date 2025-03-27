import suitcase from '../../../assets/careers/icon (1).svg'
import { jobopenings } from '../../../api/data';

export default function JobOpeningsCard() {

    return (

        <>
            {
                jobopenings.map((i, k) => (
                    <div className="jobopening-card" key={k}>
                        <div className='jobopening-head'>
                            <h3>{i.n}</h3>
                            <div className='jobopening-location'>
                                <div>
                                    <span>Location: <span>{i.loc}</span></span>
                                </div>
                                <div>
                                    <span>Department: <span>{i.dep}</span></span>
                                </div>


                            </div>
                        </div>
                        <div className='aboutthisjob'>
                            <span>About This Job</span>
                            <p>{i.about}</p>
                        </div>
                        <div className='jobopening-req'>
                            <span>Requirements & Qualifications</span>

                                {
                                    i.req.map((req, key) => (
                                        <div className='req-post' key={key}>
                                            <img src={suitcase} alt="suitcase" />
                                            <span>{req}</span>
                                        </div>
                                    ))}


                        </div>
                        <div className='btn'><button>Apply Now</button></div>

                    </div>
                ))
            }

        </>

    );
}