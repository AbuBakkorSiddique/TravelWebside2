
import  { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import UserAboutSection from '../assets/images/AboutUser.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
import '../assets/css/AboutUsPage.css'

import { EffectCreative } from 'swiper/modules';
function AboutUsPage() {
    const swiperRef = useRef(null);

    const handleNext = () => {
      if (swiperRef.current) swiperRef.current.slideNext();
    };
  
    const handlePrev = () => {
      if (swiperRef.current) swiperRef.current.slidePrev();
    };
  return (
   <>
   <div className="AboutUsPage">


<div className='AboutUsPage_sub'>
    <div className='AboutUsPage_sub_Left'>
        <div className='AboutUsPage_sub_Left_Title'>
        <h1 className='text-xl font-bold'> What people say</h1>
        <h1 className='text-orange-600 text-xl font-bold'> about Us.</h1>
        </div>
        <div className='AboutUsPage_sub_Left_paragraph'>
            <p> Our Clients send us bunch of smilies with our services and we love them.</p>

        </div>
        <div className='AboutUsPage_sub_Left_Button'>
 {/* Navigation Buttons */}
 <div style={{ textAlign: 'center', marginBottom: '10px' }}>
        <button onClick={handlePrev} style={{ marginRight: '10px' }}>
          <ArrowBackIcon className='AboutUsPage_sub_Left_Button_LeftButton'/>
        </button>
        <button onClick={handleNext} style={{ padding: '10px 20px' }}>
        <ArrowForwardIcon className='AboutUsPage_sub_Left_Button_RightButton'/>
        </button>
      </div>
        </div>

    </div>
    <div className='AboutUsPage_sub_right'>

      {/* Swiper with External Control */}
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Assign swiper instance to ref
        grabCursor={true}
        effect={'creative'}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ['100%', 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="mySwiper"
      >
        <SwiperSlide>
<div className='AboutUsPage_sub_right_sub'>
  <div className='AboutUsPage_sub_right_sub_Box bg-slate-50'>
       <div className='AboutUsPage_sub_right_sub_Box_FirstRow'>
         <p> “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
       </div>
       <div className=' AboutUsPage_sub_right_sub_Box_SecondRow'>
        <h1 className='font-bold'> Mike taylor</h1>
        <p>Lahore, Pakistan</p>

       </div>
  </div>
 
  <div className='AboutUsPage_sub_right_sub_User'>
    <img src={UserAboutSection} alt="UserAboutSection"  className='UserAboutSection'/>

  </div>

</div>
       


        </SwiperSlide>
        <SwiperSlide>
        <div className='AboutUsPage_sub_right_sub'>
  <div className='AboutUsPage_sub_right_sub_Box bg-slate-50'>
       <div className='AboutUsPage_sub_right_sub_Box_FirstRow'>
         <p> “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
       </div>
       <div className=' AboutUsPage_sub_right_sub_Box_SecondRow'>
        <h1 className='font-bold'> Mike taylor</h1>
        <p>Dhaka , Bangladesh</p>

       </div>
  </div>
 
  <div className='AboutUsPage_sub_right_sub_User'>
    <img src={UserAboutSection} alt="UserAboutSection"  className='UserAboutSection'/>

  </div>

</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='AboutUsPage_sub_right_sub'>
  <div className='AboutUsPage_sub_right_sub_Box bg-slate-50'>
       <div className='AboutUsPage_sub_right_sub_Box_FirstRow'>
         <p> “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
       </div>
       <div className=' AboutUsPage_sub_right_sub_Box_SecondRow'>
        <h1 className='font-bold'> Mike taylor</h1>
        <p>London,Uk</p>

       </div>
  </div>
 
  <div className='AboutUsPage_sub_right_sub_User'>
    <img src={UserAboutSection} alt="UserAboutSection"  className='UserAboutSection'/>

  </div>

</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='AboutUsPage_sub_right_sub'>
  <div className='AboutUsPage_sub_right_sub_Box bg-slate-50'>
       <div className='AboutUsPage_sub_right_sub_Box_FirstRow'>
         <p> “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
       </div>
       <div className=' AboutUsPage_sub_right_sub_Box_SecondRow'>
        <h1 className='font-bold'> Mike taylor</h1>
        <p>Florida, USA</p>

       </div>
  </div>
 
  <div className='AboutUsPage_sub_right_sub_User'>
    <img src={UserAboutSection} alt="UserAboutSection"  className='UserAboutSection'/>

  </div>

</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='AboutUsPage_sub_right_sub'>
  <div className='AboutUsPage_sub_right_sub_Box bg-slate-50'>
       <div className='AboutUsPage_sub_right_sub_Box_FirstRow'>
         <p> “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
       </div>
       <div className=' AboutUsPage_sub_right_sub_Box_SecondRow'>
        <h1 className='font-bold'> Mike taylor</h1>
        <p>Vicacen city , Canada</p>

       </div>
  </div>
 
  <div className='AboutUsPage_sub_right_sub_User'>
    <img src={UserAboutSection} alt="UserAboutSection"  className='UserAboutSection'/>

  </div>

</div>
        </SwiperSlide>
       
      </Swiper>
    </div>

</div>



















   </div>
   
   
   
   </>
  )
}

export default AboutUsPage