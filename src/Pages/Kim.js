import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import PersonalHero from '../components/organisms/PersonalHero';
import { kimPersonal } from '../data/personalPageData'
import ProjectsSection from '../components/molecules/ProjectsSection';
import DualLinkContainer from '../components/molecules/DualLinkContainer';

function Kim() {
    return (
        <>
            <Navigation activeIndex={3} activeIcon={3}/>
            <PersonalHero name={kimPersonal.name} prof={kimPersonal.prof} text={kimPersonal.text} leerdoelen={kimPersonal.leerdoelen} portfolio={kimPersonal.portfolio}/>
            <ProjectsSection leerdoelen={kimPersonal.leerdoelen}/>
            <DualLinkContainer firstName="Justin van Wijk" firstTo="/justin" secondName="Tijn Roozen" secondTo="/tijn"/>
            <Footer/>
        </>
    )
}

export default Kim
