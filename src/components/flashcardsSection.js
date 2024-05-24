import React from "react";
import Tick from '../assets/images/tick.png';
import Cross from '../assets/images/cross.png';

const options=[
    {heading:"Freebie", description:"Ideal for individuals who need quick access to basic features.",
     price: "$0", month:"/ Month", features_available: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
      ],
      features_unavailable: [
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ]
    },
    {heading:"Professional", description:"Ideal for individuals who who need advanced features and tools for client work.",
    price: "$25", month:"/ Month", features_available: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
      ],
      features_unavailable:[
        "Instant Access to our design system",
        "Create teams to collaborate on designs"
      ]
    },
    {heading:"Enterprise", description:"Ideal for businesses who need personalized services and security for large teams.",
    price: "$100", month:"/ Month", features_available: [
        "20,000+ of PNG & SVG graphics",
        "Access to 100 million stock images",
        "Upload custom icons and fonts",
        "Unlimited Sharing",
        "Upload graphics & video in up to 4k",
        "Unlimited Projects",
        "Instant Access to our design system",
        "Create teams to collaborate on designs",
      ],
    },
  ];
function flashcardsSection(){
    return(
    <>
    
    <br />
      <div className="max-w-6xl m-auto justify-center items-center manrope-normal">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {options.map((option) => (
          <div
            key={option.heading}
            className="group bg-white rounded-lg shadow-md px-6 py-8 border border-12 border-gray-100 hover:bg-[#1D4ED8] hover:text-white hover:transition duration-2000 ease-in-out hover:scale-105">
            <h3 className="text-xl font-bold text-[22px] mb-2">
              {option.heading}
            </h3>
            <p className="text-[#64748B] text-base mb-4 group-hover:text-white">{option.description}</p>
            <div className="flex items-center mb-4">
              <span className="mr-2 text-6xl font-semibold">{option.price}</span>
              <span className="text-base font-light">{option.month}</span>
            </div>
            <div className="w-full">
            <button className="mt-4 px-4 py-2 rounded border-[1.5px] border-[#1D4ED8] w-full h-[44px] bg-white text-[#1D4ED8] text-base font-semibold">
              Get Started Now
            </button>
            </div>
            <br />
            <br />
            <div className="flex flex-wrap">
              {option.features_available && option.features_available.map((feature) => (
                <div key={feature} className="mr-4 mb-2 flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E8EDFB] flex items-center justify-center">
                  <img src={Tick} alt="check-icon" className="w-3 h-3" />
                </div>
                  <span className="ml-2 text-base font-medium">{feature}</span>
                </div>
              ))}
              {option.features_unavailable && option.features_unavailable.map((feature) => (
                <div key={feature} className="mr-4 mb-2 flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#F7F8F9] flex items-center justify-center">
                  <img src={Cross} alt="cross-icon" className="w-3 h-3" />
                </div>
                  <span className="ml-2 text-[#A0ABBB] text-base font-medium group-hover:text-white">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
    );
}

export default flashcardsSection;