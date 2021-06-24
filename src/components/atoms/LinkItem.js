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
 font-size: ${props => props.size === "big" ? typography.fontSizes.xl : typography.fontSizes.md};
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
    width: ${props => props.size === "big" ? "10px" : "8px"};
    height: ${props => props.size === "big" ? "15px" : "12px"};
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        width: ${props => props.size === "big" ? "10px" : "8px"};
        height: ${props => props.size === "big" ? "15px" : "12px"};
        transition: 300ms ease-out;
        transition-property: transform;
    }
`

function LinkItem({to, children, arrow, underline, size}) {
    if(arrow === "right") {
        return (
        <Link to={to} style={{zIndex: 5}}>
            <LinkContainer underline={underline}>
                <LinkText size={size}>{children}</LinkText>
                <IconContainer size={size} style={{marginLeft: '10px'}}><ChevronRight/></IconContainer>
            </LinkContainer>
        </Link>)
    } else if (arrow === "left") {
        return ( 
        <Link to={to} style={{zIndex: 5}}>
            <LinkContainer underline={underline}>
                <IconContainer size={size} style={{marginRight: '10px'}}><ChevronLeft/></IconContainer>
                <LinkText size={size}>{children}</LinkText>
            </LinkContainer>
        </Link>)
    } else {
        return (
            <Link to={to} style={{zIndex: 5}}>
                <LinkContainer size={size} underline={underline}>
                <LinkText size={size}>{children}</LinkText>
                </LinkContainer>
            </Link>
        )
    }
}



 const LinkTextInline = styled.span`
    /* font-weight: ${typography.fontWeights.extrabold}; */
    color: ${colors.primary};  
    position: relative; 

    &::before {
      content: '';
      position: absolute;
      width: 100%;
      transform: scale3d(0, 1, 1);
      height: 1px;
      bottom: 0;
      left: 0;
      background-color: ${colors.primary};
      transform-origin: bottom right;
      transition: 300ms ease-out;
      transition-property: transform;
    }

    :hover {
      &::before {
        transform: scale3d(1, 1, 1);
        transform-origin: bottom left;
      }
    }
 `

export function InlineLinkItem({children, url}) {
    return(
    <a href={url} style={{zIndex: 5}}>
                <LinkTextInline >{children}</LinkTextInline>
    </a>
    )
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
