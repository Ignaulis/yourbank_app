import Faq from "../components/Home/faq/faq";
import Hero from "../components/Home/Hero";
import OurFeatures from "../components/Home/ourFeatures/ourFeatures";
import OurProducts from "../components/Home/OurProducts";
import Testimonial from "../components/Home/testimonial/testimonial";
import UseCases from "../components/Home/useCases/useCases";
import StartJ from "../components/StartJ";

export default function Home() {

    return(
        <>
        <Hero />
        <OurProducts />
        <UseCases />
        <OurFeatures />
        <Faq />
        <Testimonial />
        <StartJ />
        </>
    );
}