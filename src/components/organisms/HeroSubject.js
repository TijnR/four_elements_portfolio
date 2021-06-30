import React from 'react'
import styled from 'styled-components';
import HeroContainer from '../template/HeroContainer';
import { container } from '../../theme/container';
import HeroScrollButton from '../molecules/HeroScrollButton';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

import { HeroInner} from './Hero';
import Video from '../atoms/Video';



const ImageContainer = styled.div`
position: absolute;
display: grid;
place-items: center;
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
    font-size: ${typography.fontSizes["6xl"]};
    font-weight: ${typography.fontWeights.extrabold};
    text-transform: uppercase;

    @media(max-width: 768px) {
        font-size: ${typography.fontSizes["5xl"]};
    }
`

const SVideo = styled(Video)`
    height: 100%;
`

function HeroSubject({img, src, title}) {
    return (
        <HeroContainer >
            <ImageContainer>
                {src ? <SVideo thumb={img} src={src} header/> : <SImage src={img}/> }
            </ImageContainer>
            <HeroInner>
                <STextContainer>
                    <SText>{title}</SText>
                </STextContainer>
                <HeroScrollButton/>
            </HeroInner>
            
        </HeroContainer>
    )
}

export default HeroSubject
