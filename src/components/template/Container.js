import React from 'react'
import Styled from 'styled-components'
import { container } from '../../theme/container';

export const Container = Styled.section`
    width: 100%;
    padding: ${props => props.pv || container.paddingV} ${props => props.ph || container.paddingH};

`

export const InnerContainer = Styled.div`
    max-width: ${container.maxWidth};
`
