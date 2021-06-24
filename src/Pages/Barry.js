import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import PersonalHero from '../components/organisms/PersonalHero';
import { barryPersonal } from '../data/personalPageData'
import ProjectsSection from '../components/molecules/ProjectsSection';
import DualLinkContainer from '../components/molecules/DualLinkContainer';

function Barry() {
    return (
        <>
            <Navigation activeIndex={1}/>
            <PersonalHero name={barryPersonal.name} prof={barryPersonal.prof} text={barryPersonal.text} leerdoelen={barryPersonal.leerdoelen} person="kim"/>
            <ProjectsSection leerdoelen={barryPersonal.leerdoelen}/>
            <DualLinkContainer firstName="Justin van Wijk" firstTo="/justin" secondName="Tijn Roozen" secondTo="/tijn"/>
            <Footer/>
        </>
    )
}

export default Barry
