// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slider';

import slideImg1 from '../assets/images/carousel1.jpg'
import slideImg2 from '../assets/images/carousel2.jpg'
import slideImg3 from '../assets/images/carousel3.jpg'

export default function Carousel() {
     return (
          <>
               <div className='container mx-auto px-4 py-4'>
                    <Swiper

                         spaceBetween={30}
                         centeredSlides={true}
                         autoplay={{
                              delay: 5000,
                              disableOnInteraction: false,
                         }}
                         pagination={{
                              clickable: true,
                         }}
                         navigation={true}
                         modules={[Autoplay, Pagination, Navigation]}
                         className="mySwiper  "
                    >
                         <SwiperSlide>
                              <Slide img={slideImg1} text={'Start Your Digital Marketing Camping Up a Running'}></Slide>
                         </SwiperSlide>
                         <SwiperSlide>
                              <Slide img={slideImg2} text={'Intrinsics strategize professional users.'}></Slide>
                         </SwiperSlide>
                         <SwiperSlide>
                              <Slide img={slideImg3} text={'Quickly incubate end-to-end metrics.'}></Slide>
                         </SwiperSlide>

                    </Swiper>
               </div>
          </>
     );
}
