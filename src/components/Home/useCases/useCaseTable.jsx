import icon1 from '../../../assets/home/cases/Icon Container.svg';
import icon2 from '../../../assets/home/cases/Icon Container (1).svg';
import icon3 from '../../../assets/home/cases/Icon Container (2).svg';
import icon4 from '../../../assets/home/cases/Icon Container (3).svg';
import icon5 from '../../../assets/home/cases/Icon Container (4).svg';
import icon6 from '../../../assets/home/cases/Icon Container (5).svg';
import icon7 from '../../../assets/home/cases/Icon Container (6).svg';
import icon8 from '../../../assets/home/cases/Icon Container (7).svg';
// import imge from '../../../assets/hero/Abstract Design (2).svg';

const table1 = [
    { icon: icon1, text: 'Managing Personal Finances' },
    { icon: icon2, text: 'Saving for the Future' },
    { icon: icon3, text: 'Homeownership' },
    { icon: icon4, text: 'Education Funding' },
];
const table2 = [
    { icon: icon5, text: 'Startups and Entrepreneurs' },
    { icon: icon6, text: 'Cash Flow Management' },
    { icon: icon7, text: 'Business Expansion' },
    { icon: icon8, text: 'Payment Solutions' },
];

export default function UseCasesTable({ data }) {

    return (
        <div className="usecases-table">
            <div className="table-con">
                {/* <img className='imge1' src={imge} alt="" /> */}

                {
                    data.map((item, key) => (
                        <div className="in-table" key={key}>
                            <img src={item.icon} />
                            <span>{item.text}</span>
                        </div>

                    ))
                }
            </div>

        </div>
    );
}

export {table1, table2};