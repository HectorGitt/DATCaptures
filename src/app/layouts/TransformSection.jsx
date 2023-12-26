"use client"; // This is a client component
import React from 'react'
import styled from 'styled-components'
import MainButton from '../components/Buttons/MainButton';

const TransformSection = () => {
  return (
    <Transform>
        <div>
          <h1 data-aos='zoom-in'>Transform Your Moments into Memories with us</h1>
          <p data-aos='fade-up'>Ready to transform your precious moments into timeless memories? Contact us today to discuss your photography needs and schedule a session that captures the essence of your story.</p>
          <MainButton text='Book Now' dataAos='fade-up' href='/book' />
        </div>
    </Transform>
  )
}

export default TransformSection

const Transform = styled.div`
  display: flex;
  min-height: 80vh;
  justify-content: center;
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    max-width: 650px;
    width: 100%;
    margin: 0 4rem;
  }
`