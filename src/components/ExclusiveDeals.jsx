import '../assets/css/ExclusiveDeals.css'
import EcartOne from '../assets/images/Image.png';
import EcartTwo from '../assets/images/Image (1).png';
import EcartThree from '../assets/images/Image (3).png';
import EcartFour from '../assets/images/Untitled design (5).png' ; 
import EcartFive from '../assets/images/Image (1).png';
import EcartSix from '../assets/images/Image.png';
import EcartSeven from '../assets/images/Image (3).png';

import StarBorderIcon from '@mui/icons-material/StarBorder';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
function ExclusiveDeals() {
  return (
<>

<div className='ExclusiveDeals'>

<div className='ExclusiveDeals_DivOne' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
<div className='ExclusiveDeals_DivOne_One'>
  <h1 className='text-2xl'> Exclusive <b className='text-orange-600'> deals & discounts</b></h1>
</div>
<div className='ExclusiveDeals_DivOne_Two'>
  <p> Discover our fantastic early booking discounts & start planning your journey.
  </p>

</div>
</div>




<div className='ExclusiveDeals_DivTwo' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
<Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper Eswiper"
        
      >
        <SwiperSlide>
          <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartOne} alt="EcartOne" className='EcartOne' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartTwo} alt="EcartTwo" className='EcartTwo' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartThree} alt="EcartThree" className='EcartThree' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartFour} alt="EcartFour" className='EcartFour' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartFive} alt="EcartFive" className='EcartFive' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartSix} alt="EcartSix" className='EcartSix' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartSeven} alt="EcartSeven" className='EcartSeven' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartOne} alt="EcartOne" className='EcartOne' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='E_Cart'>
            <div className='E_Cart_image'>
             <img src={EcartOne} alt="EcartOne" className='EcartOne' />
            </div>
            <div className='E_Cart_firstRow'>
                 <div>
                  <h1> Paris</h1>
                 </div>
                 <div>
                  <p> <StarBorderIcon/> 4.5</p>
                 </div>
            </div>
            <div className='E_Cart_secondRow'>
              <div>
                <h1> Franch </h1>
              </div>
              <div>
                <del> $0.5</del>
              </div>
              <div>
                 <p>$5.00</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
</div>
    

</div>


</>
  )
}

export default ExclusiveDeals