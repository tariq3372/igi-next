
import EmblaCarousel from '../components/homeCarousel/EmblaCarousel';

import "../components/homeCarousel/css/base.css"
import "../components/homeCarousel/css/embla.css"
import "../components/homeCarousel/css/sandbox.css"


const HomeCarousel = ({ dict }) => {


  const Carousel = dict.homeCarousel;
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = Carousel.length
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="sandboxhome">
      <section id='home' className="sandbox__carouselhome">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} info={Carousel} learn={dict.learnMore} />
      </section>
    </div>
  )
}

export default HomeCarousel