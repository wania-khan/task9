import React from "react";
import Arrow from '../assets/images/arrow.png';

function heroSection1(){
    return(
    <>
    <div className="max-w-7xl m-auto justify-center items-center font-sans">
    <br /><br />
    <h1 className="text-center font-bold text-4xl ">
    Powerful features for <br /><span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-transparent bg-clip-text">powerful creators</span>
    </h1><br />
    <p className="text-center font-normal text-xl">Choose a plan that&apos;s right for you</p>
    <br /><br />
    <div class="relative m-auto max-w-[520px] flex items-center justify-center gap-8 font-normal text-base sm:max-w[320px]">
    <div className="">Pay Monthly</div>
    <div className="justify-center items-center">
    <label class="inline-flex items-center cursor-pointer">
     <input type="checkbox" value="" class="sr-only peer" />
     <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
     </div>  
    <div className="">Pay Yearly</div>
    <div className="lg:flex md:flex hidden absolute items-center top-9 -right-11 font-medium text-lg sm:w-auto sm:h-auto">
      <img src={Arrow} className="w-24 h-18 -mt-7" alt="error-arrow" />
      <p className="text-[#1D4ED8]">Save 25%</p>
     </div>
     </div> 
     <div className="flex items-center justify-end font-medium text-lg sm:w-auto sm:h-auto lg:hidden md:hidden ">
      <img src={Arrow} className="w-24 h-18 -mt-7" alt="error-arrow" />
      <p className="text-[#1D4ED8]">Save 25%</p>
     </div>
    </div>
    </>
    );
}

export default heroSection1;