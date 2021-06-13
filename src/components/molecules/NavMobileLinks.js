import React from 'react'
import Styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom';
import { typography } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';

const showUp = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const SContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

const MobileLink = Styled.span`
    font-size: ${typography.fontSizes.['4xl']};
    color: ${colors.white};
    text-transform: uppercase;
    opacity: 0; 
    animation: ${props => props.open ? showUp : 'none' } 600ms ${props => props.delay}s linear forwards;
`

const MobileLinkSmall = Styled.span`
    font-size: ${typography.fontSizes.lg};
    color: ${colors.white};
    padding: ${spacing.xxs} 0;
    opacity: 0; 
    animation: ${props => props.open ? showUp : 'none' } 600ms ${props => props.delay}s linear forwards;
`
const MobileGroup = Styled.div`
    padding: ${spacing.xs} 0;
    display: flex;
    flex-direction: column;
`

function NavMobileLinks({listData, open}) {
    const displayLinks = listData.map((item, index) => {
        let displaySmallLinks
        if(item.dropdownItems) {
                displaySmallLinks = item.dropdownItems.map((item, i) => {
                return (
                     <Link to={item.to} key={i}>
                        <MobileLinkSmall open={open} delay={(index / 4) + (i / 20)}>{item.name}</MobileLinkSmall>
                    </Link>
                )
            })
        }
        return (
            <MobileGroup key={index}>
                <Link to={item.to} key={-1}>
                    <MobileLink open={open} delay={(index / 4)} >{item.name}</MobileLink>
                </Link>
                {displaySmallLinks && displaySmallLinks}
            </MobileGroup>
        )
        
    })

    return (
        <SContainer>
            {displayLinks}
        </SContainer>
    )
}

export default NavMobileLinks
