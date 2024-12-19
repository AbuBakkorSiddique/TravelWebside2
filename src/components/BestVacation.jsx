import '../assets/css/BestVacation.css'

import Img1 from '../assets/images/pexels-francesco-ungaro-1525041.jpg' ;
import img2 from '../assets/images/pexels-nietjuh-1831745.jpg';
import img3 from '../assets/images/pexels-markp-2790391.jpg' ;
import img4 from  '../assets/images/pexels-gochrisgoxyz-1643403.jpg' ; 
import img5 from '../assets/images/pexels-quang-nguyen-vinh-222549-2144922.jpg' ;
import img6 from  '../assets/images/pexels-rpnickson-2559941.jpg' ; 
import img7 from  '../assets/images/pexels-eberhardgross-2217364.jpg' ; 
import img8 from  '../assets/images/pexels-therato-3384815.jpg' ; 
import img9 from  '../assets/images/pexels-quang-nguyen-vinh-222549-2144922.jpg' ;
import img10 from  '../assets/images/pexels-christian-heitz-285904-842711.jpg';
import img11 from  '../assets/images/pexels-baskincreativeco-1480807.jpg';
import img12 from '../assets/images/pexels-francesco-ungaro-1525041.jpg' ; 
import img13 from  '../assets/images/pexels-maoriginalphotography-1485894.jpg';

import BEstSEctionImage from '../assets/images/Element (3).png';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

function BestVacation() {
  return (
<>

<div className="BestVacation">

<div className='BestVacation_DivOne' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
 <div className='BestVacation_DivOne_Title'>
       <h1 className='text-4xl'> Best <b className='text-orange-600'> vacation plan </b></h1>
 </div>
 <div className='BestVacation_DivOne_Paragraph'>
    <p> Plan your perfect vacation with our travel agency. Choose among hundreds of all-inclusive offers! </p>
 </div>
 <div className='BestTreePng'>
  <img src={BEstSEctionImage} alt="BEstSEctionImage" className='BEstSEctionImage' />

 </div>
</div>








<div className='BestVacation_DivTwo' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">


<Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='BestVacation_DivTwo_cartOne'>
<div className='BestVacation_DivTwo_cartOne_Sub'>

  {/*  --------------------   */}
<div className="card bg-base-100 w-96 shadow-xl singleCart">
  <figure>
    <img
      src={Img1}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
      <div>
        <h1> Rome, Italty</h1>
      </div>
      <div>
        <h1 className='text-orange-500'>
        $5,42k
          </h1>  
     </div>

    </div>
    <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
      <div>
        <h1>
        10 Days Trip
        </h1>
      </div>
      <div>
        <h1>
        4.8
        </h1>
      </div>

</div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
  <figure>
    <img
      src={img4}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
      <div>
        <h1> Rome, Italty</h1>
      </div>
      <div>
        <h1 className='text-orange-500'>
        $5,42k
          </h1>  
     </div>

    </div>
    <div className='card-body_secondRow flex justify-between md:flex md:justify-between '>
      <div>
        <h1>
        10 Days Trip
        </h1>
      </div>
      <div>
        <h1>
        4.8
        </h1>
      </div>

</div>
  </div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
  <figure>
    <img
      src={img3}
      alt="Shoes" />
  </figure>
  <div className="card-body">
  <div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
      <div>
        <h1> Rome, Italty</h1>
      </div>
      <div>
        <h1 className='text-orange-500'>
        $5,42k
          </h1>  
     </div>

    </div>
    <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
      <div>
        <h1>
        10 Days Trip
        </h1>
      </div>
      <div>
        <h1>
        4.8
        </h1>
      </div>

</div>
  </div>
</div>
{/*  --------------------   */}
</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='BestVacation_DivTwo_cartTwo'>
          <div className='BestVacation_DivTwo_cartOne_Sub'>

{/*  --------------------   */}
<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img4}
    alt="Shoes" />
</figure>
<div className="card-body ">
  <div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img4}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img5}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>
{/*  --------------------   */}
</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='BestVacation_DivTwo_cartThree'>
          <div className='BestVacation_DivTwo_cartOne_Sub'>

{/*  --------------------   */}
<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img6}
    alt="Shoes" />
</figure>
<div className="card-body ">
  <div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img7}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img8}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>
{/*  --------------------   */}
</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='BestVacation_DivTwo_cartFour'>
          <div className='BestVacation_DivTwo_cartOne_Sub'>

{/*  --------------------   */}
<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img9}
    alt="Shoes" />
</figure>
<div className="card-body ">
  <div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img10}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img11}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between md:flex md:justify-between '>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between md:flex md:justify-between '>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>
{/*  --------------------   */}
</div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='BestVacation_DivTwo_cartFIve'>
          <div className='BestVacation_DivTwo_cartOne_Sub'>

{/*  --------------------   */}
<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img12}
    alt="Shoes" />
</figure>
<div className="card-body ">
  <div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img12}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img13}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>
{/*  --------------------   */}
</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='BestVacation_DivTwo_cartSix'>
          <div className='BestVacation_DivTwo_cartOne_Sub'>

{/*  --------------------   */}
<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={Img1}
    alt="Shoes" />
</figure>
<div className="card-body ">
  <div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img2}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img2}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>
{/*  --------------------   */}
</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='BestVacation_DivTwo_cartSeven'>
          <div className='BestVacation_DivTwo_cartOne_Sub'>

{/*  --------------------   */}
<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img3}
    alt="Shoes" />
</figure>
<div className="card-body ">
  <div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img4}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>

<div className="card bg-base-100 w-96 shadow-xl singleCart">
<figure>
  <img
    src={img5}
    alt="Shoes" />
</figure>
<div className="card-body">
<div className='card-body_firstRow flex justify-between'>
    <div>
      <h1> Rome, Italty</h1>
    </div>
    <div>
      <h1 className='text-orange-500'>
      $5,42k
        </h1>  
   </div>

  </div>
  <div className='card-body_secondRow flex justify-between'>
    <div>
      <h1>
      10 Days Trip
      </h1>
    </div>
    <div>
      <h1>
      4.8
      </h1>
    </div>

</div>
</div>
</div>
{/*  --------------------   */}
</div>
          </div>
        </SwiperSlide>
     
      </Swiper>
</div>


</div>




</>
  )
}

export default BestVacation