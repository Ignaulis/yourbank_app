import image1 from '../../../assets/about/Image (2).png';
import image2 from '../../../assets/about/Image (3).png';
import image3 from '../../../assets/about/Abstract Design (1).svg'

export default function MissionCard() {

    return(
        <div className="mission-card">
            <div className="card-top">
                <div className="top-img">
                    <img src={image1} className='image1' alt="plant" />
                    <img src={image3} className='image3' alt="" />
                </div>
                <div className="top-para">
                    <span>Mission</span>
                    <p>At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.</p>
                </div>

            </div>
            <div className="card-bot">
                <div className="bot-para">
                    <span>Vision</span>
                    <p>Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.</p>
                </div>
                <div className="bot-img">
                    <img src={image2} alt="eye" className='image1' />
                    <img src={image3} className='image3' alt="" />
                </div>

            </div>
        </div>

    );
}