"use client"
import { useEffect } from 'react'
import Nav from './components/Nav'
import HeroSection from './layouts/HeroSection'
import Moment from './layouts/Moment'
import FlexSection from './layouts/FlexSection'
import Footer from './layouts/Footer'
import TransformSection from './layouts/TransformSection'
import UnveilSection from './layouts/UnveilSection'
import Services from './layouts/Services'
import CarouselSection from './layouts/CarouselSection'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init({
      offset: 200,
    });
    AOS.refresh();
  }, [])
  
  return (
    <>
    <main>
      <Nav />
      <HeroSection />
      {/* <section>
        <div className="container">
          <div className="row">
            Photography
          </div>
          <div className="row">
            Emotion
          </div>
          <div className="row">
            Capture
          </div>
          <div className="row">
            Moment
          </div>
        </div>
      </section>
      
      
      */}
      <Moment />
      <CarouselSection />
      <Services />
      <FlexSection title={'Painting with Light and Emotion'} text={'Where every photograph is carefully crafted masterpiece that captures the essence of moments through the interplay of light, shadow and raw emotions'} imgSrc={'/images/flex.jpg'} imgAlt={'hero image'} />
      <FlexSection title={'Exploring the Art of Photography'} text={'A creative sanctuary where the boundless world of visual storytelling comes to life. With an unwavering passion for capturing moments that transcend the ordinary.'} imgSrc={'/images/flex2.jpg'} imgAlt={'hero image'} alternate/>
      <UnveilSection />
      <TransformSection/>
    </main>
    <Footer />
    </>
  )
}
