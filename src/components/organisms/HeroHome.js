import React from 'react'
import styled from 'styled-components';
import HeroContainer from '../template/HeroContainer';
import { container } from '../../theme/container';
import HeroScrollButton from '../molecules/HeroScrollButton';

const HeroInner = styled.div`
    max-width: ${container.maxWidth}px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 1px dotted green;
`




function HeroHome() {    
    return (
        <HeroContainer>
            <HeroInner>
            <h1>Hero</h1>
        
            <HeroScrollButton/>
            </HeroInner>
        
        </HeroContainer>
    )
}

export default HeroHome
