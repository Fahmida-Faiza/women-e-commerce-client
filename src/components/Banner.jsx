import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
// import img1 from "../assets/image.jpg"
import img2 from "../assets/pic.png"
// import slide1 from "../assets/image.jpg"
import slide2 from "../assets/nailpolish.png"


import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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

<br></br>
<div className="my-30 text-center font-extrabold text-5xl">
    <p>This our new brand</p>

</div>

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


      <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
          </Swiper>
      </div>

      </>
    );
};

export default Banner;