import "./Slider.scss";
import SlideImage1 from "../../../assets/sliderImages/SlideImage1.jpg";
import SlideImage2 from "../../../assets/sliderImages/SlideImage2.jpg";
import SlideImage3 from "../../../assets/sliderImages/SlideImage3.jpg";
import SlideImage4 from "../../../assets/sliderImages/SlideImage4.jpg";

import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
    }
    const nextSlide = () => {
        setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
    }

    return (
        <div className="slider">
            <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img src={SlideImage1} alt="" />
                <img src={SlideImage2} alt="" />
                <img src={SlideImage3} alt="" />
                <img src={SlideImage4} alt="" />
            </div>
            <div className="slider-icons">
                <div className="icon">
                    <FaArrowLeft onClick={prevSlide} />
                </div>
                <div className="icon">
                    <FaArrowRight onClick={nextSlide} />
                </div>
            </div>
        </div>
    );
}

export default Slider;