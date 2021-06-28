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


import foto1 from '../assets/images/justin/leerdoelB/a.jpg'
import foto2 from '../assets/images/justin/leerdoelB/b.jpg'
import foto3 from '../assets/images/justin/leerdoelB/c.jpg'

import slide1 from '../assets/images/justin/leerdoelB/1.jpg'
import slide2 from '../assets/images/justin/leerdoelB/2.jpg'
import slide3 from '../assets/images/justin/leerdoelB/3.jpg'
import slide4 from '../assets/images/justin/leerdoelB/4.jpg'
import slide5 from '../assets/images/justin/leerdoelB/5.jpg'
import slide6 from '../assets/images/justin/leerdoelB/6.jpg'
import slide7 from '../assets/images/justin/leerdoelB/7.jpg'
import slide8 from '../assets/images/justin/leerdoelB/8.jpg'
import slide9 from '../assets/images/justin/leerdoelB/9.jpg'


function PhaserJs() {
    return (
        
        <>
            <Navigation activeIndex={2} activeSubjectIndex={1} activeIcon={2}/>
            <HeroSubject img={foto3} title="Phaser.js"/>
            <DualLinkContainer firstName="Leerdoel 1" firstTo="/justin/web-3d" secondName="Leerdoel 3" secondTo="/justin/automotive-design"/>
            <OverLeerdoel text="Het was ruim één jaar geleden sinds ik voor het laatst iets met JavaScript heb gedaan tijdens het programmeren. Daarom leek het mij een goed idee om mijn JavaScript-vaardigheden op een leuke op te frissen, namelijk door een game te maken met behulp van een JavaScript-bibliotheek genaamd Phaser.js. Hiervoor heb ik een cursus gevolgd op Codecademy. Aan de hand van de opgedane kennis heb ik mijn eigen versie van het spel Breakout gemaakt."
            rol="Front-end Developer"
            tools="HTML, JavaScript, Phaser.js"
            technieken="Programmeren"
            />

            <ProcesLane steps={
                ["Phaser.js Cursus volgen op Codecademy (deel 1 t/m 6, basic JavaScript kennis ophalen + natuurkunde in Phaser snappen).",
                "Werken aan mijn eigen game (soort Breakout).",
                "Codecademy cursus afronden (deel 7 t/m 8, animaties en visuele effecten toevoegen m.b.v. Phaser).",
                "Mijn eigen game afronden.",
                ]}/>

            <EindResultaat text="De identiteit bestaat it een logo, visitekaartjes, briefpapier, een
             e-mailhandtekening en social media sjablonen. Alle onderdelen van mijn
            identiteit heb ik samengevoegd in een identity guide." images={[foto1, foto2]} links={[{name: "Speel mijn game!", href: "https://jvw17.github.io/BLOK-BREEK-BAM/"}]}/>
            <ImgCarousel images={[slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Bezig blijven om de opgedane kennis te ontwikkelen, iets oppakken en het je eigen maken. Zo wil ik dit leerdoel samenvatten. De Phaser cursus heeft mij enorm op weg geholpen om succesvol een eigen game te maken, want ik weet nu welke Phaser.js kennis ik hiervoor toe kan passen. Het volgen van de cursus was soms lastig; zo vond ik sommige stappen in enkele oefenopgaven erg vaag waardoor ik niet wist wat ik moest doen óf waar ik precies code toe moest voegen."},
                {title: "WAT HEB IK GELEERD?", text: "Schriftelijke aantekeningen maken is een fijne manier om te leren. Dit is namelijk een ijzersterke manier om de door jou opgedane kennis langer in je hoofd te laten hangen, omdat de kennis de tijd krijgt om te landen. Ook ben ik ervan bewust geworden dat continue een cursus volgen niet goed is: op deze manier neem je namelijk niet de kans om je geleerde kennis toe te passen en te ontwikkelen. (Je leert dan WAT in de cursus gedaan wordt, maar dat wil je niet: je wilt leren HOE je je geleerde kennis toe kan passen). Je moet dus een balans zoeken tussen het opdoen van kennis en het toepassen van kennis in de praktijk."}
                ]}/>

            <DualLinkContainer firstName="Leerdoel 1" firstTo="/justin/web-3d" secondName="Leerdoel 3" secondTo="/justin/automotive-design" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default PhaserJs
