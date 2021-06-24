import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import PersonalHero from '../components/organisms/PersonalHero';
import { tijnPersonal } from '../data/personalPageData'
import ProjectsSection from '../components/molecules/ProjectsSection';
import DualLinkContainer from '../components/molecules/DualLinkContainer';


function Tijn() {
    return (
        <>
           <Navigation activeIndex={4}/>
            <PersonalHero name={tijnPersonal.name} prof={tijnPersonal.prof} text={tijnPersonal.text} leerdoelen={tijnPersonal.leerdoelen} person="tijn"/>
            <ProjectsSection leerdoelen={tijnPersonal.leerdoelen}/>
            <DualLinkContainer firstName="Kim van der Waart" firstTo="/kim" secondName="Barry Boogert" secondTo="/barry"/>
           <Footer/>
        </>
    )
}

export default Tijn
