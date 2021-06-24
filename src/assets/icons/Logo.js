import React from 'react'
import styled from 'styled-components'
import { ReactComponent as ReactLogo } from './logo.svg'
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';

const ImageContainer = styled.div`
  svg {
    width: 100px;
    
    g {
      transition: 300ms ease-out;
      transition-property: stroke;

      path {
        :nth-child(1) {
          stroke: ${props => props.activeIcon === 3 && colors.primary}
        }
        :nth-child(2) {
          stroke: ${props => props.activeIcon === 1 && colors.primary}
        }
        :nth-child(3) {
          stroke: ${props => props.activeIcon === 1 && colors.primary}
        }
        :nth-child(4) {
          stroke: ${props => props.activeIcon === 4 && colors.primary}
        }
        :nth-child(5) {
          stroke: ${props => props.activeIcon === 4 && colors.primary}
        }
        :nth-child(6) {
          stroke: ${props => props.activeIcon === 2 && colors.primary}
        }
      }
    }
    :hover {
      g {
      stroke: ${colors.primary};
      }
    }

    
  }
`

export const Logo = ({activeIcon}) => {
  return (
    <Link to="/">
      <ImageContainer activeIcon={activeIcon}>
        <ReactLogo />
      </ImageContainer>
    </Link>
  )
}