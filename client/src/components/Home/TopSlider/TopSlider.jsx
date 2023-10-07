import "./TopSlider.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import SlideImage1 from "../../../assets/sliderImages/SlideImage1.jpg";
import SlideImage2 from "../../../assets/sliderImages/SlideImage2.jpg";
import SlideImage3 from "../../../assets/sliderImages/SlideImage3.jpg";
import SlideImage4 from "../../../assets/sliderImages/SlideImage4.jpg";
import SlideImage5 from "../../../assets/sliderImages/SlideImage5.jpg";
import SlideImage6 from "../../../assets/sliderImages/SlideImage6.jpg";
import SlideImage7 from "../../../assets/sliderImages/SlideImage7.jpg";
import SlideImage8 from "../../../assets/sliderImages/SlideImage8.jpg";
import SlideImage9 from "../../../assets/sliderImages/SlideImage9.jpg";
import SlideImage10 from "../../../assets/sliderImages/SlideImage10.jpg";
import SlideImage11 from "../../../assets/sliderImages/SlideImage11.jpg";
import SlideImage12 from "../../../assets/sliderImages/SlideImage12.jpg";


const TopSlider = () => {
    return (
        <>
            <div className="slider-container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={SlideImage1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage6} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage7} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage8} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage9} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage10} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage11} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={SlideImage12} alt="" /></SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default TopSlider;
