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



import typeSVideo from '../assets/images/tijn/leerdoelA/typeS-short.mp4'
import typeSClose from '../assets/images/tijn/leerdoelA/typeS-close.jpg'
import typeS from '../assets/images/tijn/leerdoelA/types.jpg'
import dino from '../assets/images/tijn/leerdoelA/dino.jpg'
import dinoVideo from '../assets/images/tijn/leerdoelA/dino.mp4'
import cursor from '../assets/images/tijn/leerdoelA/cursor.jpg'
import timer from '../assets/images/tijn/leerdoelA/timer.jpg'

import thoughtVideo from '../assets/images/tijn/leerdoelB/thoughtsStore.mp4'
import screen1 from '../assets/images/tijn/leerdoelB/screen1.jpg'
import screen2 from '../assets/images/tijn/leerdoelB/screen2.jpg'
import screen3 from '../assets/images/tijn/leerdoelB/screen3.jpg'
import screen4 from '../assets/images/tijn/leerdoelB/screen4.jpg'
import screen5 from '../assets/images/tijn/leerdoelB/screen5.jpg'
import screen6 from '../assets/images/tijn/leerdoelB/screen6.jpg'
import screen7 from '../assets/images/tijn/leerdoelB/screen7.jpg'





function IosDevelopment() {
    return (
        
        <>
            <Navigation activeIndex={4} activeSubjectIndex={1} activeIcon={4}/>
            <HeroSubject img={screen1} src={thoughtVideo} title="IOS Development"/>
            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/tijn/ios-development" flexStart="right"/>
            <OverLeerdoel text="Sinds 2017 heb ik mijn eigen bedrijf 'Waart'. Ik heb in de afgelopen jaren allerlei freelance opdrachten
            uitgevoerd, maar heb nooit de tijd genomen om een identiteit voor mijn bedrijf te ontwerpen. Daarnaast had
            ik ook nooit nagedacht over wat mijn waardes zijn en wat mij onderscheidt van anderen. Met de gedachte
            dat ik in de toekomst misschien zou willen uitbreiden en van 'Waart' een studio wil maken, leek het mij super
            leuk on ti¡dens het eerste blok van de minor een visuele identiteit voor 'Studio Waart' te ontwerpen."
            rol="Graphic Designer"
            tools="Illustrator, Indesign, Photoshop, Lightroom"
            technieken="Graphic Design, Branding"
            />

            <ProcesLane steps={
                ["Voordat ik de identiteit kon ontwerpen heb ik een concurrentieanalyse uitgevoerd en moodboard gemaakt.",
                "Vervolgens heb ik een creative brief voor de studio gemaakt waarin ik mijn warden vastlegde: Modern-innovative / Straightforward / Open minded (to new things / ideas) / Friendly Focussed on detail.",
                "Met deze warden in gedachte heb ik het logo ontworpen.",
                "Na het logo volgde de rest van de identiteit, beginnende met de patronen. Elk patroon staat voor één van de diensten van Waart: graphic design, digital design en animatie. Net zoals de diensten vullen de patronen elkaar aan tot een sterker geheel.",
                "Alle onderdelen van mijn identiteit voegde ik samen in een identity guide."]}/>

            <EindResultaat text="De identiteit bestaat it een logo, visitekaartjes, briefpapier, een
            e-mailhandtekening en social media sjablonen. Alle onderdelen van mijn
            identiteit heb ik samengevoegd in een identity guide." images={[screen7, screen4]}/>
            <ImgCarousel images={[screen1, screen2, screen3, screen4, screen5, screen6, screen7]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik kijk erg positief terug op het leerdoel. Deze minor was voor mij de ideale kans om mij een keer echt te verdiepen in het maken van een visuele identiteit. Dus niet gewoon iets moois maken, maar echt iets ontwerpen met een gedachte erachter. Door mij goed aan mijn planning te houden ben ik niet tegen grote problemen aangelopen bij dit leerdoel. Mijn manier van werken tijdens dit leerdoel he ik zeker doorgezet bij de andere leerdoelen."},
                {title: "WAT HEB IK GELEERD?", text: "Na verschillende cursussen over visual identity's te volgen heb ik veel geleerd over de stappen die je moet zetten om tot goed een eindresultaat. Door van verschillende designers te horen wat hun strategie is kon ik de beste punten combineren tot een strategie die voor mij werkt. Daarnaast heb ik super veel geleerd over logo design. Ik heb namelijk ook een logo cursus gevolgd waarbij ik veel theorie leerde over logo's en illustrator een stuk beter leerde kennen."}
                ]}/>

            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/kim/hand-lettering" flexStart="right" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default IosDevelopment
