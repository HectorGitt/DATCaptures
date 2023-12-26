"use client"; // This is a client component
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '../lib/breakpont';

const Services = () => {
  return (
    <ServicesCont id='services'>
      <h1 data-aos='fade-down-right'>Our Services</h1>
      <div className='grid'>
        <div className="image-cont" data-aos='fade-up-right'>
            <Image src='/images/services1.jpg' width={360} height={450} alt='' />
            <h2>Birthday Photography</h2>
        </div>
        <div className="image-cont" data-aos='fade-up'>
            <Image src='/images/services2.jpeg' width={360} height={450} alt='' />
            <h2>Wedding Photography</h2>
        </div>
        <div className="image-cont" data-aos='fade-up-left'>
            <Image src='/images/services3.jpeg' width={360} height={450} alt='' />
            <h2>Event Photography</h2>
        </div>
      </div>
    </ServicesCont>
  )
}

export default Services

const ServicesCont = styled.section`
    padding: 0 2rem;
    .grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
    }
    h1 {
        text-align: center;
        margin: 2rem 0;
    }
    .image-cont {
        position: relative;
    }

    h2 {
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000000a1;
        padding: 1rem 2rem;
        color: white;
        font-size: 1rem;
    }
    @media screen and (${device.md}) {
        margin: 0 10px;
        padding: 0;
        .grid {
            flex-direction: column;
            align-items: center;
        }
        img {
            max-width: 100%;
            height: auto;
        }


    }
`