import React, {useState} from 'react'
import styled from 'styled-components';
import HeroContainer from '../template/HeroContainer';
import { container } from '../../theme/container';
import HeroScrollButton from '../molecules/HeroScrollButton';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import LinkItem from '../atoms/LinkItem';
import { HeroInner, HeroTextInner, TextContainer, UpperHeader, Header, LinksContainer } from './Hero';
import CanvasPerson from './persondotted/CanvasPerson';


const PersonalText = styled.p`
    color: ${colors.white};
    margin-top: 0;
    margin-bottom: ${spacing.lg};
    font-size: ${typography.fontSizes.xl};
    max-width: 550px;
`

const PersonCanvasContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    right: 0;
    z-index: 1;
`

function PersonalHero({prof, name, text, leerdoelen, person}) {

    const displayLinks = leerdoelen.map((l,i) => {
        return(<LinkItem size="big" key={i} arrow="right" to={l.to} underline>{l.name}</LinkItem>)
    })

    return (
        <HeroContainer>
        <HeroInner>
        <HeroTextInner>
            <TextContainer>
                <UpperHeader>{prof}</UpperHeader>
                <Header>{name}<span>.</span>
                </Header>
                <PersonalText>{text}</PersonalText>
                <LinksContainer>
                    {displayLinks}
                </LinksContainer>
            </TextContainer>
        </HeroTextInner>
    
        <HeroScrollButton/>
        </HeroInner>

        <PersonCanvasContainer>
            <CanvasPerson person={person}/>
        </PersonCanvasContainer>
    </HeroContainer>
    )
}

export default PersonalHero
