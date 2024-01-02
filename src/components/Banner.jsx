import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/image.jpg"
import img3 from "../assets/nior.jpg"
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
        slidesPerView={4}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="card w-72 bg-slate-100 shadow-xl">
            <figure><img src={slide2} alt="Shoes" /></figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-medium">Nail Polish</h2>
              <p className="text-xl font-medium">$200</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="card w-72 bg-slate-100 shadow-xl">
            <figure><img src={slide2} alt="Shoes" /></figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-medium">Nail Polish</h2>
              <p className="text-xl font-medium">$200</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="card w-72 bg-slate-100 shadow-xl">
            <figure><img src={slide2} alt="Shoes" /></figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-medium">Nail Polish</h2>
              <p className="text-xl font-medium">$200</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="card w-72 bg-slate-100 shadow-xl">
            <figure><img src={slide2} alt="Shoes" /></figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-medium">Nail Polish</h2>
              <p className="text-xl font-medium">$200</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="card w-72 bg-slate-100 shadow-xl">
            <figure><img src={slide2} alt="Shoes" /></figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-medium">Nail Polish</h2>
              <p className="text-xl font-medium">$200</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="card w-72 bg-slate-100 shadow-xl">
            <figure><img src={slide2} alt="Shoes" /></figure>
            <div className="card-body text-center">
              <h2 className="text-xl font-medium">Nail Polish</h2>
              <p className="text-xl font-medium">$200</p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      <div>

        <div className="hero min-h-screen ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img3} className="w-72 lg:w-96 rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">EXPRESS YOURSELF <br></br>THROUGH NIOR<br></br> LIPSTICKS</h1>
              <p className="py-6">When you can wear a statement, why make one?<br></br> Pick a matte lipstick that provides excellent coverage and transfer-proof color in one stroke.<br></br> The only thing you leave behind is your vibe, since the color stays with you the entire day!
                <br></br>


                A Tale of Enduring Influence on the Present and the Future</p>
              <button className="btn btn-outline btn-secondary">Shop Now</button>
            </div>
          </div>
        </div>
      </div>


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