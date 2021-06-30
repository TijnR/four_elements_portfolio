import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import DualLinkContainer from '../components/molecules/DualLinkContainer';
import HeroSubject from '../components/organisms/HeroSubject';
import OverLeerdoel from '../components/molecules/OverLeerdoel';
import ProcesLane from '../components/molecules/ProcesLane';
import {SectionImageInline} from '../components/molecules/SectionImage';
import EindResultaat from '../components/molecules/EindResultaat';
import ReflectieSectie from '../components/molecules/ReflectieSectie';


import mockPoster from '../assets/images/barry/leerdoelA/mockup-poster.jpeg'
import logos16 from '../assets/images/barry/leerdoelA/logos-16.jpeg'
import duoZeeman from '../assets/images/barry/leerdoelA/duoZeeman.png'
import macbook from '../assets/images/barry/leerdoelA/macbook.png'
import banner2 from '../assets/images/barry/leerdoelA/banner2.jpeg'
import poster from '../assets/images/barry/leerdoelA/poster.jpeg'
import zeemanMan from '../assets/images/barry/leerdoelA/zeemanMan.jpeg'


function Rebranding() {
    return (
        
        <>
            <Navigation activeIndex={1} activeSubjectIndex={0} activeIcon={1}/>
            <HeroSubject img={mockPoster} title="REBRANDING B-MERK NAAR A-MERK"/>
            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/barry/redesign-websites" flexStart="right"/>
            <OverLeerdoel text="Blok 1 staat in het teken van het herontwerpen van een corporate identity van een bestaand merk.
                                En dan niet zomaar een merk. Dit moet een merk zijn wat voorat bekend staat als goedkoop en niet
                                heel luxe. Een b-merk dus. Deze corporate identity wil ik zo gaan her ontwerpen dat het van een b
                                merk een a-merk word. Ik heb ervoor gekozen om winkelketen ZEEMAN te gaan herontwerpen dat
                                het net zo'n uitstraling krijgt als een Giorgio Armani of Calvin Klein. Een leuke en uitdagende
                                opdracht."
            rol="Graphic Designer"
            tools="Illustrator, Indesign, Photoshop, Adobe XD"
            technieken="Graphic Design, Branding"
            />

            <ProcesLane steps={
                ["Voordat ik de identiteit kon ontwerpen heb ik een onderzoek uitgevoerd naar verschillende high-end merken en wat de ZEEMAN just zo goedkoop maakt.",
                "Vervolgens ten ik schetsen gaan maken voor het nieuwe ZEEMAN logo en ben ik deze verder gaan uitwerken in adobe illustrator.",
                "Daarna ben ik verder gegaan met de andere media uitingen te ontwerpen. Zoals de posters, flyers etc. Hiervoor heb ik opnieuw eerst onderzoek gedaan naar de stifl van andere merken.",
                "Ten slotte heb ik een ontwerp gemaakt voor de nieuwe landingspage van de ZEEMAN.",
                ]}/>

            <SectionImageInline img={logos16}/>
            <EindResultaat text="De eindresultaten bestaan it een nieuw logo, website, posters, flyers die samen de nieuwe identiteit van de ZEEMAN vormen." images={[duoZeeman, macbook]} smallImages={[mockPoster, poster, zeemanMan, banner2]}/>
    
            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik kijk positief terug op dit leerdoel. Ik vind dat ikeen mooi resultaat heb neergezet, waar ik zelf ook het nodige van heb geleerd. Ik ben ook tevreden dat ik goed onderzoek heb gedaan naar waar een corporate identity aan moet voldoen en waar het aan moet voldoen om een bepaald gevoel bij mensen op te wekken."},
                {title: "WAT HEB IK GELEERD?", text: "Ik kijk terug op 4 leerzame weken waar ik heb geleerd om goed te kijken naar een bepaalde visuele identiteit. Deze te analyseren, en vervolgens precies het tegenovergestelde te doen van hun eigen intensie. De ZEEMAN is een goedkoop merk en daar staat ook om bekend. Maar door bepaalde veranderingen in fonts, logo etc. Kan je al snel een high-end merk ontwerpen, zelfs van iets als de ZEEMAN."}
                ]}/>

            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/barry/redesign-websites" flexStart="right" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default Rebranding
