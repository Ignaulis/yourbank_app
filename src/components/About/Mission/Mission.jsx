import Header from '../../Header';
import MissionCard from './MissionCard';

export default function Mission() {
    
    return(

        <div className="mission-con">
            <Header 
                nameGreen1={'Mission & Vision'}
                para={'We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development'}
            />
            <div className="mission-cards">
                <MissionCard />
            </div>
        </div>
    );
}