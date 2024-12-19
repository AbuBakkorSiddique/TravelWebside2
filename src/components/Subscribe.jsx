import '../assets/css/Subscribe.css' ;
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Subscribe() {
  return (
<>
<div className="Subscribe">

    <div className='Subscribe_sub' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
        <div className='Subscribe_sub_firstRow'>
            <h1 className='text-white text-2xl md:text-5xl font-bold'>Subscribe and get exclusive deals & offer</h1>

        </div>
        <div className='Subscribe_sub_secondRow'>

            <div className='Subscribe_sub_secondRow_SearchDiv'>

               <div className='Subscribe_sub_secondRow_SearchDiv_left'>
                <MailOutlineIcon/>
                <input type='text' placeholder='Enput your mail '/>

               </div>
               <div className='Subscribe_sub_secondRow_SearchDiv_right'>
               
               <button className='btn bg-orange-500'> Subscribe</button>

               </div>
            </div>

        </div>


    </div>

</div>





</>
  )
}

export default Subscribe