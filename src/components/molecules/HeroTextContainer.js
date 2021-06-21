import React from 'react'
import styled from 'styled-components'
import { container } from '../../theme/container';
import { Container, InnerTextContainer } from '../template/Container';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 550px;
    padding-bottom: 50px;
`

const TextTitle = styled.h4`
    font-size: ${typography.fontSizes.md};
    margin: ${spacing.sm} 0;
`


function HeroTextContainer() {
    return (
        <Container pv={20}>
            <InnerTextContainer>
                <TextContainer>
                    <TextTitle>LEREN. ONTWIKKELEN. TOEPASSEN.</TextTitle>
                    <p>
                    Tijdens de minor KB-86 aan De Haagse Hogeschool werkten de vier studenten 
uit deze projectgroep ieder aan drie individuele leerdoelen.  Zij startten hiermee een nieuwe persoonlijke ontwikkeling om hun vaardigheden en technieken in een bepaald onderwerp te verbreden. Met behulp van de opgedane kennis staan de studenten sterker in hun schoenen en zijn zij beter voorbereid om een toegevoegde 
waarde te leveren aan hun toekomstige collega’s.
                    </p>
                </TextContainer>
            </InnerTextContainer>
        </Container>
    )
}

export default HeroTextContainer
