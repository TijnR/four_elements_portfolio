import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { typography } from '../../theme/typography';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg'

const LinkContainer = styled.div`
    display: inline-flex;
    z-index: 5;
    border-bottom: 2px solid ${props => props.underline ?  colors.primary : 'none'};
    margin: ${spacing.xxxs} 0;
    align-items: center;

    :hover {
        span {
            color: ${colors.primary};
            font-style: italic;
        }

        svg {
            transform: translate3d(5px, 0, 0);
        }
    }
`

const LinkText = styled.span`
 font-size: ${typography.fontSizes.xl};
 font-family: ${typography.fonts.heading};
 font-weight: ${typography.fontWeights.extrabold};
 letter-spacing: normal;
 text-transform: uppercase;
 color: ${colors.white};   
 padding: ${spacing.xxxxs} 0;
 transition: 300ms ease-out;
 transition-property: color, font-style;
`

const IconContainer = styled.div`
    width: 10px;
    height: 15px;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: 10px;
        height: 15px;
        transition: 300ms ease-out;
        transition-property: transform;
    }
`

function LinkItem({to, children, arrow, underline}) {
    if(arrow === "right") {
        return (
        <Link to={to} style={{zIndex: 5}}>
            <LinkContainer underline={underline}>
                <LinkText>{children}</LinkText>
                <IconContainer style={{marginLeft: '10px'}}><ChevronRight/></IconContainer>
            </LinkContainer>
        </Link>)
    } else if (arrow === "left") {
        return ( 
        <Link to={to} style={{zIndex: 5}}>
            <LinkContainer underline={underline}>
                <IconContainer style={{marginRight: '10px'}}><ChevronLeft/></IconContainer>
                <LinkText>{children}</LinkText>
            </LinkContainer>
        </Link>)
    } else {
        return (
            <Link to={to} style={{zIndex: 5}}>
                <LinkContainer underline={underline}>
                <LinkText>{children}</LinkText>
                </LinkContainer>
            </Link>
        )
    }
}

export function HomeLinkItem({to, children, underline, index, setActiveImageIndex}) {
    return(
        <Link to={to}>
            <LinkContainer onMouseEnter={() => setActiveImageIndex(index)} onMouseLeave={() => setActiveImageIndex(0)} underline={underline}>
                <LinkText>{children}</LinkText>
                <IconContainer style={{marginLeft: '10px'}}><ChevronRight/></IconContainer>
            </LinkContainer>
        </Link>
    )
}

export default LinkItem
