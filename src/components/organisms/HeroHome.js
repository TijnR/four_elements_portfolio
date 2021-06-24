import React, {useState} from 'react'
import styled from 'styled-components';
import HeroContainer from '../template/HeroContainer';
import { container } from '../../theme/container';
import HeroScrollButton from '../molecules/HeroScrollButton';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { HomeLinkItem } from '../atoms/LinkItem';
import { ReactComponent as VLines } from '../../assets/icons/v-lines.svg'
import barrySample from '../../assets/images/barry/barry-sample.jpg'
import justinSample from '../../assets/images/justin/justin-sample.jpg'
import kimSample from '../../assets/images/kim/kim-sample.jpg'
import tijnSample from '../../assets/images/tijn/tijn-sample.jpg'

import { HeroInner, HeroTextInner, TextContainer, UpperHeader, Header, LinksContainer } from './Hero';


const HeroSvgContainer = styled.div`
    width: 63%;
    right: 0;
    position: absolute;
    height: 100%;  
    transition: 300ms ease-out;
    transition-property: opacity;
    /* display: ${props => props.activeImageIndex === props.id ? 'inherit' : 'none'}; */
    opacity: ${props => props.activeImageIndex === props.id ? 1 : 0};
    pointer-events: none;

    @media (max-width: 768px) {
       display: none
    }

    svg {
        height: 100%;
        width: 100%;
        transform: scale3d(1.6, 1.6, 1.5);
        transform-origin: left; 
        opacity: 0.8;

        g{
           height: 100%;
           width: 100%;
        }
    }
`

const HeroMediaContainer = styled.div`
    position: absolute;
    width: 60%;
    height: 100%;
    right: 0;
    clip-path: polygon(0 0%, 100% 0%, 100% 100%, 40% 100%);

    @media (max-width: 768px) {
       display: none
    }
`

const HeroInnerMedia = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
`

const HeroMedia = styled.img`
    height: 100%;
    /* object-fit: cover; */
    object-position: 40% 80%;
    filter: brightness(0.8);
    position: absolute; 
    transition: 300ms ease-out;
    transition-property: opacity;
    opacity: ${props => props.activeImageIndex === props.id ? 1 : 0};
    pointer-events: none;
`




function HeroHome() {    
    const [activeImageIndex, setActiveImageIndex] = useState(0)

    const handleHover = (i) => {
        setActiveImageIndex(i)
    }

    return (
        <HeroContainer>
            <HeroInner>
            <HeroTextInner>
                <TextContainer>
                    <UpperHeader>Four Elements</UpperHeader>
                    <Header>Eén portfolio<span>.</span><br></br>
                    Vier Studenten<span>.</span><br></br>
                    Twaalf leerdoelen<span>.</span>
                    </Header>
                    <LinksContainer>
                        <HomeLinkItem setActiveImageIndex={handleHover} index={1} to={'/barry'} underline>Barry Boogert</HomeLinkItem>
                        <HomeLinkItem setActiveImageIndex={handleHover} index={2} to={'/justin'} underline>Justin van Wijk</HomeLinkItem>
                        <HomeLinkItem setActiveImageIndex={handleHover} index={3} to={'/kim'} underline>Kim van der Waart</HomeLinkItem>
                        <HomeLinkItem setActiveImageIndex={handleHover} index={4} to={'/tijn'} underline>Tijn Roozen</HomeLinkItem>
                    </LinksContainer>
                </TextContainer>
            </HeroTextInner>
        
            <HeroScrollButton/>
            </HeroInner>
            <HeroSvgContainer activeImageIndex={activeImageIndex} id={0}>
                <VLines/>
            </HeroSvgContainer>
            <HeroMediaContainer>
                <HeroInnerMedia>
                    <HeroMedia activeImageIndex={activeImageIndex} id={1} src={barrySample}/>
                    <HeroMedia activeImageIndex={activeImageIndex} id={2} src={justinSample}/>
                        <HeroMedia activeImageIndex={activeImageIndex} id={3} src={kimSample}/>
                    <HeroMedia activeImageIndex={activeImageIndex} id={4} src={tijnSample}/>
                </HeroInnerMedia>
            </HeroMediaContainer>
        
        </HeroContainer>
    )
}

export default HeroHome
