"use client"; // This is a client component
import Image from 'next/image'
import React, {useState} from 'react'
import { CgMenu } from 'react-icons/cg'
import {IoCloseCircleOutline} from 'react-icons/io5';
import MainButton from './Buttons/MainButton'
import styled from 'styled-components'
import { device } from '@/app/lib/breakpont'
//import 'reactjs-popup/dist/index.css';

const Nav = () => {
    const [nav, setNav] = useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  return (
    <NavBar>
        <a className='logo' href='/' ><Image src='/images/logo2.png' alt='logo' width={100} height={40}/></a>
        <ul className='navlist-pc'>
            <li><a href='#moments'>Moments</a></li>
            <li><a href='#recents'>Recents</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#unveil' >Unveil</a></li>
        </ul>
        <MainButton secondary target='onTab' className='modal-button' href='https://app.wingriders.com/swap/ada/2d587111358801114f04df83dc0015de0a740b462b75cce5170fc935434749/constantProduct' text='Book Now' />
        
        <CgMenu onClick={toggleNav} className='menu-button' id='menu' size='4rem' />
        

        <div className={nav? 'navlist navlist-mobile': 'navlist'}>
            <div className='top-mobile'>
                <Image src='/images/logo.png' alt='samson dat' width={100} height={100} /> 
                <IoCloseCircleOutline onClick={closeNav} 
                className='menu-button-mobile' id='menu' size='4rem' />
            </div>
            <ul>
                <li onClick={closeNav}><a href='#moments'>Moments</a></li>
                <li onClick={closeNav}><a href='#recents'>Recents</a></li>
                <li onClick={closeNav}><a href='#services'>Services</a></li>
                <li onClick={closeNav}><a href='#unveil' >Unveil</a></li>
            </ul>
            {/* <Popup trigger={<button className='modal-button'>Connect</button>} position="right center" modal>
            <div className='popup'>Coming Soon!!</div>
            </Popup> */}
            <MainButton href='' secondary text='Book Now' />
        </div>

    </NavBar>
  )
}

export default Nav

const NavBar = styled.nav`
    
    .modal-button {
        border-radius: 8px;
        border: 1px;
        width: 200px;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 13px 24px;
        box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.08);
        transition: all 0.3s ease-in-out;
        background-color: #01CC9C;
        color: white;
        &:hover 
        { background-color: #3d70c1; 
        border: 3px solid white;
        outline: 3px solid #4287f5;
        }
    }
    .menu-button {
        display: none;
    }
    position: absolute;
    top: 0;
    z-index: 100;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;

    &> .action-button {
        width: 200px;
    }     

    ul {
            display: flex;
            justify-content: space-between;
            list-style: none;
            font-weight: 700;
            color: white;
            min-width: 35%;
            gap: 0.5rem;
            
    }
    .navlist-mobile {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: #704b07;
        background-image: url('/images/services3.jpg');
        display: flex;
        flex-direction: column;
        z-index: 100;
        padding: 2%;
        ul{
            width: 100%;
            display: flex;
            flex-direction: column;
            text-align: start;
            margin: 2rem 0;
        }
        li {
            margin: 1rem;
            font-size: 1.5rem;
            cursor: pointer;
            color: white;
        }
        .action-button {
            display: inline-block;
            width: 70%;
            text-align: center;
        }
    }
    .navlist {
        display: none;
    }
    .top-mobile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    @media screen and (${device.md}) {
        .navlist-pc {
            display: none;
        }
        .menu-button {
            display: flex;

        }
        .navlist-mobile {
            display: block;
        }
        &> .action-button {
            display: none;
        }
    }
`