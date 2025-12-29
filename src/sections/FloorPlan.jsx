
// importing slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import pic1 from '../assets/floor-plans/floorPlanGodrejPark.png';
import pic2 from '../assets/floor-plans/floorPlanGodrejPark.png';
import pic3 from '../assets/floor-plans/floorPlanGodrejPark.png';
import pic4 from '../assets/floor-plans/floorPlanGodrejPark.png';

const images = [
  { src: pic1, caption: "2 BHK" },
  { src: pic2, caption: "2.5 BHK" },
  { src: pic3, caption: "3 BHK" },
  { src: pic4, caption: "3.5 BHK" },
  { src: pic4, caption: "4.5 BHK" },
];

function NextArrow(props) {
  // eslint-disable-next-line react/prop-types
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <svg width="1.5em" 
            height="1.5em" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            color="currentColor" 
            data-role="none" 
            className="slick-arrow slick-next" 
            style={{ display: 'block' }} 
            // eslint-disable-next-line react/no-unknown-property
            // currentSlide="0" slideCount="4"
            >
              <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="black" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <svg width="1.5em" 
            height="1.5em" 
            viewBox="0 0 24 24" 
            strokeWidth="1.5" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            color="currentColor" 
            data-role="none" 
            className="slick-arrow slick-prev" 
            style={{ display: 'block' }} 
      
            // currentSlide="0" 
            // slideCount="4"
            >
                <path d="M21 12L3 12M3 12L11.5 20.5M3 12L11.5 3.5" stroke="black" strokeLinecap="round" strokeLinejoin="round">

                </path>
      </svg>
    </div>
  );
}


export const FloorPlan = ({ setContactModal, contactmodal }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.05,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
        },
      },
    ],
  };


  

  return (
    <div className="pb-12 px-4 md:px-24 mx-auto bg-godrejgreen1 py-10 md:pt-20" id="FloorPlan">
      <div className="text-3xl md:text-5xl font-medium font-subheading w-full text-black">
        Floor Plan

        {/* <button
                    className=" top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-14 py-3 text-white bg-godrejgreen2  text-center rounded-lg text-xs md:text-lg font-medium"
                    onClick={() => {
                      setContactModal(true);
                    }}
                  >ihkfyt</button> */}
      </div>
      
      <div className="gap-0 md:py-6">
        <Slider {...settings}>
          {images.map((photo, index) => (
            <div key={index} className="relative w-40">
              <div>
                  <img
                    src={photo.src}
                    alt={`Photo ${index + 1}`}
                    className="px-5 py-5 w-full h-[30vh] md:h-[60vh]"
                    style={{ objectFit: 'contain' }}
                  />
                  <button
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-14 py-3 text-white bg-godrejgreen2  text-center rounded-lg text-xs md:text-lg font-medium"
                    onClick={() => {
                      setContactModal(true);
                      // console.log('Button clicked'); 
                    }}
                  >
                    Floor Plan
                  </button>
              </div>
                  <div className="text-left ml-6 text-godrejgreen2 text-xl md:text-2xl font-semibold mt-2">
                      {photo.caption}
                  </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
