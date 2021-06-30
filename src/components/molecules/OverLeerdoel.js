import React from 'react'
import styled from 'styled-components'
import {Container} from '../template/Container';
import { container } from '../../theme/container';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

const SContainer = styled(Container)`
    background-color: ${colors.grey};
`

const SInner = styled.div`
    display: flex;
    width: 100%;
    max-width: ${container.maxWidthText}px;

    @media(max-width: 768px) {
        flex-direction: column;
    }

`

const OverContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-right: 5rem;
`

const AllData = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const DataContainer = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
`

const STitle = styled.span`
    font-family: ${typography.fonts.heading};
    font-weight: ${typography.fontWeights.extrabold};
    letter-spacing: normal;
`

const BigTitle = styled(STitle)`
    font-size: ${typography.fontSizes.xl};
   
`

const SmallTitle = styled(STitle)`
    font-size: ${typography.fontSizes.sm};
`

const SText = styled.p`
    max-width: 750px;
    line-height: ${typography.lineHeights.base};
`

const LowerText = styled.p`
    margin-top: 5px;

`



function OverLeerdoel({text, rol, tools, technieken}) {
    return (
        <SContainer>
            <SInner>
                <OverContainer>
                    <BigTitle>OVER HET LEERDOEL</BigTitle>
                    <SText>
                     {text} 
                    </SText>
                </OverContainer>
                <AllData>
                    <DataContainer>
                        <SmallTitle>Rol</SmallTitle>
                        <LowerText>
                            {rol}
                         </LowerText>
                    </DataContainer>
                    <DataContainer>
                    <SmallTitle>Tools</SmallTitle>
                        <LowerText>
                       {tools}
                         </LowerText>
                    </DataContainer>
                    <DataContainer>
                    <SmallTitle>Technieken</SmallTitle>
                        <LowerText>
                            {technieken}
                         </LowerText>
                    </DataContainer>
                </AllData>
            </SInner>
        </SContainer>
    )
}

export default OverLeerdoel
