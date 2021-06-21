import React, {useState} from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

import barrySample from '../../assets/images/barry-sample.jpg'
import justinSample from '../../assets/images/justin-sample.jpg'
import kimSample from '../../assets/images/kim-sample.jpg'
import tijnSample from '../../assets/images/tijn-sample.jpg'
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
        source = barrySample
        break;
        case 2: 
        source = barrySample
        break;
        case 3: 
        source = barrySample
        break;
        case 4: 
        source = justinSample
        break;
        case 5: 
        source = justinSample
        break;
        case 6: 
        source = justinSample
        break;
        case 7: 
        source = kimSample
        break;
        case 8: 
        source = kimSample
        break;
        case 9: 
        source = kimSample
        break;
        case 10: 
        source = tijnSample
        break;
        case 11: 
        source = tijnSample
        break;
        case 12: 
        source = tijnSample
        break;
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
