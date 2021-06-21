import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import PersonalHero from '../components/organisms/PersonalHero';
import { tijnPersonal } from '../data/personalPageData'

function Tijn() {
    return (
        <>
           <Navigation activeIndex={4}/>
            <PersonalHero name={tijnPersonal.name} prof={tijnPersonal.prof} text={tijnPersonal.text} leerdoelen={tijnPersonal.leerdoelen}/>
           
           <Footer/>
        </>
    )
}

export default Tijn
