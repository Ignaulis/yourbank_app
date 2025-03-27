import { useState } from 'react';
import { OurProductsForIndividuals, OurProductsForBuisnesses } from '../../api/data.js';
import Header from '../Header.jsx';

export default function OurProducts() {

    const [showIndividuals, setShowIndividuals] = useState(true);

    const product = showIndividuals ? OurProductsForIndividuals : OurProductsForBuisnesses;


    return (
        <div className="ourproducts-wrap">
            <Header
                showIndividuals={showIndividuals}
                setShowIndividuals={setShowIndividuals}
                name={'Our'} nameGreen2={'Products'}
                para={'Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations'}
                btn={true}
            />
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