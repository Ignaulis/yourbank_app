import mark from '../../../assets/home/icon.svg';


export default function TestimonialCard({ t, name }) {

    return (

        <div className="test-card">
            <img src={mark} alt="mark" />
            <p>{t}</p>
            <span>{name}</span>
        </div>
    );
}