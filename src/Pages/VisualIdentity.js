import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import DualLinkContainer from '../components/molecules/DualLinkContainer';
import HeroSubject from '../components/organisms/HeroSubject';
import OverLeerdoel from '../components/molecules/OverLeerdoel';

function VisualIdentity() {
    return (
        
        <>
            <Navigation activeIndex={3} activeSubjectIndex={0} activeIcon={3}/>
            <HeroSubject />
            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/tijn" flexStart="right"/>
            <OverLeerdoel text="Sinds 2017 heb ik mijn eigen bedrijf 'Waart'. Ik heb in de afgelopen jaren allerlei freelance opdrachten
                        uitgevoerd, maar heb nooit de tijd genomen om een identiteit voor mijn bedrijf te ontwerpen. Daarnaast had
                        ik ook nooit nagedacht over wat mijn waardes zijn en wat mij onderscheidt van anderen. Met de gedachte
                        dat ik in de toekomst misschien zou willen uitbreiden en van 'Waart' een studio wil maken, leek het mij super
                        leuk on ti¡dens het eerste blok van de minor een visuele identiteit voor 'Studio Waart' te ontwerpen."
                        rol="Graphic Designer"
                        tools="Illustrator, Indesign, Photoshop, Lightroom"
                        technieken="Graphic Design, Branding"
                        />
            <Footer/>
        </>
        
    )
}

export default VisualIdentity
