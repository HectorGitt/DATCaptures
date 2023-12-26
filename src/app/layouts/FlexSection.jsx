"use client"; // This is a client component
import React from 'react'
import styled from 'styled-components'
import MainButton from '../components/Buttons/MainButton';
import Image from 'next/image';
import { device } from '../lib/breakpont';

const FlexSection = ({title, text, imgSrc, imgAlt, alternate}) => {
  return (
    <Flex data-aos={alternate? 'fade-up-left':'fade-up-right'} className={alternate? 'alternate':''}>
        <div>
            <h1>{title}</h1>
            <p>
                {text}
            </p>
            <MainButton text='Book Now' href='/book' />
        </div>
        <div data-aos={alternate? 'fade-up-right':'fade-up-left'} className='image-cont'>
            <Image className='image' src={imgSrc} width={480} height={270} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" alt={imgAlt} />
        </div>
    </Flex>
  )
}

export default FlexSection

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    gap: 3rem;
    h1 {
        font-size: 3rem;
        font-weight: 700;
    }
    & > div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        max-width: 650px;
        width: 100%;
        margin: 0 4rem;
    }
    &.alternate {
        flex-direction: row-reverse;
        .image-cont {
          border: none;
          border-right: 2px solid orange;
          border-bottom: 2px solid orange;
          padding: 2rem 1rem 1rem 0;
        }
    }

    p {
      color: #c0c0c0cd;
    }

    .image-cont {
      border-top: 2px solid orange;
      border-left: 2px solid orange;
      padding: 1rem 0 0 1rem;
      

    }

    @media screen and (${device.md}) {
      margin: 0 10px;
      flex-direction: column;
      align-items: center;
      text-align: center;
      & > div {
        align-items: center;
      }
      &.alternate {
        flex-direction: column;
        .image-cont {
          padding: 1rem;
        }
      }
      .image-cont {
        justify-content: center;
        align-self: center;
        padding: 1rem;
        img {
              max-width: 100%;
              height: auto;
          }
      }
    }


`