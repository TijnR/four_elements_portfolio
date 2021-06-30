import React from 'react'
import styled from 'styled-components'
import { Container, InnerContainer } from '../template/Container'

const ImageContainer = styled.section`
    width: 100%;
    height: auto;
    min-height: 100%;
    overflow: hidden;   
`

const SImage = styled.img`
    height: auto;
    width: 100%;
    object-fit: cover;
    opacity: 1;
`

function SectionImage({img}) {
    return (
        <ImageContainer>
            <SImage src={img}/>
        </ImageContainer>
    )
}

export function SectionImageInline({img, bg}) {
    return (
        <Container bg={bg}>
            <InnerContainer>
                <ImageContainer>
                    <SImage src={img}/>
                </ImageContainer>
            </InnerContainer>
        </Container>
    )
}

export default SectionImage
