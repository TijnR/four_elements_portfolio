import React from 'react'
import styled from 'styled-components'
import { Container } from '../template/Container';
import { container } from '../../theme/container';
import LinkItem from '../atoms/LinkItem'
import Justin from '../../pages/Justin';

const InnerContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.flexStart === "right" ? "row-reverse" : "row"};
    max-width: ${container.maxWidthText}px;
    width: 100%;    
    justify-content: space-between;
`


function DualLinkContainer({firstName, firstTo, secondName, secondTo, flexStart}) {
    return (
        <Container bg="black" style={{padding: "40px 0"}}>
            <InnerContainer flexStart={flexStart}>
                { firstName && <LinkItem arrow="left" to={firstTo} just="left">{firstName}</LinkItem>}
                { secondName && <LinkItem arrow="right" to={secondTo} just="right">{secondName}</LinkItem>}
            </InnerContainer>
        </Container>
    )
}

export default DualLinkContainer
