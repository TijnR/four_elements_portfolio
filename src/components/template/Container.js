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
    display: flex;
    flex-direction: ${props => props.flex ? props.flex : "flex"};   
    text-align: ${props => props.textAlign ? props.textAlign : "start"};   
    justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
    align-items: ${props => props.alignItems ? props.alignItems : "flex-start"};
    width: 100%;
`

export const InnerTextContainer = styled.div`
    max-width: ${container.maxWidthText}px;
    display: flex;
    flex-direction: ${props => props.flex ? props.flex : "flex"};   
    text-align: ${props => props.textAlign ? props.textAlign : "start"};   
    justify-content: ${props => props.justifyContent ? props.justifyContent : "flex-start"};
    align-items: ${props => props.alignItems ? props.alignItems : "flex-start"};
    width: 100%;
`
