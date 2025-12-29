import React from 'react';
import image from '../assets/home/JLL_Bengaluru_Prestige Marigold_8257_EXT_1 (1).jpg';
import Button from '../components/button/buttonMain';

// Overview Component
export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
        Prestige Marigold
Phase 2 <p>   </p>

          </span>
          <br />
          
            <span>
            <p>A thoughtfully
planned plotted
development located off
NH 44, at Bettenahalli near
Yelahanka, Bengaluru.
Spread across 716
residential plots, offered in
convenient sizes, this new
phase continues the vision
of creating a well-organised
residential community with
modern infrastructure and
ample open space</p>
            <br/>
            <p>These plots in Bangalore come with wide internal roads and underground utilities. Whether you’re planning to construct your dream home or invest in residential plots near Bangalore Airport, Prestige Marigold is the perfect place.</p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => setContactModal(!contactmodal)} // Toggle contact modal on button click
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Prestige Green Brook"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
