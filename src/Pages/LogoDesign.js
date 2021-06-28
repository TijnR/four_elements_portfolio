import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import DualLinkContainer from '../components/molecules/DualLinkContainer';
import HeroSubject from '../components/organisms/HeroSubject';
import OverLeerdoel from '../components/molecules/OverLeerdoel';
import ProcesLane from '../components/molecules/ProcesLane';
import EindResultaat from '../components/molecules/EindResultaat';
import ReflectieSectie from '../components/molecules/ReflectieSectie';


import design from '../assets/images/barry/leerdoelC/design.jpg'
import icf from '../assets/images/barry/leerdoelC/icf-logoDuo.png'
import kapsalon from '../assets/images/barry/leerdoelC/kapsalonDuo.png'
import webdiensten from '../assets/images/barry/leerdoelC/logo-webdiensten.png'
import webdienstenWhite from '../assets/images/barry/leerdoelC/logo-webdiensten-white.png'
import barifyDesign from '../assets/images/barry/leerdoelC/logo-barifyDesign.jpeg'
import barifyDesignBlack from '../assets/images/barry/leerdoelC/logo-barify-zwart.jpeg'
import theniscrewWhite from '../assets/images/barry/leerdoelC/thenicscrew-logo-wit.jpg'
import theniscrewBlack from '../assets/images/barry/leerdoelC/thenicscrew-logo-zwart.jpg'
import theniscrewDuo from '../assets/images/barry/leerdoelC/thenicscrew-duo.png'


import laptop2 from '../assets/images/barry/leerdoelB/businessparkhaaglanden.jpeg'
import laptop3 from '../assets/images/barry/leerdoelB/demeester.jpeg'
import laptop4 from '../assets/images/barry/leerdoelB/residentie.jpeg'
import laptop5 from '../assets/images/barry/leerdoelB/mobiel.jpeg'


function LogoDesign() {
    return (
        
        <>
            <Navigation activeIndex={1} activeSubjectIndex={2} activeIcon={1}/>
            <HeroSubject img={design} title="Logo Design"/>
            <DualLinkContainer firstName="Leerdoel 2" firstTo="/barry/redesign-websites"/>
            <OverLeerdoel text="In dit leerdoel heb ik mij vooral gerichten op het ontwerpen van logo's. Dit kunnen bestaande logo's
                                zijn maar logo's voor fictieve bedrijven die ik zelf heb bedacht. Zo heb ik logo's gemaakt voor: barify,
                                r Webdiensten, thenicscrew, kapsalon roulette en de internatonal calisthenics Federation."
            rol="Graphic Designer"
            tools="Illustrator, Indesign, Photoshop, Lightroom"
            technieken="Graphic Design, Branding"
            />

            <ProcesLane steps={
                ["Ik ben begonnen met onderzoek doen naar het logo design proces en wat hierbij allemaal komt kijken.",
                "Vervolgens ben ik per week een logo gaan maken beginnend met Barify, daarna RV Webdiensten, vervolgens thenicscrew, daarna kapsalon roulette en als laatste de international calisthenics Federation.",
                "Ik heb per logo eerst een schetsfase gehad met verschillende ideeën en deze vervolgens uitgewerkt in adobe illustrator. Deze versies ben ik steeds verder gaan uitwerken tot het uiteindelijke logo.",
                ]}/>

            <EindResultaat text="Uiteindelijk heb ik dus 5 verschillende logo's gemaakt uit 5 verschillende branches om zo te experimenteren met verschillende stijlen." smallImages={[barifyDesign, barifyDesignBlack]} images={[webdiensten, webdienstenWhite, theniscrewDuo, kapsalon, icf]}/>
    
            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik kijk terug op dit leerdoel met een positive gedachte. Vooral omdat ik een logo hiervan kan gaan toepassen bij min eigen bedrijf genaamd barify. En omdat ik logo design toch nog steeds een van de leukste dingen vind om te ontwerpen naast websites. Vooral omdat het hét symbool word van een bedrijf , en ik vind dit altijd heel gaaf om neer te mogen zetten."},
                {title: "WAT HEB IK GELEERD?", text: "Tijdens dit leerdoel heb ik geleerd hoe ik beter kan omgaan met adobe illustrator en hoe ik steeds handiger met dit programma kan werken om precies mijn schetsen digital te maken. Ook heb ik geleerd dat de schetsfase jets is wat je niet zomaar over kan slaan. Het is echt een must om tot goede ideeën en resultaten te komen."}
                ]}/>

            <DualLinkContainer firstName="Leerdoel 2" firstTo="/barry/redesign-websites" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default LogoDesign
