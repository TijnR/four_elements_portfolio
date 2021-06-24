import React from 'react'
import styled from 'styled-components'
import { Container } from '../template/Container';
import { container } from '../../theme/container';
import LinkItem from '../atoms/LinkItem'

const InnerContainer = styled.div`
    display: flex;
    max-width: ${container.maxWidthText}px;
    width: 100%;    
    justify-content: space-between;
`

function DualLinkContainer({firstName, firstTo, secondName, secondTo}) {
    return (
        <Container bg="black" style={{paddingTop: 0}}>
            <InnerContainer>
            <LinkItem arrow="left" to={firstTo}>{firstName}</LinkItem>
            <LinkItem arrow="right" to={secondTo}>{secondName}</LinkItem>
            </InnerContainer>
        </Container>
    )
}

export default DualLinkContainer
