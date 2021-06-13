import React, {useState, useEffect} from 'react'
import Styled from 'styled-components'
import { Logo } from '../../assets/icons/Logo';
import { container } from '../../theme/container';
import { colors } from '../../theme/colors';
import NavLinkDesk from '../molecules/NavLinkDesk';
import NavMobileLinks from '../molecules/NavMobileLinks';
import { listItems } from '../../listItems';

const NavContainer = Styled.nav`
    width: 100%;
    position: fixed;
    padding: 40px ${container.paddingH}px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;

    :after {
    content: ''; 
	width: 100%; 
	height: 100%;
    transition: 300ms ease-out;
    background: ${colors.background};
	opacity: ${props => props.scrolling === 'true' ? 1 : 0}; 
	position: absolute; 
	top: 0; 
	left: 0;
	z-index: -1;
    }

    
`

const InnerNav = Styled.div`
    max-width: ${container.maxWidth}px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    * {
        z-index: 11;
    }
`

const ItemsContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        display: none;  
    }
    
` 

const DropdownBackground = Styled.div`
    position: fixed;
    height: 180px;
    top: 0;
    left: 0;
    right: 0;
    transform: scale3d(1, 0, 1);
    background: ${colors.background};
    z-index: 9; 

    transition: 400ms ease-out;
    transform: ${props => props.open ? 'scale3d(1, 1, 1)' : 'scale3d(1, 0, 1)'};
    transform-origin: top;

    :after {
    content: ''; 
	width: 100%; 
	height: 100%;
    background: ${colors.background};
	opacity: ${props => props.scrolling ? 1 : 0}; 
	position: absolute; 
	top: 0; 
	left: 0;
	z-index: -1;
    }
`

const MobileBackground = Styled.div`
    position: fixed;
    height: 100vh;
    top: 0;
    left: 0;
    right: 0;
    transform: scale3d(1, 0, 1);
    background: ${colors.background};
    z-index: 9; 
    transition: 600ms ease-out;
    transform: ${props => props.open ? 'scale3d(1, 1, 1)' : 'scale3d(1, 0, 1)'};
    transform-origin: top;
    display: flex;
    flex-direction: column;
    overflow: none;
    padding: 0 ${container.paddingHMobile}px;
    padding-top: 100px;

    @media (min-width: 769px) {
        display: none;  
    }

`

const MobileMenuButton = Styled.span`
    font-weight: 500;
    color: ${props => props.active ? colors.primary : colors.offWhite};
    transition: 300ms ease-out;
    transition-property: color; 
    cursor: pointer;

    @media (min-width: 769px) {
        display: none;  
    }   
`


function Navigation({activeIndex, activeSubjectIndex}) {
    const [dropOpen, setDropOpen] = useState(false)
    const [scrolling, setScrolling] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)
    

    const displayListItem = listItems.map((item, i) => {
        return activeIndex === i ? 
        <NavLinkDesk linkData={item} setDropOpen={setDropOpen} key={i} activeSubjectIndex={activeSubjectIndex || null} active/> :
        <NavLinkDesk linkData={item} setDropOpen={setDropOpen} key={i}/>
    })

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    useEffect(() => {
       mobileOpen ?
        document.body.style.overflow = "hidden" :
        document.body.style.overflow = "auto"
   
    }, [mobileOpen]);

    const handleScroll = () => {
        setScrolling(window.pageYOffset > 10 ? true : false)
    }


    return (
        <NavContainer scrolling={scrolling ? 'true' : 'false'}>
            <InnerNav>
                <Logo />
                
                <ItemsContainer>
                {displayListItem}
                </ItemsContainer>

                <MobileMenuButton onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? 'CLOSE' : 'MENU'}
                </MobileMenuButton>
                
            </InnerNav>

            <MobileBackground open={mobileOpen}>
             <NavMobileLinks open={mobileOpen} listData={listItems}/>
            </MobileBackground>
            <DropdownBackground scrolling={scrolling ? 'true' : 'false'} open={dropOpen}/>   

        </NavContainer>
    )
}

export default Navigation
