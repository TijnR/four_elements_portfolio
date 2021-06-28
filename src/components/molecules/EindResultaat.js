import React from 'react'
import styled from 'styled-components'
import { Container, InnerContainer } from '../template/Container'
import { container } from '../../theme/container';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { SpanTitle } from '../atoms/Titles';
import Video from '../atoms/Video';
import {LinkItemRedirect} from '../atoms/LinkItem';

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

const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: ${spacing.md};

    div{
        padding: none;
    }
`

const ImageGridContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;


`

const SquareImageContainer = styled.div`
    width: calc(50% - 20px);
    height: 500px;
    margin-bottom: 40px;

    @media(max-width: 768px){
        width: 100%;
        margin-bottom: 20px;
    }
`

const SquareImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
`

function EindResultaat({text, images, videos, links, smallImages}) {
    const displayImages = images.map((img, i) => {
        return(
            <ImageContainer key={i}>
                {videos ? <Video thumb={img} src={videos[i]}/> : <SImage src={img}/> }
            </ImageContainer>
        )
    })

    const displayLinks = links?.map((link, i) => {
        return(
          
                <LinkItemRedirect key={i} href={link.href} underline>
                    {link.name}
                </LinkItemRedirect>
        
        )
    })

    const displaySmallImages = smallImages?.map((img, i) => {
        return(
                <SquareImageContainer key={i}>
                    <SquareImage src={img}/>
                </SquareImageContainer>
        )
    })

    return (
        <Container bg="black">
            <InnerContainer justifyContent="center" alignItems="center" textAlign="center" flex="column">
            <SpanTitle colorWhite>HET EINDRESULTAAT</SpanTitle>
            <SPara>{text}</SPara>
            {links &&
                <LinksContainer>
                {displayLinks}
                </LinksContainer>
            }
            {smallImages && 
                <ImageGridContainer>
                    {displaySmallImages}
                </ImageGridContainer>
            
            }
                
            {displayImages}
            </InnerContainer>
        </Container>
    )
}

export default EindResultaat
