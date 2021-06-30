import React from 'react'
import styled from 'styled-components'
import { Container, InnerTextContainer } from '../template/Container';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { SpanTitle } from '../atoms/Titles';


const SInnerTextContainer = styled(InnerTextContainer)`
    
    @media (max-width: 1024px) {
        flex-direction: column
    }
`

const STextContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 45%;
    padding: ${spacing.xl} 0;

    @media (max-width: 1024px) {
        width: 100%;
        padding: ${spacing.md} 0;
    }

    :first-child {
        margin-right: 5rem;
    }
`

const SText = styled.p`
    font-size: ${typography.fontSizes.lg};
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
            <SInnerTextContainer>
                {displayItems}
            </SInnerTextContainer>
        </Container>
    )
}

export default ReflectieSectie
