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


import alfa from '../assets/images/kim/leerdoelB/alfabet_oefenen.jpg'
import digi from '../assets/images/kim/leerdoelB/digital-wordmark.jpg'
import quoteSmall from '../assets/images/kim/leerdoelB/quote-small.jpg'
import quote from '../assets/images/kim/leerdoelB/quoteV1.jpg'
import toon from '../assets/images/kim/leerdoelB/toomai_mockup.jpg'


function HandLettering() {
    return (
        
        <>
            <Navigation activeIndex={3} activeSubjectIndex={1} activeIcon={3}/>
            <HeroSubject img={quote} title="Hand lettering"/>
            <DualLinkContainer firstName="Leerdoel 1" firstTo="/kim/visual-identity" secondName="Leerdoel 2" secondTo="/tijn"/>
            <OverLeerdoel text="In het verleden liep ik er tijdens het ontwerpen van een logo wel eens tegen aan dat ik letters niet goed kon
                                tekenen. Een idee die ik in mijn hood had kon ik niet goed vertalen naar papier. Het leek mij daarom tof om
                                mij tijdens het tweede blok te verdiepen in hand lettering. Daarbij wilde ik mij vooral focussen op het
                                tekenen script en serif fonts. Door allerlei cursussen te volgen en vanaf de basics letters te leren tekenen
                                heb ik tidens dit leerdoel drie producten opgeleverd bestaande uit een Monoline Wordmark, Quote en logo."
                        rol="Illustrator, Graphic Designer"
                        tools="Illustrator, Photoshop"
                        technieken="Illustrator, Graphic Design"
                        />

            <ProcesLane steps={
                ["Ik ben begonnen met het volgen van 4 cursussen. De cursussen sloten aan op mijn delivarbles: Monoline Wordmark; een quote en logo.",
                "Tijdens en na de cursussen was ik constant aan het oefenen/schetsen wat ik had geleerd. Ook heb ik voor elke deliverable inspiratie opgezocht en een moodboard gemaakt.",
                "Nadat ik het gevoel had dat ik genoeg had geoefend begon ik met de schetsen en realisatie van mijn eerste deliverable: Een Monoline Wordmark. Monoline betekend dat de lijn door het hele woord even dik blijft. De stijl lijkt een beetje op een graffiti stijl.",
                "Vervolgens heb ik de quote ontworpen. Deze heb ik eerst geschetst, daarna over getrokken met fineliner, ingescand en ten slotte nabewerkt in Photoshop.",
                "Ten slotte heb ik het logo ontworpen. Deze heb ik eerst geschetst en vervolgens in illustrator uitgewerkt."]}/>

            <SectionImage img={alfa}/>
            <EindResultaat text="Bij mijn eerste eindproduct he ik ervoor gekozen een ontwerp te maken met de naam van de stad waarin ik ben opgegroeid. Voor het tweede eindproduct heb ik een quote gekozen die mij aanspreekt. Het logo heb ik ontworpen voor een fictieve cocktailbar." images={[digi, quoteSmall, toon]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik kijk positief terug op dit leerdoel. Als ik kijk naar mijn voortgang van week 1 naar week 5 zie ik zeker verbetering in de letters die ik teken. Ik snap nu best goed hoe je lettervormen het beste kan tekenen en hoe je letters mooi aan elkaar kan verbinden. Geen van de drie deliverables zijn perfect en zeker bij het logo heb ik het idee dat het strakker kan. Maar voor een eerste poging in hand lettering ben ik blij met de resultaten."},
                {title: "WAT HEB IK GELEERD?", text: "Ik heb geleerd hoe je door het tekenen van basis vormen steeds comfortabeler wordt met het tekenen van letters. Ook heb ik veel geleerd over de tools die je kan gebruiken bij hand lettering. Dan heb ik het niet alleen over potlood, pen en papier, maar ook tools in illustrator. Ten slotte heb ik verschillende methodes geleerd over hoe je het beste een quote, logo en wordmark kan ontwerpen."}
                ]}/>

            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/tijn" flexStart="right" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default HandLettering
