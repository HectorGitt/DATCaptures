"use client"; // This is a client component
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import { device } from '../lib/breakpont';

const Footer = () => {
  return (
    <FooterCont>
        <div  className='footer-main'>
            <div>
                <div className="logo-cont">
                    <Image src='/images/logo.png' fill={true} alt=' ' />
                </div>
                <p>
                    Welcome to Dat Captures, where we believe that every moment holds a story worth capturing.
                </p>
            </div>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Stories</li>
                <li>Work</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="copy">
            <span>&copy; DAT Photo. All rights Reserved.</span>
            <ul>
                <li>
                    <i className='fab fa-facebook-f'></i>
                </li>
            </ul>
        </div>
    </FooterCont>
  )
}

export default Footer;

const FooterCont = styled.footer`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 40vh;
    padding: 0 2rem;
    .footer-main  {
        display: flex;
        & > div {
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }
        ul {
            display: flex;
            flex-direction: column ;
            justify-content: space-between;
            align-items: end;
            flex: 1;
            gap: 0.7rem;
            font-size: 1.5rem;

        }
        p {
            max-width: 25rem ;
        }
        
        .logo-cont {
            position: relative;
            width: 100px;
            height: 100px;
            border: 2px solid orange;
            border-radius: 50%;
        }

    }
    .copy {
        text-align: center;
        margin-top: 2rem;
        color: #c0c0c0cd;
    }
    @media screen and  (${device.sm}) {
        text-align: center;
        .footer-main {
            flex-direction: column;
            align-items: center;
            gap: 2rem;
            
            & > div {
                align-items: center;
            }

            
            ul {
                align-items: center;
                text-align: center;
            }
            p {
                
            }
        }
        

    }

`