import React, {useState} from 'react'
import styled, {keyframes} from 'styled-components';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const goDown = keyframes`
    0% {
    transform: scale3d(0, 1, 1);
    transform-origin: 0% 0%;
    }

    50% {
    transform: scale3d(1, 1, 1);
    transform-origin: 0% 0%;
    }
    51% {
    transform: scale3d(1, 1, 1);
    transform-origin: 100% 0%;

    }

    100% {
        transform: scale3d(0, 1, 1);
        transform-origin: 100% 0%;
    }
`

const Container = styled.button`
    position: absolute;
    z-index: 9;
    display: flex;
    align-items: center;
    bottom: -95px;
    right: 0;
    transform: rotate(90deg);
    transform-origin: right;
    padding-top: ${spacing.xs};

    :hover {
        div {
            div {
                animation: ${goDown} 1500ms cubic-bezier(1, 0, 0, 1) infinite;
            }
        }
    }

`

const SButton = styled.span`
color: ${colors.white};
font-weight: 500;
padding-right: ${spacing.md};

    

`

const SLine = styled.div`
    height: 1px;
    width: 45px;
    margin-top: 2px;
    background-color: ${colors.white};
`

function HeroScrollButton() {


    const handleClick = () => {
        let height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;

        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        let margin = width < 1025 ? 70.25 : 110;

        window.scroll({
            top: height - margin,
            left: 0,
            behavior: 'smooth'
        });
    }


    return (
        <Container>
            <SButton onClick={() => handleClick()}>SCROLL DOWN</SButton>
            <div><SLine line={true}></SLine></div>
        </Container>
    )
}

export default HeroScrollButton
