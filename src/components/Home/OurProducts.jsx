import { useState } from 'react';
import { OurProductsForIndividuals, OurProductsForBuisnesses } from '../../api/data.js';

export default function OurProducts() {

    const [showIndividuals, setShowIndividuals] = useState(true);

    const product = showIndividuals ? OurProductsForIndividuals : OurProductsForBuisnesses;


    return (
        <div className="ourproducts-wrap">
            <div className="ourproducts">
                <div className="ourproducts-text">
                    <h2>
                        Our <span className='green'>Products</span>
                    </h2>
                    <span className='para'>Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations</span>
                </div>
                <div className="ourproducts-btns">
                    <button onClick={() => setShowIndividuals(true)} className={showIndividuals ? 'tog' : 'non'}>For Individuals</button>
                    <button onClick={() => setShowIndividuals(false)} className={showIndividuals ? 'non' : 'tog'}>For Businesses</button>
                </div>
            </div>
            <div className="ourproducts-cards">
                {
                    product.map((item, key) => (
                        <div key={key} className='main-card'>
                            <div className='text-top'>
                            <img src={item.img} alt={item.name} />
                            <span>{item.name}</span></div>
                            <p>{item.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}