import AboutHero from "../components/About/AboutHero/AboutHero";
import Mission from "../components/About/Mission/Mission";
import Realeases from "../components/About/Releases/Releases";

export default function About() {
    return (
        <div className="about-con">
            <AboutHero />
            <Mission />
            <Realeases />
        </div>
    );
}