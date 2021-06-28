import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import DualLinkContainer from '../components/molecules/DualLinkContainer';
import HeroSubject from '../components/organisms/HeroSubject';
import OverLeerdoel from '../components/molecules/OverLeerdoel';
import ProcesLane from '../components/molecules/ProcesLane';
import EindResultaat from '../components/molecules/EindResultaat';
import ReflectieSectie from '../components/molecules/ReflectieSectie';


import laptop1 from '../assets/images/barry/leerdoelB/veb.jpg'
import laptop2 from '../assets/images/barry/leerdoelB/businessparkhaaglanden.jpeg'
import laptop3 from '../assets/images/barry/leerdoelB/demeester.jpeg'
import laptop4 from '../assets/images/barry/leerdoelB/residentie.jpeg'
import laptop5 from '../assets/images/barry/leerdoelB/mobiel.jpeg'


function RedesignWebsites() {
    return (
        
        <>
            <Navigation activeIndex={1} activeSubjectIndex={1} activeIcon={1}/>
            <HeroSubject img={laptop1} title="Redesign van bestaande websites"/>
            <DualLinkContainer  firstName="Leerdoel 1" firstTo="/barry/rebranding" secondName="Leerdoel 3" secondTo="/barry/logo-design"/>
            <OverLeerdoel text="In dit leerdoel heb ik mij vooral gefocust op webdesign. Ik heb 4 bestaande websites gekozen.
                                Namelijk Businesspark Haaglanden, De Meester HR, VEB en Residentie Security B.V. wiens sites
                                aan vervanging toe waren. Ik heb deze sites volledig herontworpen waarin ik niet alleen lette op de
                                user interface maar ok de gebruikersvriendelijkheid en de gebruikerservaring."
            rol="UX/ UI Design"
            tools="Illustrator, Photoshop, Adobe XD"
            technieken="User Interface, UserExperience, Wireframes, Webdesign"
            />

            <ProcesLane steps={
                ["Ik begon met het zoeken van websites die ik kon herontwerpen die niet al te slecht waren maar wel aan vervanging toe.",
                "Vervolgens heb ik elke week 1 website herontwerpen die in de list stond.",
                "Ten slotte heb ik dus per website verschillende wireframes gemaakt en deze uitgewerkt In Adobe XD.",
                ]}/>

            <EindResultaat text="De eindresultaten bestaan uit 4 websites die ik heb herontwerpen." images={[laptop2, laptop3, laptop1, laptop4, laptop5]}/>
    
            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik kijk terug op een leerzaam leerdoel wat ik erg leuk vind om te doen. Ik ben een echte webdesigner/ Ul Designer. En mijn passie ligt dus ook echt bij het maken van websites. Ik vind het gaaf om te zien hoe meer webdesigns ik maak, hoe beter deze worden. Zo ook te zien bij dit leerdoel."},
                {title: "WAT HEB IK GELEERD?", text: "Bij dit leerdoel heb ik vooral geleerd om verschillende UX en UI technieken toe te passen om zo een website helemaal te verbeteren en er ook nog is tof en beter uit te laten zien. En zo de gehele gebruikerservaring te verbeteren."}
                ]}/>

            <DualLinkContainer firstName="Leerdoel 1" firstTo="/barry/rebranding" secondName="Leerdoel 3" secondTo="/barry/logo-design" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default RedesignWebsites
