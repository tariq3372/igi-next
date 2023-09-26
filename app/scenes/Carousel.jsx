import React, { useState, useEffect } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const DCarousel = ({ dict, autoSlide = true }) => {
  const c = dict.homeCarousel;
  const l = dict.learnMore;

  const autoSlideInterval = 20000;

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + c.length) % c.length; // Ensure looping
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % c.length; // Ensure looping
    setCurrentSlide(newIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    let slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [currentSlide, autoSlide]);

  return (
    <section
      id="home"
      className="min-w-full lg:min-h-screen relative group snap-x snap-mandatory"
    >
      <div
        className="h-[60vh] lg:min-h-screen bg-center bg-cover duration-500 z-10 flex items-center snap-center"
        style={{
          backgroundImage: `url(${c[currentSlide].image})`,
        }}
      >
        <div
          className="slide-img w-full py-60 lg:py-60 font-serif px-[60px] lg:px-[350px] slides"
          style={{
            transform: 'translateX(0%)',
            transition: 'transform 0.5s ease',
          }}
        >
          <div className="bg-black/25 p-6 md:px-10 md:py-10 rounded-xl text-white">
            <h1 className="text-xl md:text-xl lg:text-4xl font-semibold text-center mb-2.5 lg:mb-4 font-sans">
              {c[currentSlide].heading}
            </h1>
            <p className="text-sm md:text-md lg:text-md lg:text-lg font-montserrat font-normal mb-4 lg:mb-5">
              {c[currentSlide].desc}
            </p>
            <div className="w-full flex place-content-center">
              <a
                href={c[currentSlide].redirect}
                className="text-sm md:text-md py-1 px-3 lg:px-5 lg:py-1 text-magic-potion bg-white border-magic-potion border-2 rounded-full justify-center block place-content-center"
              >
                {l}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 p-2 bg-black/20 rounded-full cursor-pointer">
        <AiOutlineArrowLeft className='fill-white' onClick={prevSlide} width={400} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 p-2 bg-black/20 rounded-full cursor-pointer">
        <AiOutlineArrowRight className='fill-white' onClick={nextSlide} width={400} />
      </div>

      <div className="absolute bottom-4 left-0 right-0">
        <div className="flex items-center justify-center gap-6">
          {c.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                setCurrentSlide(i);
              }}
              className={`
                transition-all w-10 h-1 bg-white  cursor-pointer
                ${currentSlide === i ? 'p-1' : 'bg-opacity-40'}
              `}
            ></div>
          ))}
        </div>
        </div>

    </section>
  );
};

export default DCarousel;
