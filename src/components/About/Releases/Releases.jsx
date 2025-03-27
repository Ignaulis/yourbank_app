import Header from "../../Header";
import RealeasesCard from "./ReleasesCard";


export default function Realeases() {

    return (

        <div className="realeases-con">
            <Header 
                nameGreen1={'Press Releases'}
                para={'Stay updated with the latest happenings and exciting developments at YourBank through our press releases.'}
            />
            <div className="realeases-cards">
                <RealeasesCard />
            </div>
        </div>
    );
}