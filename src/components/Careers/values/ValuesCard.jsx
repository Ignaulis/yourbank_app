import { values } from '../../../api/data'

export default function ValuesCard() {
    return (
        <>
            {
                values.map((i, k) => (
                    <div className="values-card" key={k}>
                        <h3>{i.n}</h3>
                        <p>{i.t}</p>
                    </div>
                ))}
        </>

    );
}