import React from "react";
import Arrow from '../assets/images/arrow.png';

function heroSection1(){
    return(
    <>
    <div className="heroSection-1">
    <br /><br />
    <h1 className="text-center font-bold text-4xl font-sans">
    Powerful features for <br /><span className="bg-gradient-to-r from-blue via-indigo to-green text-transparent bg-clip-text">powerful creators</span>
    </h1><br />
    <p className="text-center font-sans font-normal text-xl">Choose a plan that&apos;s right for you</p>
    <br /><br />
    <div class="flex items-center justify-center gap-5 font-sans font-normal text-base">
    <div className="">Pay Monthly</div>
    <div>
    <label class="inline-flex items-center cursor-pointer">
     <input type="checkbox" value="" class="sr-only peer" />
     <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
     </div>  
    <div className="">Pay Yearly</div>
      </div> 
     <div className="flex items-center justify-end ml-auto font-sans font-medium text-lg ">
      <img src={Arrow} className="w-20 h-14 -mt-6" alt="error-arrow" />
      <p className="text-[#1D4ED8]">Save 25%</p>
     </div>
    </div>
    </>
    );
}

export default heroSection1;