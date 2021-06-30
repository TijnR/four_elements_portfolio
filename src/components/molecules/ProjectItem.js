import React, {useState} from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

import barry1 from '../../assets/images/barry/leerdoelA/banner.jpeg'
import barry2 from '../../assets/images/barry/leerdoelB/veb.jpg'
import barry3 from '../../assets/images/barry/leerdoelC/design.jpg'
import justinl1 from '../../assets/images/justin/Leerdoel-1.jpg'
import justinl2 from '../../assets/images/justin/Leerdoel-2.jpg'
import justinl3 from '../../assets/images/justin/Leerdoel-3.jpg'
import kim1 from '../../assets/images/kim/leerdoelA/kaartjes-mockup.jpg'
import kim2 from '../../assets/images/kim/leerdoelB/quote-small.jpg'
import kim3 from '../../assets/images/kim/leerdoelC/proces.jpg'
import tijn1 from '../../assets/images/tijn/leerdoelA/typeS-close.jpg'
import tijn2 from '../../assets/images/tijn/leerdoelB/screen7.jpg'
import tijn3 from '../../assets/images/tijn/leerdoelC/lego.png'

import { Link } from 'react-router-dom';

const SContainer = styled.div`
    min-height: 550px;
    min-width: 375px;
    height: 550px;
    width: 375px;
    position: relative; 
    margin-right: 25px;
    pointer-events: visible;
    

    @media (max-width: 768px) {
        min-height: 450px;
        min-width: 300px;
        height: 450px;
        width: 300px;
        margin-right: 15px;
    }
`

const ImageContainer = styled.div`
position: relative;
height: 100%;
width: 100%;
max-width: 100%;
max-height: 100%;
overflow: hidden;   
`

const SImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const TextContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.4);
    opacity: ${props => props.hovered ? 1 : 0};
    transition: 200ms ease-out;
    transition-property: opacity;

    @media (max-width: 768px) {
        opacity: 1;
    }

`

const NameText = styled.span`
    color: ${colors.white};
    font-weight: ${typography.fontWeights.extrabold};
    font-size: ${typography.fontSizes.lg};
    font-family: ${typography.fonts.heading};
    text-transform: uppercase;
    letter-spacing: normal;
`

const ProjectName = styled.span`
    color: ${colors.primary};
    font-size: ${typography.fontSizes.sm};
    font-weight: ${typography.fontWeights.medium};
`

function ProjectItem({name, projectName, img, to}) {
    const [hovered, setHovered] = useState(false)

    let source

    switch(img) {
        case 1: 
        source = barry1
        break;
        case 2: 
        source = barry2
        break;
        case 3: 
        source = barry3
        break;
        case 4: 
        source = justinl1
        break;
        case 5: 
        source = justinl2
        break;
        case 6: 
        source = justinl3
        break;
        case 7: 
        source = kim1
        break;
        case 8: 
        source = kim2
        break;
        case 9: 
        source = kim3
        break;
        case 10: 
        source = tijn1
        break;
        case 11: 
        source = tijn2
        break;
        case 12: 
        source = tijn3
        break;
        default:
        source = tijn3
        
    }


    return (
        <Link to={to}>
        <SContainer onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <ImageContainer>
                <SImage src={source}/>
            </ImageContainer>

            <TextContainer hovered={hovered}>
                <NameText>{name}</NameText>
                <ProjectName>{projectName}</ProjectName>
            </TextContainer>

        </SContainer>
        </Link>
    )
}

export default ProjectItem
