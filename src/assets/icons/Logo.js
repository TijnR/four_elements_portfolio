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
    }
    :hover {
      g {
      stroke: ${colors.primary};
      }
    }

    
  }
`

export const Logo = () => {
  return (
    <Link to="/">
      <ImageContainer>
        <ReactLogo />
      </ImageContainer>
    </Link>
  )
}