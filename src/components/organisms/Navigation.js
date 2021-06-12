import React from 'react'
import Styled from 'styled-components'
import { Logo } from '../../assets/icons/Logo';
import { container } from '../../theme/container';
import { Link } from 'react-router-dom';
import { colors } from '../../theme/colors';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

import NavLinkDesk from '../molecules/NavLinkDesk';

const NavContainer = Styled.nav`
    width: 100%;
    position: fixed;
    padding: 40px ${container.paddingH}px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(2px);
`

const InnerNav = Styled.div`
    max-width: ${container.maxWidth}px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const ItemsContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
` 



const listItems = [
    {to: '/', name: 'home'}, 
    {to: '/barry', name: 'barry', dropdownItems: [
        {to: '/barry/grafisch-ontwerp', name: 'Grafisch ontwerp'},
        {to: '/barry/webdesign', name: 'Webdesign'},
        {to: '/barry/UXUI', name: 'UX/UI'}
    ]}, 
    {to: '/justin', name: 'justin', dropdownItems: [
        {to: '/justin/web-3D', name: 'Web - 3D'},
        {to: '/justin/phaserjs', name: 'Phaser.js'},
        {to: '/justin/automotive-design', name: 'Automotive Design'}
    ]}, 
    {to: '/kim', name: 'kim', dropdownItems: [
        {to: '/kim/visual-identity', name: 'Visual Identity'},
        {to: '/kim/hand-lettering', name: 'Hand Lettering'},
        {to: '/kim/abstract-background-animation', name: 'Abstract Background Animation'}
    ]}, 
    {to: '/tijn', name: 'tijn', dropdownItems: [
        {to: '/tijn/react-typescript', name: 'Web - 3D'},
        {to: '/tijn/ios-development', name: 'Phaser.js'},
        {to: '/tijn/threejs-react', name: 'Three.js & React-Three-Fiber'}
    ]}
]




function Navigation({activeIndex, activeSubjectIndex}) {
    const displayListItem = listItems.map((item, i) => {
        return activeIndex === i ? 
        <NavLinkDesk linkData={item} key={i} activeSubjectIndex={activeSubjectIndex || null} active/> :
        <NavLinkDesk linkData={item} key={i}/>
    })

    return (
        <NavContainer>
            <InnerNav>
                <Logo />
                
                <ItemsContainer>
                {displayListItem}
                </ItemsContainer>


                
            </InnerNav>
        </NavContainer>
    )
}

export default Navigation
