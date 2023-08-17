import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import ProductCard from '../ProductCard'

const EmblaCarousel = (props) => {
  const { slides, options, images, links, titles } = props
  // const [emblaRef] = useEmblaCarousel(options)
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })

  return (
    <div className="embla01-thumbs">
      <div className="embla01-thumbs__viewport" ref={emblaThumbsRef}>
        <div className="embla01-thumbs__container" style={{transform: "translate3d(0px, 0px, 0px);"}}>
          {slides.map((index) => (
            <div className="embla01-thumbs__slide" key={index} >
              {/* <div className="embla01-thumbs__slide__number">
                <span>{index + 1}</span>
              </div> */}
              <ProductCard img = {images[index % images.length]} link={links[index % links.length]} title={titles[index % titles.length]}/>
              {/* <img
                className="embla01-thumbs__slide__img"
                src={images[index % images.length]}
                alt="Your alt text"
              /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
