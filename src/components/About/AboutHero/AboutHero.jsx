import image from '../../../assets/about/Image (1).png';
import abs from '../../../assets/hero/Abstract Design (3).svg';

export default function AboutHero() {
    return (
        <div className="about-container">
            <div className="about-text">
                <span>Welcome to YourBank</span>
                <h2>Where Banking Meets<span className="green"> Excellence!</span></h2>
                <p>At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.</p>
            </div>
            <div className='about-image'>
                <img src={image} alt="image" />
            </div>
            <img className='abstract' src={abs} alt="" />
        </div>
    );
}