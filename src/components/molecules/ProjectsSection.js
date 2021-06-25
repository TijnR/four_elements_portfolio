import React, {useState, useEffect, useRef} from 'react'
import styled from 'styled-components'
import { typography } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { Container } from '../template/Container';
import { container } from '../../theme/container';
import { Link } from 'react-router-dom';
import { spacing } from '../../theme/spacing';

import barrySample from '../../assets/images/barry/barry-sample.jpg'
import justinSample from '../../assets/images/justin/justin-sample.jpg'
import kim1 from '../../assets/images/kim/leerdoelA/kaartjes-mockup.jpg'
import kim2 from '../../assets/images/kim/leerdoelB/digital-wordmark.jpg'
import kimSample from '../../assets/images/kim/kim-sample.jpg'
import tijnSample from '../../assets/images/tijn/tijn-sample.jpg'

const InnerContainer = styled.div`
    display: flex;
    max-width: ${container.maxWidthText}px;
    width: 100%;    
    flex-wrap: wrap;
    justify-content: space-between;
`

const LeerdoelContainer = styled.div`
    width: 30%;
    height: 600px;
    position: relative;

    @media (max-width: 1024px) {
        width: 100%;
        margin-bottom: ${spacing.xxl};
    }
`

const ImageContainer = styled.div`
position: relative;
height: 100%;
width: 100%;
max-width: 100%;
max-height: 100%;
overflow: hidden;   

/* :after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: ${colors.black};
    opacity: 0.2;
} */
`

const SImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    filter: ${props => props.hovered ? 'grayscale(0)' : 'grayscale(1)'};
    opacity: 0.5;
    transform: ${props => props.hovered ? 'scale3d(1.1 , 1.1, 1)' : 'scale3d(1, 1, 1)'};
    transition: 200ms ease-out;
    transition-property: transform filter;
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
    z-index: 5;
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
    font-size: ${typography.fontSizes.xl};
    font-family: ${typography.fonts.heading};
    text-transform: uppercase;
    letter-spacing: normal;
`

const ProjectName = styled.span`
    color: ${colors.primary};
    letter-spacing: normal;
    font-size: ${typography.fontSizes.sm};
    font-weight: ${typography.fontWeights.medium};
`


function ProjectsSection({leerdoelen}) {

    const displayLeerdoel = leerdoelen.map((leerdoel, i) => {
        return(
            <ProjectItemBig key={i} to={leerdoel.to} name={leerdoel.name} img={leerdoel.img} index={i}/>  
        )
    })

    return (
        <Container bg="black" ref={container} style={{paddingBottom: 20}}>
            <InnerContainer>
                {displayLeerdoel}
            </InnerContainer>
        </Container>
    )
}


const ProjectItemBig = ({to, name, index, img}) => {
    const [activeItem, SetActiveItem] = useState(false) 

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
        source = kim1
        break;
        case 8: 
        source = kim2
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


    return(
                <LeerdoelContainer onMouseEnter={() => SetActiveItem(true)} onMouseLeave={() => SetActiveItem(false)}>
                    <Link to={to}>
                        <ImageContainer>
                            <SImage hovered={activeItem} src={source}/>
                        </ImageContainer>
                        <TextContainer hovered={activeItem}>
                            <NameText>{name}</NameText>
                            <ProjectName>Leerdoel {index + 1}</ProjectName>
                        </TextContainer>
                    </Link>
                </LeerdoelContainer>
       
    )
}

export default ProjectsSection