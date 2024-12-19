import '../assets/css/HomeHero.css'
import HeroSectionMainImage from '../assets/images/Group 1000003524.png' ; 
import BestTour from '../assets/images/Card-1 (1).png' ; 
import Cart2 from '../assets/images/Card-2.png';
import Cart3 from '../assets/images/Card-3.png' ; 
import Airport3Png from '../assets/images/Element.png';
import { useEffect } from 'react';
import AOS from 'aos';
function HomeHero() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);
  return (
 <>
 <div className="HomeHero">
    {/* ----------- Hero Main Content Section  */}
 <div className="HeroNavigaionBar">
 <div className="navbar bg-transparent">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li className='hover:text-orange-500'><a>Home</a></li>
        <li className='hover:text-orange-500'><a>About</a></li>
        <li className='hover:text-orange-500'><a>Destination</a></li>
        <li className='hover:text-orange-500'><a>Tour</a></li>
        <li className='hover:text-orange-500'><a>Blog</a></li>
      
       
      </ul>
    </div>
    <a className="btn btn-ghost text-xl hover:text-orange-500">Trabook</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li className='hover:text-orange-500'><a>Home</a></li>
        <li className='hover:text-orange-500'><a>About</a></li>
        <li className='hover:text-orange-500'><a>Destination</a></li>
        <li className='hover:text-orange-500'><a>Tour</a></li>
        <li className='hover:text-orange-500'><a>Blog</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className='text-orange-600 pr-3'>Log In</a>
    <a className="btn bg-orange-600">Button</a>
  </div>
</div>

 </div>
 {/* ----------- Hero Main Content Section  */}
 <div className="HeroMainContent">
<div className='HeroMainContent_left ' data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
<div >
<h1 className='text-5xl '>Get started your<b className='text-orange-600'>  exciting journey with us.</b>

</h1>
</div>
<div>
<p>
A Team of experienced tourism professionals will provide you with the best advice and tips for your desire place. 
</p>
</div>
<div>
<button className='btn hover:bg-orange-200 text-lg text-orange-500 border-orange-500  '> Discover Now </button>
</div>
</div>
<div className='HeroMainContent_Right'>
    <div className='HeroMainContent_Right_one'>
        <div>
            <img src={Airport3Png} alt="Airport3Png" className='Airport3Png  ' />
        </div>
    </div>
<div className='HeroMainContent_Right_two'>
   <div>
   <img src={HeroSectionMainImage} alt="HeroSectionMainImage" className='HeroSectionMainImage' />
   </div>
   <div >
    <img src={BestTour} alt="BestTour"  className='BestTour animate-upDownWithOrigin '/>
   </div>
   <div>
    <img src={Cart2} alt="Cart2"  className='Cart2'/>
   </div>
   <div>
    <img src={Cart3} alt="Cart3" className='Cart3' />
   </div>
</div>

</div>
 </div>
 {/* ----------- Hero  Serch Bar section   */}
 <div className="HeroSerchBar_Main" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom">
  <div className='HeroSerchBar_Main_Sub bg-zinc-100 rounded-lg'>
    <div>
    
   <select id="cars" name="cars" className='bg-zinc-100'>
        <option value=""> Location</option> {/* Optional placeholder */}
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
    <div>
    <select id="cars" name="cars" className='bg-zinc-100'>
        <option value=""> Date</option> {/* Optional placeholder */}
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
    <div>
    <select id="cars" name="cars" className='bg-zinc-100'>
        <option value=""> Guest</option> {/* Optional placeholder */}
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
    <div>
        <button className='btn bg-orange-600 hover:bg-orange-400 '> Explore Now</button>
    </div>
  </div>
 </div>
 
 
 
 
 
 
 

 </div>
 
 
 </>
  )
}

export default HomeHero