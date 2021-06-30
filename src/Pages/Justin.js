import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import PersonalHero from '../components/organisms/PersonalHero';
import { justinPersonal } from '../data/personalPageData'
import ProjectsSection from '../components/molecules/ProjectsSection';
import DualLinkContainer from '../components/molecules/DualLinkContainer';

function Justin() {
    return (
        <>
            <Navigation activeIndex={2} activeIcon={2}/>
            <PersonalHero name={justinPersonal.name} prof={justinPersonal.prof} text={justinPersonal.text} leerdoelen={justinPersonal.leerdoelen} portfolio={justinPersonal.portfolio}/>
            <ProjectsSection leerdoelen={justinPersonal.leerdoelen}/>
            <DualLinkContainer firstName="Barry Boogert" firstTo="/barry" secondName="Kim van der Waart" secondTo="/kim"/>
            <Footer/>
        </>
    )
}

export default Justin
