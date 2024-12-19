import '../assets/css/GetUpdate.css' ;

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';

// get import the images 

import GetUpdateImage1 from '../assets/images/Image (5).png';
import GetUpdateImage2 from '../assets/images/Image (6).png';
import GetUpdateImage3 from '../assets/images/Image (7).png';
import GetUpdateImage4 from '../assets/images/Image (8).png'

function GetUpdate() {
  return (
  <>
  <div className="GetUpdate">
<div className='GetUpdate_FirstROw' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">

    <h1 className='text-4xl font-bold'>
    Get update with <b className='text-orange-600 font-bold '> latest blog</b>

    </h1>

</div>
<div className='GetUpdate_SecrondRow' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
<Swiper
       
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
<div className=' GetUpdate_SecrondRow_FristSLide'>

<div>
      <div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage1} alt="GetUpdateImage1" className='GetUpdateImage1' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1 className='font-bold'>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>
<div>  
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage2} alt="GetUpdateImage2" className='GetUpdateImage2'/>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1 className='font-bold'>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>

<div>
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage3} alt="GetUpdateImage3" className='GetUpdateImage3' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1 className='font-bold'>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>
<div>
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage4} alt="GetUpdateImage4" className='GetUpdateImage4' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1 className='font-bold'>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>


</div>





        </SwiperSlide>
        <SwiperSlide>
        <div className=' GetUpdate_SecrondRow_SecondSlide'>

<div>
      <div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage1} alt="GetUpdateImage1" className='GetUpdateImage1' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>
<div>  
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage2} alt="GetUpdateImage2" className='GetUpdateImage2'/>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>

<div>
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage3} alt="GetUpdateImage3" className='GetUpdateImage3' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>
<div>
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage4} alt="GetUpdateImage4" className='GetUpdateImage4' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>


</div>

        </SwiperSlide>

        <SwiperSlide>
        <div className=' GetUpdate_SecrondRow_THirdSlide'>

<div>
      <div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage1} alt="GetUpdateImage1" className='GetUpdateImage1' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>
<div>  
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage2} alt="GetUpdateImage2" className='GetUpdateImage2'/>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>

<div>
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage3} alt="GetUpdateImage3" className='GetUpdateImage3' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>
<div>
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage4} alt="GetUpdateImage4" className='GetUpdateImage4' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>


</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className=' GetUpdate_SecrondRow_FOurthSlide'>

<div>
      <div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage1} alt="GetUpdateImage1" className='GetUpdateImage1' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>
<div>  
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage2} alt="GetUpdateImage2" className='GetUpdateImage2'/>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>

<div>
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage3} alt="GetUpdateImage3" className='GetUpdateImage3' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
      </div>
</div>
<div>
<div className='CommonCartFor_GetUpdatePage'>
       <div className='CommonCartFor_GetUpdatePage_Image'>
          <img src={GetUpdateImage4} alt="GetUpdateImage4" className='GetUpdateImage4' />
       </div>
       <div className='CommonCartFor_GetUpdatePage_Paragraph'>
            <h1>The Amazing Difference a Year of Travelling .</h1>
       </div>
       <div className='CommonCartFor_GetUpdatePage_Date'>
          <p> July 27, 2021</p>
       </div>
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

export default GetUpdate