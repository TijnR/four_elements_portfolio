import React from 'react'
import styled from 'styled-components';
import HeroContainer from '../template/HeroContainer';
import { container } from '../../theme/container';
import HeroScrollButton from '../molecules/HeroScrollButton';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

import slide7 from '../../assets/images/kim/leerdoelA/Slide7.jpg'
import { HeroInner} from './Hero';



const ImageContainer = styled.div`
position: absolute;
top: 0;
height: 0;
left: 0;
right: 0;
height: 100%;
min-height: 100%;
overflow: hidden;   
`

const SImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 0.4;
    filter: brightness(0.7);
`

const STextContainer = styled.div`
    height: 100%;
    width: 100%;
    display: grid;
    place-items: center;
    text-align: center;
`

const SText = styled.h1`
    color: ${colors.white};
    font-size: ${typography.fontSizes.bigboy};
    text-transform: uppercase;

    @media(max-width: 768px) {
        font-size: ${typography.fontSizes["5xl"]};
    }
`

function HeroSubject({img}) {
    return (
        <HeroContainer >
            <HeroInner>
                <STextContainer>
                    <SText>Visual Identity</SText>
                </STextContainer>
                <HeroScrollButton/>
            </HeroInner>
            <ImageContainer>
               <SImage src={img}/> 
            </ImageContainer>
            
        </HeroContainer>
    )
}

export default HeroSubject
