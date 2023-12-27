"use client"; // This is a client component
import React from 'react'
import styled from 'styled-components'
import MainButton from '../components/Buttons/MainButton';
import Image from 'next/image';
import { device } from '../lib/breakpont';

const UnveilSection = () => {
  return (
    <Unveil id='unveil'>
      <h1 data-aos='zoom-in'>Unveiling the Beauty of <span>Great Life</span></h1>
      <div className='secondary'>
        <Image className='tilt-left' data-aos='fade-down-right' src='/images/showcase.jpg' width={160} height={200} alt=' ' />
        <div className='action' data-aos='fade-up'>
          <p>
              A creative sanctuary where the boundless world of visual storytelling comes to life. With an unwavering passion for capturing moments that transcend the ordinary.
          </p>
          <MainButton text='Book Now' href='/book' />
        </div>
        <Image className='tilt-right' src='/images/showcase2.jpg' data-aos='fade-down-left' width={160} height={200} alt=' ' />
      </div>
    </Unveil>
  )
}

export default UnveilSection;

const Unveil = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 4rem 0;  
  text-align: center;
  h1 {
    font-size: 5rem;
    span {
      color: orange;
      display: block;
    }
  }
  
  .secondary {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 2rem 0;
    p {
      max-width: 35rem;
      margin: 2rem 0;
      color: #c0c0c0cd;
    }
  }
  .tilt-left {
    transform: rotate(-30deg);
  }
  .tilt-right {
    transform: rotate(30deg);
  }

  @media screen and (${device.md}) {
    h1 {
      font-size: 2.5rem;
    }
    .secondary {
      flex-direction: column;
    }
    .tilt-right {
      margin-top: 3rem;
    }
  }
    
  
`

