import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import DualLinkContainer from '../components/molecules/DualLinkContainer';
import HeroSubject from '../components/organisms/HeroSubject';
import OverLeerdoel from '../components/molecules/OverLeerdoel';
import ProcesLane from '../components/molecules/ProcesLane';
import EindResultaat from '../components/molecules/EindResultaat';
import ImgCarousel from '../components/organisms/ImgCarousel';
import ReflectieSectie from '../components/molecules/ReflectieSectie';

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
            <DualLinkContainer firstName="Leerdoel 1" firstTo="/tijn/react-typescript" secondName="Leerdoel 3" secondTo="/tijn/threejs-react"/>
            <OverLeerdoel text="Vroeger was het voor mij altijd al een droom om zelf apps te maken. In het verleden heb ik kort gewerkt met Androidstudio en was het toen gelukt om een “boter kaas en eieren” game te maken. Nu ik zelf volledig ben overgestapt naar Apple kreeg ik steeds meer interesse om zelf IOS-apps te maken. Mij leek daarom de perfecte tijd om het gewoon te proberen en mijn droom van vroeger te beleven."
            rol="iOS Developer"
            tools="XCode, SF Symbols"
            technieken="Swift, SwiftUI, ARKit, CoreData"
            />

            <ProcesLane steps={
                ["Begonnen met het kijken naar de documentatie van Swift en SwiftUI, daarna een paar tutorial gevolgd.",
                "Zelf wat experimenten doen met SwiftUI.",
                "Eerst App ontwikkeld! Dit was een Pokedex, om de eerst 151 Pokemons te kunnen zien met wat data.",
                "Geprobeerd om een AR-app te maken met behulp van ARKit. Uiteindelijk had ik iets gemaakt, maar had besloten om die niet in het eindproduct te gebruiken.",
                "Uitwerken van een uiteindelijk concept genaamd: “Thoughts Store”. Hiervoor moest ik gebruik maken van CoreData. Hiermee is het mogelijk om data op te slaan als de user de app afsluit."]}/>

            <EindResultaat text="Ik heb in deze periode verschillende app kunnen maken. Hieronder laat ik de app zien waar ik het meest trots op ben." images={[screen7, screen4]}/>
            <ImgCarousel images={[screen1, screen2, screen3, screen4, screen5, screen6, screen7]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik vond het heel interessant om weer iets anders te programmeren dan websites. Apps maken vind ik nog steeds leuk en wil in de toekomst nog meer creëren. Het maken was wel zeker een uitdaging, werken met ARKit en CoreData gingen mij nog niet zo makkelijk af. Het was allemaal vrij nieuwe stof en heb veel nieuwe dingen geprobeerd. De app kan je niet terugvinden op de Apple store want dat vind ik toch te duur voor een klein project. Ik ben blij dat ik dit gedaan heb en kijk er naar uit om het in de toekomst weer op te pakken."},
                {title: "WAT HEB IK GELEERD?", text: "Een nieuwe programmeertaal leren had ik zelf een beetje onderschat. Swift gebruikt voornamelijk Object Oriented Programming en dat was lang geleden dat ik dit gebruikt heb. SwiftUI was daarentegen makkelijk om mee te beginnen en hiermee kon ik al snel een app in elkaar zetten. Naar mijn gevoel heb ik in dit blok te weinig tijd besteed aan het leren van Swift, hierdoor ben ik vaak vast gaan lopen bij het maken van nieuwe apps. In nieuwe programmeertaal is niet te vergelijken met een nieuw framework. Dit moet ik in de toekomst dus niet onderschatten."}
                ]}/>

            <DualLinkContainer  firstName="Leerdoel 1" firstTo="/tijn/react-typescript" secondName="Leerdoel 3" secondTo="/tijn/threejs-react" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default IosDevelopment
