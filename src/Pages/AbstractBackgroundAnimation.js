import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import DualLinkContainer from '../components/molecules/DualLinkContainer';
import HeroSubject from '../components/organisms/HeroSubject';
import OverLeerdoel from '../components/molecules/OverLeerdoel';
import ProcesLane from '../components/molecules/ProcesLane';
import SectionImage, {SectionImageInline} from '../components/molecules/SectionImage';
import EindResultaat from '../components/molecules/EindResultaat';
import ReflectieSectie from '../components/molecules/ReflectieSectie';


import alfa from '../assets/images/kim/leerdoelB/alfabet_oefenen.jpg'
import digi from '../assets/images/kim/leerdoelB/digital-wordmark.jpg'
import quoteSmall from '../assets/images/kim/leerdoelB/quote-small.jpg'
import quote from '../assets/images/kim/leerdoelB/quoteV1.jpg'
import toon from '../assets/images/kim/leerdoelB/toomai_mockup.jpg'

import proces from '../assets/images/kim/leerdoelC/proces.jpg'
import video1 from '../assets/images/kim/leerdoelC/1-Liquid_30sec.mp4'
import video3 from '../assets/images/kim/leerdoelC/3-blendedgradient_30sec.mp4'
import video4 from '../assets/images/kim/leerdoelC/4-Paintpattern_30sec.mp4'
import video5 from '../assets/images/kim/leerdoelC/5-twistedgradient_30sec.mp4'
import video6 from '../assets/images/kim/leerdoelC/6-Particles_30sec.mp4'
import video7 from '../assets/images/kim/leerdoelC/7-Dots_30sec.mp4'
import video8 from '../assets/images/kim/leerdoelC/8-Lines_30sec.mp4'
import video9 from '../assets/images/kim/leerdoelC/9-Repeatergrid_10sec.mp4'
import video10 from '../assets/images/kim/leerdoelC/10-Repeatedshapes01_10sec.mp4'

import thumb1 from '../assets/images/kim/leerdoelC/thumb1.jpg'
import thumb2 from '../assets/images/kim/leerdoelC/thumb2.jpg'
import thumb3 from '../assets/images/kim/leerdoelC/thumb3.jpg'
import thumb4 from '../assets/images/kim/leerdoelC/thumb4.jpg'
import thumb5 from '../assets/images/kim/leerdoelC/thumb5.jpg'
import thumb6 from '../assets/images/kim/leerdoelC/thumb6.jpg'
import thumb7 from '../assets/images/kim/leerdoelC/thumb7.jpg'
import thumb8 from '../assets/images/kim/leerdoelC/thumb8.jpg'
import thumb10 from '../assets/images/kim/leerdoelC/thumb10.jpg'



function AbstractBackgroundAnimation() {
    return (
        
        <>
            <Navigation activeIndex={3} activeSubjectIndex={2} activeIcon={3}/>
            <HeroSubject src={video9} img={proces} title="Abstract Background Animation"/>
            <DualLinkContainer firstName="Leerdoel 2" firstTo="/kim/hand-lettering"/>
            <OverLeerdoel text="De laatste jaren is mijn interesse voor animeren gegroeid. De basics van After Effects heb ik al geleerd op
                            mijn vorige opleiding en had er toen veel plezier in. Tijdens mijn stage afgelopen jar heb ik aan verschillende
                            animatie opdrachten gewerkt en omdat ik het ook toen weer zo leuk vond, wilde ik er graag nog beter in
                            worden. Ik had op dat punt vooral gewerkt aan animaties met video, foto en tekst maar nog nooit met
                            abstracte vormen. Na een Masterclass over abstracte animaties wist ik meteen dat ik daaraan wilde werken
                            voor mijn laatste leerdoel."
                        rol="Animator"
                        tools="After Effects, Media Encoder"
                        technieken="Animation"
                        />

            <ProcesLane steps={
                ["Ik ben begonnen met het volgen van veel tutorials.",
                "Na elke tutorial die ik volgde heb ik geëxperimenteerd met wat ik heb geleerd.",
                "Na veel verschillende effecten en methodes uit te proberen kon ik beginnen aan mijn delivarbles. Bij elke animatie die ik maakte zorgde ik ervoor dat hij perfect loopte.",
                "Om te laten zien dat de animaties perfect in elkaar over lopen heb ik van elke animatie naast een versie van 10 seconde ook een versie van 30 seconde gemaakt."
                ]}/>

            <SectionImage img={proces}/>
            <EindResultaat text="Hieronder volgen 9 animaties. Ik heb ervoor gekozen zoveel mogelijk verschillende stijlen en effecten te leren. Elke animatie duurt 10 seconde en kan loopen." images={[thumb1, thumb2, thumb3, thumb4, thumb5, thumb6, thumb7, thumb8, thumb10]} videos={[video1, video9, video3, video4, video5, video6, video7, video8, video10 ]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Dit was een erg leuk leerdoel om aan te werken. Het was leuk om te spelen met allerlei effecten en expressies binnen After Effects. Ik heb een stuk of 10 tutorials gevolgd waarvan de een wat makkelijker was dan de ander. De grootste uitdaging was om elke animatie perfect te laten loopen, bij sommige animaties heb ik hier zeker veel tijd in gestopt. Gelukkig is uiteindelijk wel gelukt."},
                {title: "WAT HEB IK GELEERD?", text: "Ik heb allerlei verschillende effecten geleerd binnen After Effects. Ik heb geleerd hoe je deze op verschillende manieren kan gebruiken en combineren. Daarnaast heb ik verschillende manieren geleerd om een animatie te loopen. Ten slotte heb ik veel nieuwe sneltoetsen geleerd en leren werken met expressies."}
                ]}/>

            <DualLinkContainer firstName="Leerdoel 2" firstTo="/kim/hand-lettering"/>
            <Footer/>
        </>
        
    )
}

export default AbstractBackgroundAnimation
