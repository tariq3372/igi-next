import { useTranslation } from "react-i18next";

import en from '../lng/en.json'
import ar from '../lng/ar.json'

import EmblaCarousel from '../components/homeCarousel/EmblaCarousel';

import "../components/homeCarousel/css/base.css"
import "../components/homeCarousel/css/embla.css"
import "../components/homeCarousel/css/sandbox.css"


const HomeCarousel = () => {
  const { t, i18n } = useTranslation();

  const Carousel = i18n.language === 'Arabic' ? ar.homeCarousel: en.homeCarousel;
  const OPTIONS = { loop: true }
  const SLIDE_COUNT = Carousel.length
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return (
    <div className="w-full h-screen">
    <section id='home' className="sandbox__carousel">
      <EmblaCarousel slides={SLIDES} options={OPTIONS} info={Carousel} />
    </section>
  </div>
  )
}

export default HomeCarousel