import { useState } from 'react';
import arl from '../../../assets/home/Button.svg';
import arr from '../../../assets/home/Button (1).svg';
import TestimonialCard from './testimonialCard';
import { testCardBuisness, testCardIndividuals } from '../../../api/data';

export default function Testimonial() {

    const [showIndividuals, setShowIndividuals] = useState(true);
    const showCard = showIndividuals ? testCardIndividuals : testCardBuisness;

    const shownCardsNum = 3;
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        if (currentIndex + shownCardsNum < showCard.length) {
            setCurrentIndex(p => p + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(p => p - 1)
        } else {
            setCurrentIndex(showCard.length - shownCardsNum)
        }
    }


    return (
        <div className="test-wrap">
            <div className="test-top">
                <div className="ourproducts-text">
                    <h2>
                        Our <span className='green'>Testimonials</span>
                    </h2>
                    <span className='para'>Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey</span>
                </div>
                <div className="ourproducts-btns">
                    <button onClick={() => setShowIndividuals(true)} className={showIndividuals ? 'tog' : 'non'}>For Individuals</button>
                    <button onClick={() => setShowIndividuals(false)} className={showIndividuals ? 'non' : 'tog'}>For Businesses</button>
                </div>
            </div>
            <div className="test-slider">
                <img src={arl} alt="arrow left" onClick={prev} />
                {
                    showCard.slice(currentIndex, currentIndex + shownCardsNum).map((i, k) => (
                        <TestimonialCard t={i.t} name={i.name} key={k} />
                    ))
                }
                <img src={arr} alt="arrow right" onClick={next} />
            </div>
        </div>
    );
}