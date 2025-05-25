import image from "../../assets/careers/image.png";
import image2 from "../../assets/hero/Abstract Design (3).svg";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <img src={image2} className="image2" alt="" />
      <div className="welcome-text">
        <h2>
          Welcome to <span className="green">YourBank</span> Careers!
        </h2>
        <p>
          Join our team and embark on a rewarding journey in the banking
          industry. At YourBank, we are committed to fostering a culture of
          excellence and providing opportunities for professional growth. With a
          focus on innovation, customer service, and integrity, we strive to
          make a positive impact in the lives of our customers and communities.
          Join us today and be a part of our mission to shape the future of
          banking.
        </p>
      </div>
      <div className="welcome-image">
        <img src={image} alt="image" />
      </div>
    </div>
  );
}
