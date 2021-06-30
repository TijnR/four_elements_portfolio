import React from 'react'
import styled from 'styled-components'
import { container } from '../../theme/container';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { ReactComponent as ChevronUp } from '../../assets/icons/scroll-arrow-up.svg'
import { ReactComponent as ChevronRight } from '../../assets/icons/circle-chevron-right.svg'
import { spacing } from '../../theme/spacing';
import { listItems } from '../../data/listItems';

const FootContainer = styled.footer`
    padding: 40px ${container.paddingH}px;
    background-color: ${colors.background};
    color: ${colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
`

const FootInner = styled.div`
    max-width: ${container.maxWidth}px;
    width: 100%;
    display: flex;
    position: relative;
`

const FootItemsContainer = styled.div`
    display: flex;
    max-width: 900px;

    @media (max-width: 1024px) {
        flex-direction: column; 
    }
`

const MinorSection = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    padding-right: ${spacing.xxl};

    @media (max-width: 1024px) {
        padding-right: 0;
        padding-bottom: ${spacing.xxl};
    }
`

const MinorTitle = styled.h3`
    font-weight: ${typography.fontWeights.extrabold};
    margin: 0;
`
const MinorText = styled.h4`
    font-weight: ${typography.fontWeights.normal};
    font-size: ${typography.fontSizes.lg};
    margin: ${spacing.md} 0;
`

const ItemsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 769px) {
        min-width: 550px;
        width: 550px;
        justify-content: space-between;
    }
`

const ListItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: ${spacing.lg};
    width: 250px;   

    @media (max-width: 768px) {
       width: 100%;
    }
`

const ListItemName = styled.h5`
    margin-top: 0;
    text-transform: uppercase;
    font-weight: ${typography.fontWeights.extrabold};
    color: ${colors.white};
    transition: 300ms ease-out;
    transition-property: color;

    :hover {
        color: ${colors.primary}
    }
`

const ListSubItem = styled.div`
    display: inline-flex;
    align-items: center;
    margin-bottom: ${spacing.xxs};
    color: ${colors.white};

    :hover {
        span{
            color: ${colors.primary};
        }
    }
`
const ListSubItemName = styled.span`
    color: ${colors.white};
    transition: 300ms ease-out;
    transition-property: color;
`

const ListSubItemIcon = styled.div`
    width: 10px;
    height: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 2px;
    margin-right: ${spacing.xs};

    svg {
        width: 10px;
        height: 10px;

         g{
             fill: ${colors.primary};
         }
    }
`

const ScrollIcon = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    svg {
        width: 40px;
        height: 40px;
        g{
            transition: 300ms ease-out;
            transition-property: stroke;
        }
    }

    :hover {
        g {
            stroke: ${colors.primary}
        }
    }
`

function Footer() {

    const handleClickEvent = () => {
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    const displayItems = listItems.map((item, index) => {
        if(index > 0){
        const displaySubItems = item.dropdownItems.map((item ,i) => {
                return(
                    <Link to={item.to} key={i}>
                        <ListSubItem>
                            <ListSubItemIcon><ChevronRight /></ListSubItemIcon>
                            <ListSubItemName>{item.name}</ListSubItemName>
                        </ListSubItem>
                    </Link>
                )
        })
        

        return(
            <ListItemContainer key={index}>
                <Link to={item.to} key={-1}>
                    <ListItemName>{item.name}</ListItemName>
                </Link>
                {displaySubItems}
            </ListItemContainer>
        )
        } else {
            return null
        }
    })

    return (
        <FootContainer>
            <FootInner>
                    <FootItemsContainer>
                        <MinorSection>
                            <MinorTitle>CMD-K86</MinorTitle>
                            <MinorText>Visual Design & Front-end Development</MinorText>
                        </MinorSection>
                        <ItemsContainer>
                         {displayItems}
                        </ItemsContainer>
                    </FootItemsContainer>
                    <ScrollIcon onClick={handleClickEvent}><ChevronUp/></ScrollIcon>
            </FootInner>
        </FootContainer>
    )
}

export default Footer
