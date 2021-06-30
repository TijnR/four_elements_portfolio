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


function ReactTypescript() {
    return (
        
        <>
            <Navigation activeIndex={4} activeSubjectIndex={0} activeIcon={4}/>
            <HeroSubject img={typeSClose} src={typeSVideo} title="React & Typescript"/>
            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/tijn/ios-development" flexStart="right"/>
            <OverLeerdoel text="In de CMD-omgeving hou ik mij vooral bezig met front-end development. Hiervoor was het voor mij ook noodzakelijk om met een framework aan de gang te gaan. Ik had al eerder is gewerkt met React, maar ik had niet het gevoel dat ik het beheerste. Verder wilde ik ook React gebruiken in combinatie met Typescript omdat dit in grote teams ook veel wordt gebruikt. Daarom heb ik dit blok vooral op deze twee technologieën gefocust, met als doel om deze beiden te beheersen."
            rol="Front-end Developer"
            tools="VS Code"
            technieken="React, Typescript, PWA"
            />

            <ProcesLane steps={
                ["Tutorials en artikels gevolgd over React en Typescript.",
                "Begonnen met een game maken in typescript.",
                "Een custom cursor gemaakt met alleen React.",
                "Een PWA (Progressive Web App) gemaakt met React en Typescript, hierop kan je een timer instellen.",
                "Ontwikkelen van een groter concept genaamd: “Type-speed”. Deze website is ontwikkeld met React en typescript."]}/>

            <EindResultaat text="Ik heb de meeste tijd gestopt in het maken van TypeSpeed. Op deze website moet je proberen zo snel mogelijk te typen. Verder is er een leaderboard en kan je jouw eigen highscore terugvinden. Dit concept is volledig uitgewerkt met React en Typescript."
                            moreText={["Tweede link is de bekende dino game, die je te zien krijgt al je geen internet hebt op Chrome. Dit game is met Typescript nagemaakt.", "De laatste link verwijst naar de PWA die ik heb gemaakt met React."]}
                            links={[{name: "TypeSpeed", href: "https://typespeed.nl/"}, {name: "Dino Game", href:"https://tijnr.github.io/typescript-dino-game/"}, {name: "Timer app", href: "https://tijnr.github.io/timer-app-build/"}]} images={[typeS, dino, cursor, timer]} videos={[ ,dinoVideo]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik zelf bij dat ik met dit leerdoel ben begonnen. Ik kan dit later voor veel andere projecten goed gebruiken en hopelijk biedt dit mij in de toekomst meer werk mogelijkheden. Ik ben erg blij met het resultaat van “TypeSpeed” en heb al veel leuke reacties gekregen. Het is een van de meest complexe websites die ik tot nu toe heb gemaakt. Ik ga steeds meer mogelijkheden zien en krijg meer motivatie om andere interessante concepten uit te werken."},
                {title: "WAT HEB IK GELEERD?", text: "Naast de nieuwe Syntax die ik heb geleerd was het ook nog een uitdaging om in te schatten hoe ik het blok het best kon aanpakken. Ik heb naar mijn gevoel te lang besteed aan tutorials en kon eigenlijk al eerder beginnen met het maken van nieuwe projecten. Het blijft altijd een moeilijke inschatting, maar deze twee technologieën waren voor mijn niet compleet nieuw. Als ik in de toekomst een nieuwe framework ga leren, dan zal ik minder tijd besteden aan het volgen van video’s en meer aan gewoon doen."}
                ]}/>

            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/kim/hand-lettering" flexStart="right" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default ReactTypescript
