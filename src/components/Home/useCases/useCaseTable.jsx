// // import imge from '../../../assets/hero/Abstract Design (2).svg';
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