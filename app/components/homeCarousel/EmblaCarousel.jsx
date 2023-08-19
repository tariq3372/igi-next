import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import Autoplay from 'embla-carousel-autoplay'

import { motion } from 'framer-motion';

const EmblaCarousel = (props) => {
  const { slides, options, info } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay({ delay: 10000 })])
  const onButtonClick = useCallback((emblaApi) => {
    const { autoplay } = emblaApi.plugins()
    if (!autoplay) return
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
  }, [])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  )

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, onButtonClick)

  return (
    <div className="emblahome">
      <div className="embla__viewporthome" ref={emblaRef}>
        <div className="embla__containerhome">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <img
                className="embla__slide__img"
                src={info[index % info.length].image}
                alt="Your alt text"
              />
              <div className='h-full absolute top-0 w-full flex justify-center items-center'>
                  <motion.div className='w-[60%] text-center'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0.5, y: +50 },
                      visible: { opacity: 1, y: 0 }
                    }}
                  >
                    <div className='bg-black/25 p-6 md:px-10 md:py-10 rounded-xl text-white'>
                      <h1 className='text-lg md:text-xl lg:text-4xl font-semibold text-center mb-2.5 lg:mb-4 font-sans'>{info[index % info.length].heading}</h1>
                      <p className='text-xs md:text-md lg:text-md lg:text-lg font-montserrat  font-normal mb-2.5 lg:mb-5'>{info[index % info.length].desc}</p>
                      <div className="w-full flex place-content-center">
                        <a href={info[index % info.length].id} className='text-sm md:text-md py-1 px-3 lg:px-5 lg:py-1 text-magic-potion bg-white border-magic-potion border-2 rounded-full justify-center block place-content-center' >Learn More</a>
                      </div>
                    </div>

                  </motion.div>
                </div>  
            </div>
          ))}
        </div>
      </div>

      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={'embla__dot'.concat(
              index === selectedIndex ? ' embla__dot--selected' : ''
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
