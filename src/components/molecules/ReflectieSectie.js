import React from 'react'
import styled from 'styled-components'
import { Container, InnerTextContainer } from '../template/Container';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { container } from '../../theme/container';
import { spacing } from '../../theme/spacing';
import { SpanTitle } from '../atoms/Titles';


const STextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: ${spacing.xl} 0;
`

const SText = styled.p`
    font-size: ${typography.fontSizes.lg};
    padding-right: 5rem;
    line-height: ${typography.lineHeights.base};
`

function ReflectieSectie({items}) {
    const displayItems = items.map((item, i) => {
        return(
            <STextContainer key={i}>
                    <SpanTitle>{item.title}</SpanTitle>
                    <SText>
                       {item.text} 
                    </SText>
            </STextContainer>
        )
    })

    return (
        <Container>
            <InnerTextContainer>
                {displayItems}
            </InnerTextContainer>
        </Container>
    )
}

export default ReflectieSectie
