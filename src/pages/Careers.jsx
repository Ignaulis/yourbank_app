import Benefits from "../components/Careers/benefits/Benefits";
import JobOpenings from "../components/Careers/JobOpenings/JobOpenings";
import Values from "../components/Careers/values/Values";
import Welcome from "../components/Careers/Welcome";
import Faq from "../components/Home/faq/faq";
import StartJ from "../components/StartJ";

export default function Careers() {
    return (
        <>
            <div className="careers-con">
                <Welcome />
                <Values />
                <Benefits />
                <JobOpenings />
            </div>
            <Faq />
            <StartJ />
        </>
    );
}