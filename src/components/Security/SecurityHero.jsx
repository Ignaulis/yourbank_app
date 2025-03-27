import image from '../../assets/security/Image (8).png';
import abs from '../../assets/hero/Abstract Design (3).svg'

export default function SecurityHero() {
    return (
        <div className="security-container">
            <div className="security-text">
                <h2>Welcome to <span className="green">YourBank</span> Careers!</h2>
                <p>Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
            </div>
            <div className='security-image'>
                <img src={image} alt="image" />
            </div>
            <img src={abs} className='abstract' alt="" />
        </div>
    );
}