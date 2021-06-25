import React from 'react'
import styled from 'styled-components';
import { Container } from '../template/Container';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { container } from '../../theme/container';

const SInner = styled.div`
    display: grid;
    place-items: center;
    max-width: ${container.maxWidthText}px;
    width: 100%;
`
const ProcesContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const STitle = styled.span`
    font-family: ${typography.fonts.heading};
    font-weight: ${typography.fontWeights.extrabold};
    letter-spacing: normal;
    font-size: ${typography.fontSizes.xl};
`

const LaneContainer = styled.div`
    width: 100%;
    padding: ${spacing.xxxxl};
`

const StepContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: ${props => props.side === 'right' ? "flex-end" : "flex-start"};

    :last-child {
        div {
            border-color: transparent;
        }
    }

    @media(max-width: 768px) {
        justify-content: flex-start;
    }
`

const StepSideContainer = styled.div`
    width: 50%;
    position: relative;
    padding: 0 ${spacing.xxxl};
    padding-bottom: ${spacing.xxl};
    border-right: ${props => props.side === 'right' ? "0px" : "2px"} solid ${colors.primary};
    border-left: ${props => props.side === 'right' ? "2px" : "0px"} solid ${colors.primary};
    margin-right: ${props => props.side === 'right' ? "0.8px" : "0"};
    margin-left: ${props => props.side === 'right' ? "0" : "0.8px"};
    text-align: ${props => props.side === 'right' ? "start" : "end"};

    :after {
        content: '';
        position: absolute;
        top: 0;
        right: ${props => props.side === 'right' ? "auto" : "-9px"};
        left: ${props => props.side === 'right' ? "-9px" : "auto"};
        width: 16px;
        height: 16px;
        min-width: 16px;
        min-height: 16px;
        border-radius: 50%;
        background-color: ${colors.black};
    }

    @media(max-width: 768px) {
        width: 100%;
        border-right: none;
        border-left: 2px solid ${colors.primary};
        text-align: start;
        padding: 0 ${spacing.md};
        padding-bottom: ${spacing.lg};
        margin: 0;

        :after {
            right: 0;
            left: -9px;
        }   
    }

`

const SText = styled.p`
    line-height: ${typography.lineHeights.base};
    margin: 0;  
    font-size: ${typography.fontSizes.lg};
`

function ProcesLane({steps}) {
    const displaySteps = steps.map((step, i) => {
        if(i % 2 === 0){
            return(
            <StepContainer key={i} side="right">
                            <StepSideContainer side="right"><SText>{step}</SText></StepSideContainer>
            </StepContainer>
            )
        } else {
            return(
            <StepContainer key={i}>
                <StepSideContainer><SText>{step}</SText></StepSideContainer>
            </StepContainer>
            )
        }
    })

    return (
        <Container>
            <SInner>
                <ProcesContainer>
                    <STitle>MIJN PROCES</STitle>
                    <LaneContainer>
                        {displaySteps}
                    </LaneContainer>
                </ProcesContainer>
            </SInner>
        </Container>
    )
}

export default ProcesLane
