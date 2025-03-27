import Header from "../../Header";
import ValuesCard from "./ValuesCard";

export default function Values() {
    return (
        <div className="values-container">
            <Header
                name={'Our'}
                nameGreen2={'Values'}
                para={'At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.'}
            />
            <div className="values-cards">
                <ValuesCard />
            </div>
        </div>

    );
}