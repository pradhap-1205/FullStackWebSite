import React from 'react';
import Header from '../../Pages/Header';

import Footer from '../../Pages/Footer';
import About from '../../Pages/Content/About';
import Services from '../../Pages/Content/Services';
import ALLContentPage from '../../Pages/Content/ALLContentPage';

const Home = () => {
  return (
    <div>

<div className=" p-4 ">

  {/* header */}
    <div className="overflow-hidden  bg-black text-white p-[1rem] border border-black">
        <div className="lg:absolute lg:w-[22rem] lg:h-[14rem] lg:rounded-[50%]  lg:bg-blur-bg lg:blur-[74px] lg:top-[-18%] lg:right-0"></div>
        <div className="lg:absolute lg:w-[22rem] lg:h-[14rem] lg:rounded-[50%]  lg:bg-blur-bg lg:blur-[74px] lg:bottom-[-8rem] lg:left-[-10rem] "></div>
        <Header/>
      </div> 
    </div>

  {/* header */}

  {/* content */}
    <div className=" p-4  z-50 ">
    <div className=" border border-black text-black bg-background-color p-[2rem]  border-cardColor">
   
        <ALLContentPage/>
       
      </div> 
    </div>
{/* content */}

{/* Footer*/}
<div className=" p-4 mt-3 z-50 ">
    <div className="overflow-hidden  bg-black text-white p-[1rem]">
    <Footer />
      </div> 
    </div>
    
{/* Footer*/}
    
      
    </div>
  );
}

export default Home;
