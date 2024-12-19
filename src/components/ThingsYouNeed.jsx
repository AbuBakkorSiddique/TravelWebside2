import '../assets/css/ThingsYouNeed.css';
import Element2 from '../assets/images/Element (2).png' ; 
import Group from '../assets/images/Group.png';
import Group2 from '../assets/images/Group (1).png' ; 
import Group3 from '../assets/images/Group (2).png' ; 

function ThingsYouNeed() {
  return (
<>
<div className="ThingsYouNeed">

<div className="ThingsYouNeed_DivOne" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
<div className="ThingsYouNeed_DivOne_one">
    <div className='ThingsYouNeed_DivOne_one_one'>
    <h1 className='text-2xl'>Things you need <b className="text-orange-600">to do</b></h1>
    </div>
    <div className='ThingsYouNeed_DivOne_one_two'>
        <p>We ensure that you’ll embark on a perfectly planned,  </p>
        <p>safe vacation at a price you can afford.</p>
    </div>
     
</div>
<div className="ThingsYouNeed_DivOne_two">
  <img src={Element2} alt="Element2"  className='Element2'/>
  
</div>
</div>




<div className="ThingsYouNeed_DIvTwo" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
<div className='ThingsYouNeed_DIvTwo_Sub'>
<div className='ThingsYouNeed_DIvTwo_Sub_Main transition duration-700 ease-in-out hover:skew-y-6'>
    <div>
        <img src={Group} alt="Group"  className='Group'/>
    </div>
    <div>
        <div>
            <h1> Sign Up</h1>
            
        </div>
        <div>
        <p> Completes all the work associated with planning and processing</p>
        </div>
    </div>
</div>
<div className='ThingsYouNeed_DIvTwo_Sub_Main transition duration-700 ease-in-out hover:skew-y-6'>
<div>
    <div>
        <img src={Group2} alt="Group2" className='Group2' />
    </div>
    <div>
        <div>
            <h1> Sign Up</h1>
            
        </div>
        <div>
        <p> Completes all the work associated with planning and processing</p>
        </div>
    </div>
</div>
</div>
<div className='ThingsYouNeed_DIvTwo_Sub_Main transition duration-700 ease-in-out hover:skew-y-6'>
<div>
    <div>
        <img src={Group3} alt="Group3"  className='Group3'/>
    </div>
    <div>
        <div>
            <h1> Sign Up</h1>
            
        </div>
        <div>
        <p> Completes all the work associated with planning and processing</p>
        </div>
    </div>
</div>
</div>
</div>
</div>


</div>








</>
  )
}

export default ThingsYouNeed