import { useState } from 'react';
import arl from '../../../assets/home/Button.svg';
import arr from '../../../assets/home/Button (1).svg';
import TestimonialCard from './testimonialCard';
import { testCardBuisness, testCardIndividuals } from '../../../api/data';
import Header from '../../Header';

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
            <Header
                showIndividuals={showIndividuals}
                setShowIndividuals={setShowIndividuals}
                name={'Our'} nameGreen2={'Testimonials'}
                para={'Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey'}
                btn={true}
            />
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