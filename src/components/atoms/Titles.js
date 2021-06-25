import styled from 'styled-components'
import { typography } from '../../theme/typography';
import { colors } from '../../theme/colors';


export const SpanTitle = styled.span`
    font-family: ${typography.fonts.heading};
    font-weight: ${typography.fontWeights.extrabold};
    letter-spacing: normal;
    font-size: ${typography.fontSizes.xl};
    color: ${props => props.colorWhite ? colors.white : colors.black};
`