import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';
import { Logo } from '../assets/icons/Logo';
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import HeroHome from '../components/organisms/HeroHome';
import TextHighway from '../components/organisms/TextHighway';

const Title = styled.h1`
    color: ${props => props.color || colors.background};
    font-size: ${typography.fontSizes.['6xl']};
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: ${typography.fontSizes.['3xl']};
  }
`

const TextPlaceHolder = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
`

function Home() {
    return (
        <>
           <Navigation activeIndex={0}/>
           <HeroHome/>
           <TextHighway/>
           <TextPlaceHolder><Title>Text PlaceHolder</Title></TextPlaceHolder>
           <Footer/>
        </>
    )
}

export default Home
