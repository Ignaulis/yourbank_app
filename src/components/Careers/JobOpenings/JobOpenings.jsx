import Header from "../../Header";
import JobOpeningsCard from "./JobOpeningsCard";

export default function JobOpenings() {
    return(
        <div className="jobopenings-con">
            <Header 
                nameGreen1={'Job Openings'}
                para={'Explore exciting job openings at YourBank, where we value talent, innovation, and a passion for customer service. Join our team and be part of shaping a brighter future in the banking industry'}
            />
            <div className="jobopenings-cards">
                <JobOpeningsCard />
            </div>
        </div>
    );
}