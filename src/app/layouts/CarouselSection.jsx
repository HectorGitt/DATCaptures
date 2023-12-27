"use client"; // This is a client component
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselSection = () => {
  return (
    <CarouselCont id='recents'>
        <h1 data-aos='fade-down-right'>Our Recent Works</h1>
        <Carousel showThumbs={false} showArrows={true} showIndicators={true} infiniteLoop={true} autoPlay={true} transitionTime={1000} centerMode={true}  >
            <div>
                <img src='/images/flex2.jpg' /* width={500} height={281.25} */ alt='' />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="/images/flex2.jpg" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="/images/flex2.jpg" />
                <p className="legend">Legend 3</p>
            </div>
            <div>
                <img src="/images/flex2.jpg" />
                <p className="legend">Legend 4</p>
            </div>
            <div>
                <img src="/images/flex2.jpg" />
                <p className="legend">Legend 5</p>
            </div>
            <div>
                <img src="/images/flex2.jpg" />
                <p className="legend">Legend 6</p>
            </div>
        </Carousel>
    </CarouselCont>
  )
}

export default CarouselSection

const CarouselCont = styled.div`
    min-height: 80vh;
    margin-top: 10rem;
    h1 {
        text-align: center;
        margin: 2rem 0;
    }
`