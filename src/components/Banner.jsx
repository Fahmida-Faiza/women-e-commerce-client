import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img1 from "../assets/image.jpg"
const Banner = () => {
    return (
        <Carousel>
            <div>
               <img src={img1} alt="" />
                
            </div>
            <div>
                <img src={img1} alt="" />
               
            </div>
            <div>
                <img src={img1} alt="" />
                
            </div>
        </Carousel>
    );
};

export default Banner;