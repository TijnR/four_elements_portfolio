import React, { useRef } from 'react'
import styled, {keyframes} from 'styled-components'
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { container } from '../../theme/container';

const slide = keyframes`
    0% {
        margin-left: 0;
    } 

    50% {
        margin-left: -3750px;
    }

    51% {
        margin-left: -3750px;
    }

    100% {
        margin-left: 0;
    }
`

const slideReverse = keyframes`
    0% {
        margin-left: -3750px;
    } 

    50% {
        margin-left: 0;
    }

    51% {
        margin-left: 0;
    }

    100% {
        margin-left: -3750px;
    }
`

const SContainer = styled.section`
    width: 100%;
    padding: ${spacing.xxxl};
    display: flex;
    flex-direction: column;
    padding: ${container.paddingV}px 0;
    overflow: hidden;
`

const TextContainer = styled.div`
    font-size: 40px;
    white-space: nowrap;
    word-break: none;
    overflow: scroll;
    pointer-events: none;
    padding-right: 100%;
    scrollbar-width: none;

    ::-webkit-scrollbar {
        display: none;
    }

   
`

const UpperText = styled(TextContainer)`
 animation: ${slide} 300000ms linear infinite;
`

const LowerText = styled(TextContainer)`
 animation: ${slideReverse} 300000ms linear infinite;
`

const TextWords = styled.span`
    font-size: ${typography.fontSizes.['4xl']};
    text-transform: uppercase;
    font-family: ${typography.fonts.heading};
`

const ThinWords = styled(TextWords)`
    font-weight: ${typography.fontWeights.light};
`

const ThickWords = styled(TextWords)`
    font-weight: ${typography.fontWeights.extrabold};
`
const BlueThinkLine = styled(TextWords)`
    font-weight: ${typography.fontWeights.extrabold};
    color: ${colors.primary};
    padding: ${spacing.lg};
`

const listOfTopics = [
    "Grafisch ontwerp",
    "Webdesign",
    "UX/UI",
    "Web3D",
    "Phaser.js",
    "Automotive Design",
    "Visual Identity",
    "Hand Lettering",
    "Abstract BackGround Animation",
    "React & Typescript",
    "IOS Development",
    "Three.js"
]


function TextHighway() {
    const topText = useRef(null)
    const bottomText = useRef(null)

    const displayAllWords = listOfTopics.map((topic, i) => {
        if(i < 11){
            if(i % 2 === 0){
                return (<ThinWords key={i}>{topic}<BlueThinkLine>-</BlueThinkLine></ThinWords>)
            } else if(i % 2 === 1) {
                return (<ThickWords key={i}>{topic}<BlueThinkLine>-</BlueThinkLine></ThickWords>)
            }
        }
        return (<ThinWords key={i}>{topic}</ThinWords>)
        
    })

    return (
        <SContainer>
            <UpperText ref={topText}>{displayAllWords}</UpperText>
            <LowerText ref={bottomText}>{displayAllWords}</LowerText>
        </SContainer>
    )
}

export default TextHighway
