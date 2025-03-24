import { useState } from 'react';
import arl from '../../../assets/home/Button.svg';
import arr from '../../../assets/home/Button (1).svg';
import TestimonialCard from './testimonialCard';

const testCardIndividuals = [
    { t: 'YourBank helped me open my first savings account with ease. Their online tools were intuitive, and I quickly understood how to manage my finances. I highly recommend their services!', name: 'Sarah M' },
    { t: 'I’ve been banking with YourBank for years, and their customer service has always been exceptional. They’ve been there to assist me through every stage of my financial journey.', name: 'Mark S' },
    { t: 'YourBank made buying my first car so much easier. The loan process was smooth and transparent, and I felt well taken care of throughout the whole experience.', name: 'Emily R' },
    { t: 'When I needed a personal loan, YourBank walked me through every step. Their low-interest rates and flexible terms helped me get the funds I needed quickly and without hassle.', name: 'Lucas W' },
    { t: 'As a young professional, YourBank has been my go-to for managing my finances. Their mobile banking app is easy to use and allows me to keep track of my expenses on the go.', name: 'Olivia T' },
    { t: 'YourBank has helped me save for my future with their great investment options. Their financial advisors are friendly, approachable, and always offer the best advice.', name: 'James P' }
];

const testCardBuisness = [
    { t: 'Starting my own business seemed overwhelming, but YourBank made it easy. Their small business loans were quick to secure, and their business banking tools helped me stay organized and efficient.', name: 'Michael B' },
    { t: 'I’m so grateful for the team at YourBank for helping me get my startup off the ground. Their business account options and financing solutions made all the difference during our first year.', name: 'Rachel L' },
    { t: 'YourBank’s business credit cards have helped me streamline my company’s expenses. The cashback rewards and low fees have been incredibly useful for my growing business.', name: 'David K' },
    { t: 'As a new business owner, YourBank has been an invaluable partner. Their tailored financial solutions helped me get the right funding and set up my operations smoothly.', name: 'Karen C' },
    { t: 'Thanks to YourBank, I was able to secure a loan to expand my business. Their team took the time to understand my needs and provided the best options to help me grow.', name: 'Steven F' },
    { t: 'Opening a business account with YourBank was easy and straightforward. Their user-friendly online platform and exceptional customer service have made managing finances a breeze for my business.', name: 'Sophia G' }
];

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