/* eslint-disable no-unused-vars */
import React from 'react';

const DonationCard = ({donate}) => {
    const {id,picture,title,category,category_bg_color,text_button_bg_color,card_bg_color,price} = donate || {}
    return (
        <div>
            <div style={{background:card_bg_color}} className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={picture}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <h6 style={{background:category_bg_color}} className="inline-flex  rounded  mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
        <div style={{color:text_button_bg_color}}>
            {category}
        </div>
      
    </h6>
    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      <div style={{color:text_button_bg_color}}>
        {title}
      </div>
    </h4>
    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      <div style={{color: text_button_bg_color}}>
        ${price}
      </div>
    </p>
    <a className="inline-block" href="#">
      <button style={{background:text_button_bg_color}}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-white-500/10 active:bg-white-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
        
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default DonationCard;