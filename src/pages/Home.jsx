import Faq from "../components/Home/faq/faq";
import Hero from "../components/Home/Hero";
import OurFeatures from "../components/Home/ourFeatures/ourFeatures";
import OurProducts from "../components/Home/OurProducts";
import Testimonial from "../components/Home/testimonial/testimonial";
import UseCases from "../components/Home/useCases/useCases";
import StartJ from "../components/StartJ";
import img from '../assets/hero/Abstract Design (1).svg'

export default function Home() {

    return (
        <div className="home-wrap">
            <img className="top-img" src={img} alt="" />
            <Hero />
            <OurProducts />
            <UseCases />
            <OurFeatures />
            <Faq />
            <Testimonial />
            <StartJ />
        </div>
    );
}