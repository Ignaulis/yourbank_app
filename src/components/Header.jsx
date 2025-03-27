export default function Header({ nameGreen1, nameGreen2, name, para, setShowIndividuals, showIndividuals, btn }) {

    return (
        <div className="header-wrap">
            <div className={!btn ? "header-text no-btn" : 'header-text'}>
                <h2>
                    <span className='green'>{nameGreen1}</span> {name} <span className='green'>{nameGreen2}</span>
                </h2>
                <span className='para'>{para}</span>
            </div>
            {btn &&
                (<div className="header-btns">
                    <button onClick={() => setShowIndividuals(true)} className={showIndividuals ? 'tog' : 'non'}>For Individuals</button>
                    <button onClick={() => setShowIndividuals(false)} className={showIndividuals ? 'non' : 'tog'}>For Businesses</button>
                </div>)
            }
        </div>
    );
}