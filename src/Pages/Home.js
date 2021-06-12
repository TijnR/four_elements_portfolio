import React from 'react'
import styled from 'styled-components'
import { colors } from '../theme/colors';
import { typography } from '../theme/typography';

const Title = styled.h1`
    color: ${props => props.color || colors.background};
    font-size: ${typography.fontSizes.['6xl']};
`

const HeroPlaceHolder = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${colors.background};
    display: flex;
    align-items: center;
    justify-content: center;
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
        <div>
           <HeroPlaceHolder><Title color={colors.white}>Hero PlaceHolder</Title></HeroPlaceHolder>
           <TextPlaceHolder><Title>Text PlaceHolder</Title></TextPlaceHolder>
        </div>
    )
}

export default Home
