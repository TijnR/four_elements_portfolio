import React from 'react'
import styled from 'styled-components'
import { Container, InnerContainer } from '../template/Container'
import { container } from '../../theme/container';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { SpanTitle } from '../atoms/Titles';

const SPara = styled.p`
    color: ${colors.white};
    margin-top: 0;
    padding: ${spacing.lg};
    padding-top: ${spacing.sm};
    max-width: 500px;
    line-height: ${typography.lineHeights.base};
`

const ImageContainer = styled.section`
    width: 100%;
    height: auto;
    min-height: 100%;
    margin: ${spacing.xl} 0;
    overflow: hidden;   
`

const SImage = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
    opacity: 1;
`


function EindResultaat({text, images}) {
    const displayImages = images.map((img, i) => {
        return(
            <ImageContainer key={i}>
                <SImage src={img}/>
            </ImageContainer>
        )
    })

    return (
        <Container bg="black">
            <InnerContainer justifyContent="center" alignItems="center" textAlign="center" flex="column">
            <SpanTitle colorWhite>HET EINDRESULTAAT</SpanTitle>
            <SPara>{text}</SPara>
            {displayImages}
            </InnerContainer>
        </Container>
    )
}

export default EindResultaat
