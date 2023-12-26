"use client"; // This is a client component
import styled from 'styled-components'
import MainButton from '../components/Buttons/MainButton';
import { device } from '../lib/breakpont';
import ReactTyped from 'react-typed';

const HeroSection = () => {
  return (
    <Hero>
        <div className='hero-content'>
            <h1>
                Capture Your {" "}
                <ReactTyped strings={["Sweet Experiences","Every Moments"]} typeSpeed={100} loop />    
            </h1>
            {/* <MainButton dataAos='zoom-in' text='Book Now' href='/book' /> */}
        </div>
    </Hero>
  )
}

export default HeroSection

const Hero = styled.div`
    display:flex;
    background: url('/images/moment-left2.jpg');
    max-height: fit-content;
    height: 100vh;
    min-height: 37rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    

    .hero-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        text-align: center;
        width: 100%;
        padding: 0 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
            font-size: 4rem;
            font-weight: 700;
            margin-bottom: 1rem;
            max-width: 35rem;
            text-shadow: 1px 1px 1px #000000;
        }
    }

    @media screen and (${device.md}) {
        .hero-content {
            h1 {
                font-size: 2.5rem;
            }
        }
    }
`