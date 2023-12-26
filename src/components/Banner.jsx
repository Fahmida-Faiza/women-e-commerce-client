import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import img1 from "../assets/image.jpg"
import img2 from "../assets/pic.png"
// import slide1 from "../assets/image.jpg"
import slide2 from "../assets/nailpolish.png"



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Banner = () => {
    return (
        <>
        <Carousel>
            <div>
               <img src={img2} alt="" />
                
            </div>
            <div>
                <img src={img2} alt="" />
               
            </div>
            <div>
                <img src={img2} alt="" />
                
            </div>
        </Carousel>



 <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
                    <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                    <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                    <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                    <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                    <img src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
                    <img src={slide2} alt="" />
        </SwiperSlide>
      
      </Swiper>

      </>
    );
};

export default Banner;