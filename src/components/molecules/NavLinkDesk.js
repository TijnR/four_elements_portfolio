import React, { useState } from 'react'
import Styled from 'styled-components'
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import { Link } from 'react-router-dom';
import { ReactComponent as ReactLogo } from '../../assets/icons/chevron-down.svg'

const SContainer = Styled.div`
    display: inline-flex;
    position: relative;
    align-items: center;

    :first-child {
        padding-right: ${spacing.lg};
    }

    svg {
        transition: 300ms ease-out;
                transition-property: transform;
    }
    
    path {
                transition: 300ms ease-out;
                transition-property: stroke;
            }

    :hover {
        svg{
            transform: rotate(-90deg);
            transform-origin: center;

            path {
                stroke: ${colors.primary};
            } 
        }
        
            
            
    }
`

const NavItemDesk = Styled.span`
    font-family: degular, sans-serif;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    text-decoration: none;
    font-size: ${typography.fontSizes.lg};
    
    color: ${props => props.active === true ? colors.primary : colors.white};
    margin: 0 ${spacing.xxs} 0 ${spacing.lg};
    transition: 300ms ease-out;
    transition-property: color;
    display: inline-block;
    position: relative;

    :hover {
      color: ${colors.primary};
    }

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

const DropDownContainer = Styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-radius: 4px;
    height: 100px;
    bottom: -100px;
    text-align: right;
    right: 0;
    display: ${props => props.open ? 'flex' : 'none'};
    white-space: nowrap;
`

const DropDownLinks = Styled.span`
    font-weight: 500;
    padding: ${spacing.sm} 0;
    color: ${props => props.active ? colors.primary : colors.offWhite};
    transition: 300ms ease-out;
    transition-property: color;

    :hover {
        color: ${colors.primary}
    }
`

const DropDownIcon = Styled.div`
    width: 12px;
    height: 12px;
    padding-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 12px;
    height: 12px;
    }
`





function NavLinkDesk({linkData, active, activeSubjectIndex, setDropOpen}) {
    const [dropdownOpen, setDropDownOpen] = useState(false)
    const {to, name, dropdownItems} = linkData

    const displayDropDownLinks = dropdownItems && dropdownItems.map((item, i) => {
        return activeSubjectIndex === i ? 
        <Link to={item.to} key={i}>
            <DropDownLinks key={i} active>
                {item.name}
            </DropDownLinks>
        </Link> :
        <Link to={item.to} key={i}>   
            <DropDownLinks key={i}>
                {item.name}
            </DropDownLinks>
        </Link>
    })

    const handleMouseEvent = (open) => {
        if(dropdownItems){
            setDropDownOpen(open)
            setDropOpen(open)
        }
    }



    return (
        <SContainer onMouseEnter={() => handleMouseEvent(true)}
        onMouseLeave={() => handleMouseEvent(false)} >
            <Link to={to}>
                <NavItemDesk  active={active}>
                {name}
                </NavItemDesk>
            </Link>
            {dropdownItems !== undefined &&
                <>
                <DropDownIcon>
                    <ReactLogo />
                </DropDownIcon>
                <DropDownContainer open={dropdownOpen}>
                    {displayDropDownLinks}
                </DropDownContainer>
                </>
            }
            
        </SContainer>
    )
}

export default NavLinkDesk
