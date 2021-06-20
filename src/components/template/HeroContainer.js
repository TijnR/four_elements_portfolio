import React from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/colors';
import { container } from '../../theme/container';

const SHeroContainer = styled.section`
    height: 100vh;
    width: 100%;
    background-color: ${colors.background};
    padding: ${container.paddingV}px ${container.paddingH}px;
    display: grid;
    place-items: center;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
        padding: ${container.paddingVMobile} ${container.paddingHMobile};
    }
`


function HeroContainer({children}) {
    return (
        <SHeroContainer>
            {children}
        </SHeroContainer>
    )
}

export default HeroContainer
