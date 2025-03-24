const info1 = {
    head: 'For Individuals',
    text: 'For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers',
    p1: '78%',
    t1: 'Secure Retirement Planning',
    p2: '63%',
    t2: 'Manageable Debt Consolidation',
    p3: '91%',
    t3: 'Reducing financial burdens'

}
const info2 = {
    head: 'For Business',
    text: ' For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them',
    p1: '65%',
    t1: 'Cash Flow Management',
    p2: '70%',
    t2: 'Drive Business Expansion',
    p3: '45%',
    t3: 'Streamline payroll processing'

}

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
            <button>Learn More</button>
        </div>
    );
}

export {info1, info2}