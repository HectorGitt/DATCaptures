"use client"; // This is a client component
import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { device } from '../lib/breakpont';

const Moment = () => {
  return (
    <MomentCont id='moments' data-aos='fade-down-left'>
        <h1 data-aos='zoom-in'>Your Beautiful Moment is Everything</h1>
        <div className='grid' data-aos='fade-down'>
            <div className='left' data-aos='fade-right' >
                <Image src='/images/hero2.jpg' width={900}  height={320} alt='' />
            </div>
            <div className='right' data-aos='fade-left'>
                <p>From capturing mesmerising landscapes to telling compelling narratives.<br/> My photographs encapsulate the essence of the moment, evoking emotions and leaving a lasting impact.</p>
               
                <Image src='/images/moment-right2.jpeg' width={900} height={562.5} alt='' data-aos='fade-left' />
            </div>
        </div>
        
    </MomentCont>
  )
}

export default Moment

const MomentCont = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr ;
    padding: 0 4rem;
    
    h1 {
        grid-row:1/3 ;
        font-size: 5rem;
    }
    .grid {
        display: flex;
        gap: 2rem;
        justify-content: space-between;
    }
    .right, .left {
        display: flex;
        flex: 1;
        
    }
    .left {
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
    .right {
        flex-direction: column;
        justify-content: space-around;
        flex: 1;
        gap: 1rem;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    @media screen and (max-width: 1000px) {
        
        .grid {
            flex-direction: column;
        }
        .left, .right {
            align-items: center;
        }

    }

    @media screen and (${device.md}) {
        margin: 0 10px;
        text-align: center;
        padding: 0;
        
    }

    @media screen and (${device.sm}) {
        text-align: center;
        padding: 0;
        h1 {
            font-size: 2.5rem;
        }
    }
    
`