import React from 'react'
import styled from 'styled-components'
import { container } from '../../theme/container';
import { colors } from '../../theme/colors';

export const Container = styled.section`
    width: 100%;
    padding: ${props => props.pv || container.paddingV}px ${props => props.ph || container.paddingH}px;
    display: grid;
    place-items: center;
    background-color: ${props => props.bg === "black" ? colors.background : colors.white};
`

export const InnerContainer = styled.div`
    max-width: ${container.maxWidth}px;
    width: 100%;
`

export const InnerTextContainer = styled.div`
    max-width: ${container.maxWidthText}px;
    width: 100%;
`
