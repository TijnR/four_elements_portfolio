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

import upper from '../assets/images/tijn/leerdoelC/site-upper.png'
import lower from '../assets/images/tijn/leerdoelC/site-lower.png'
import katana from '../assets/images/tijn/leerdoelC/katana.png'
import spiral from '../assets/images/tijn/leerdoelC/spiral.png'



function ThreejsReact() {
    return (
        
        <>
            <Navigation activeIndex={4} activeSubjectIndex={2} activeIcon={4}/>
            <HeroSubject img={lower} title="Three.js & React-three-fiber"/>
            <DualLinkContainer firstName="Leerdoel 2" firstTo="/tijn/ios-development"/>
            <OverLeerdoel text="De laatste par jaren zag ik steeds meer 3d elementen op sites. Ik was hier heel erg onder de indruk en zou geen idee hebben hoe je zoiets kon maken. Toen krijg ik van een senior collega te horen dat die elementen voornamelijk gemaakt zijn met “THREE.js”. Zonder enige twijfel wist ik waar ik mij dit blok op wilde focussen."
            rol="3D Graphics & Front-end Developer"
            tools="VSCode, threejs.org/editor"
            technieken="Three.js, WebGl, React-Three-Fiber"
            />

            <ProcesLane steps={
                ["“three.js journey” Course aangeschaft van Bruno Simon en verschillende lessen gevolgd.",
                "“Katana” Concept uitgewerkt. Op deze pagina wordt een verhaal verteld wanneer je scrolled.",
                "Leren omgaan met React-Three-Fiber en geleerd hoe je gltf/glb files kan omzetten naar gltfjsx.",
                "Laatste twee weken besteed aan het maken van een website met daarin 3d elementen. Dit heb ik gedaan met React-Three-Fiber.",
                ]}/>


            <SectionImageInline img={spiral}/>
            <EindResultaat text="De eerste website genaamd: “Tyns Therapeutics” is ontworpen met React-Three-Fiber en bezit twee interactieve 3d elementen. Ik heb alleen maar één pagina, dus alle link verwijzen naar mijn linkedin."
            moreText={["De tweede website genaamd: “Katana” is ontworpen met alleen Three.js. Ik heb hier niet langer dan twee dagen aan gezeten, maar wil toch het resultaat laten zien. "]} links={[{name: "Tyns Therapeutics", href: "https://tyns-therapeutics.web.app/"}, {name:"Katana", href:"https://katana-showcase.web.app/"}]} images={[upper, lower, katana]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Dit vond ik toch wel het leukst om aan te werken. Deze periode had ik de eerste 2 weken besteed aan het ontdekken van deze nieuwe stof. De andere weken heb ik volledig besteed aan het maken wat kleinere en één groter project. Web3d vind ik zelf super interessant en wil zeker in de toekomst hier verder mee werken. Het is alsof er een hele nieuwe wereld mogelijk is. Elke website die gebruikt maakt van web3d ziet er indrukwekkend uit en geeft altijd goede reacties. Ook al is de accessibility niet goed, mij lijkt het wel een perfecte kans om nieuwe showcasewebsites te maken."},
                {title: "WAT HEB IK GELEERD?", text: "De wereld van 3d renderen was voor mij compleet nieuw. Deze nieuwe wereld maakte mij heel nieuwsgierig en ben nog steeds verbaast van de mogelijkheden. Zelf aan het einde van dit blok heb ik zin om nieuwe 3d websites te ontwikkelen. 3D elementen op het web worden steeds populairder en wil hier graan aan meewerken. Toch is het vaak een afweging die je moet maken. Het kost namelijk zeker wat performance van de computer en zal daarom ook niet soepel werken op elk apparaat. Performance is het genen waar je altijd aan moet denken in het ontwerpen van 3d elementen. Vaak duurt het langer om een site te laden en kost het de computer meer moeite, dit heeft voor de gebruiker dus niet altijd een positief effect. Lossen 3d elementen op een normale webpagina is naar mijn mening de perfecte combinatie om een website goed te laten werken en tegelijkertijd een indrukwekkende website te maken."}
                ]}/>

            <DualLinkContainer  firstName="Leerdoel 2" firstTo="/tijn/ios-development" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default ThreejsReact
