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



import briefpapierWaart from '../assets/images/kim/leerdoelA/briefpapier_waart.jpg'
import kaartjesMockup from '../assets/images/kim/leerdoelA/kaartjes-mockup.jpg'
import procesImg from '../assets/images/kim/leerdoelA/proces.jpg'
import slide1 from '../assets/images/kim/leerdoelA/Slide1.jpg'
import slide2 from '../assets/images/kim/leerdoelA/Slide2.jpg'
import slide3 from '../assets/images/kim/leerdoelA/Slide3.jpg'
import slide4 from '../assets/images/kim/leerdoelA/Slide4.jpg'
import slide5 from '../assets/images/kim/leerdoelA/Slide5.jpg'
import slide6 from '../assets/images/kim/leerdoelA/Slide6.jpg'
import slide7 from '../assets/images/kim/leerdoelA/Slide7.jpg'
import slide8 from '../assets/images/kim/leerdoelA/Slide8.jpg'
import slide9 from '../assets/images/kim/leerdoelA/Slide9.jpg'
import slide10 from '../assets/images/kim/leerdoelA/Slide10.jpg'
import slide11 from '../assets/images/kim/leerdoelA/Slide11.jpg'


function VisualIdentity() {
    return (
        
        <>
            <Navigation activeIndex={3} activeSubjectIndex={0} activeIcon={3}/>
            <HeroSubject img={slide7} title="Visual Identity"/>
            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/kim/hand-lettering" flexStart="right"/>
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

            <SectionImage img={procesImg}/>
            <EindResultaat text="De identiteit bestaat it een logo, visitekaartjes, briefpapier, een
e-mailhandtekening en social media sjablonen. Alle onderdelen van mijn
identiteit heb ik samengevoegd in een identity guide." images={[kaartjesMockup, briefpapierWaart]}/>
            <ImgCarousel images={[slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik kijk erg positief terug op het leerdoel. Deze minor was voor mij de ideale kans om mij een keer echt te verdiepen in het maken van een visuele identiteit. Dus niet gewoon iets moois maken, maar echt iets ontwerpen met een gedachte erachter. Door mij goed aan mijn planning te houden ben ik niet tegen grote problemen aangelopen bij dit leerdoel. Mijn manier van werken tijdens dit leerdoel he ik zeker doorgezet bij de andere leerdoelen."},
                {title: "WAT HEB IK GELEERD?", text: "Na verschillende cursussen over visual identity's te volgen heb ik veel geleerd over de stappen die je moet zetten om tot goed een eindresultaat. Door van verschillende designers te horen wat hun strategie is kon ik de beste punten combineren tot een strategie die voor mij werkt. Daarnaast heb ik super veel geleerd over logo design. Ik heb namelijk ook een logo cursus gevolgd waarbij ik veel theorie leerde over logo's en illustrator een stuk beter leerde kennen."}
                ]}/>

            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/kim/hand-lettering" flexStart="right" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default VisualIdentity
