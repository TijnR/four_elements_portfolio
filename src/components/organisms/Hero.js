import styled from 'styled-components';
import { container } from '../../theme/container';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';

export const HeroInner = styled.div`
    max-width: ${container.maxWidth}px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    position: relative;
`

export const HeroTextInner = styled.div`
    max-width: ${container.maxWidthText}px;
    width: 100%;
    display: flex;
    align-items: center;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 700px;

`

export const UpperHeader = styled.h3`
    color: ${colors.primary};
    font-size: ${typography.fontSizes.topHeader};
    text-transform: uppercase;
    margin: 0;
`

export const Header = styled.h1`
    color: ${colors.white};
    font-size: ${typography.fontSizes.header};
    line-height: 1.3;
    margin: ${spacing.md} 0;

    span {
        color: ${colors.primary}
    }

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: column;
`