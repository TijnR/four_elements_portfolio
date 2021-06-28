import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import DualLinkContainer from '../components/molecules/DualLinkContainer';
import HeroSubject from '../components/organisms/HeroSubject';
import OverLeerdoel from '../components/molecules/OverLeerdoel';
import ProcesLane from '../components/molecules/ProcesLane';
import SectionImage, {SectionImageInline} from '../components/molecules/SectionImage';
import EindResultaat from '../components/molecules/EindResultaat';
import ImgCarousel from '../components/organisms/ImgCarousel';
import ReflectieSectie from '../components/molecules/ReflectieSectie';


import foto1 from '../assets/images/justin/leerdoelC/scherm1.png'
import foto2 from '../assets/images/justin/leerdoelC/scherm2.jpg'
import foto3 from '../assets/images/justin/leerdoelC/scherm3.jpg'
import fold from '../assets/images/justin/leerdoelC/fold.jpg'

import slide1 from '../assets/images/justin/leerdoelC/slider-1.jpg'
import slide2 from '../assets/images/justin/leerdoelC/slider-2.jpg'
import slide3 from '../assets/images/justin/leerdoelC/slider-3.jpg'
import slide4 from '../assets/images/justin/leerdoelC/slider-4.jpg'
import slide5 from '../assets/images/justin/leerdoelC/slider-5.jpg'
import slide6 from '../assets/images/justin/leerdoelC/slider-6.jpg'
import slide7 from '../assets/images/justin/leerdoelC/slider-7.jpg'
import slide8 from '../assets/images/justin/leerdoelC/slider-8.jpg'
import slide9 from '../assets/images/justin/leerdoelC/slider-9.jpg'
import slide10 from '../assets/images/justin/leerdoelC/slider-10.jpg'
import slide11 from '../assets/images/justin/leerdoelC/slider-11.jpg'
import slide12 from '../assets/images/justin/leerdoelC/slider-12.jpg'
import slide13 from '../assets/images/justin/leerdoelC/slider-13.jpg'
import slide14 from '../assets/images/justin/leerdoelC/slider-14.jpg'
import slide15 from '../assets/images/justin/leerdoelC/slider-15.jpg'


function AutomotiveDesign() {
    return (
        
        <>
            <Navigation activeIndex={2} activeSubjectIndex={2} activeIcon={2}/>
            <HeroSubject img={fold} title="Phaser.js"/>
            <DualLinkContainer firstName="Leerdoel 2" firstTo="/justin/phaserjs"/>
            <OverLeerdoel text="Het leek mij geweldig om mijn designkennis te combineren met mijn grootste hobby: auto’s. Daarom kwam ik op het toffe idee om twee MVP interfaces te ontwerpen voor een auto. Ik heb twee soorten schermen gemaakt: een infoscherm en een multimediascherm. Het infoscherm is het scherm dat pal voor de bestuurder staat en algemene informatie over het voertuig toont, zoals snelheid. Het multimediascherm is het scherm dat zich in het midden van het dashboard bevindt. Deze bevat de volgende functies: navigatie, muziek én telefoneren. Beide soorten schermen heb ik interactief gemaakt."
            rol="Researcher / Visual Designer"
            tools="Word, Adobe XD"
            technieken="Deskresearch, Visual Design"
            />

            <ProcesLane steps={
                ["Concurrentieanalyse maken over hóe de interfaces van verschillende soorten auto’s van verschillende automerken in elkaar zitten.",
                "Onderzoek uitvoeren over hóe Interaction & UX Design is toegepast in de interface van een auto.",
                "Mij verdiepen in UX Principles / Laws.",
                "Wireframes maken voor het infoscherm + infoscherm hi-fi maken en animeren.",
                "Wireframes maken voor het multimediascherm + multimediascherm hi-fi maken en animeren."
                ]}/>


            <SectionImage img={foto1}/>
            <EindResultaat text="Mijn schermen zijn via de onderstaande links te bekijken."
            moreText={[
                "Heb je het infoscherm geopend? Druk op de Q-toets om van scherm te wisselen.",
                "Heb je het interactieve multimediascherm geopend? Sliders werken door erop te klikken. De radio/bluetooth balk kan je van boven naar onderen slepen. Met de A- en D-toetsen kan je wisselen van radiozender. Met de S-toets kan je het volume veranderen. Probeer op zoveel mogelijk dingen te klikken om eracter te komen of het werkt."
            ]} images={[foto2, foto3]} links={[{name: "Interactief infoscherm", href: "https://xd.adobe.com/view/a4cc64d9-a507-4828-91bc-9b33911f7590- f19f/?fullscreen&hints=off"}, {name: "Niet-interactief multimediascherm", href: "https://xd.adobe.com/view/80b3ba1a-5181-49ec-b218-71c1d78fd163-d5e0/"}, {name: "Interactief multimediascherm", href:"https://xd.adobe.com/view/64a4b780-a33b-43cd-80b8-322fb4c10ec0-31f7/?fullscreen&hints=off"}]}/>
            <ImgCarousel images={[slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik kijk erg positief terug op dit leerdoel, want ik vond het leuk om mij met mijn hobby auto’s bezig te houden. Ik ben blij dat ik in mijn schermen rekening heb gehouden met de tientallen aspecten waaraan een auto interface moet voldoen. Soms was het lastig om de content in de schermen vorm te geven en om diepte aan te brengen in het design. Wel vind ik de uiteindelijke versie van mijn multimediascherm een flink stuk verbeterd ten opzichte van de eerdere versies, dus in die zin ben ik blij dat ik visueel gezien progressie heb geboekt."},
                {title: "WAT HEB IK GELEERD?", text: "Ik weet nu met welke tientallen factoren rekening gehouden moet worden tijdens het ontwerpen van een auto-interface (Safety and usability before beauty). Denk bijvoorbeeld aan de lettergrootte, hoeveel contrast de kleuren moeten hebben, welke handgebaren gemakkelijk uit te voeren zijn, en op welke plekken knoppen geplaatst moeten worden. Ook heb ik geleerd hóe ik een dark mode design kan maken en waar ik op moet letten. Denk bijvoorbeeld aan hóe diepte aangebracht kan worden m.b.v. ‘elevation’ én dat lichte tinten kleuren gebruikt moeten worden."}
                ]}/>

            <DualLinkContainer firstName="Leerdoel 1" firstTo="/justin/web-3d" secondName="Leerdoel 3" secondTo="/justin/automotive-design" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default AutomotiveDesign
