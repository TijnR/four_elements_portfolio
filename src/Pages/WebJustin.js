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




import scooter from '../assets/images/justin/leerdoelA/scooter-1.jpg'
import auto from '../assets/images/justin/leerdoelA/rode-auto-2.jpg'
import donut from '../assets/images/justin/leerdoelA/donut.jpg'
import spline from '../assets/images/justin/leerdoelA/spline-6.jpg'
import slide1 from '../assets/images/justin/leerdoelA/1.jpg'
import slide2 from '../assets/images/justin/leerdoelA/2.jpg'
import slide3 from '../assets/images/justin/leerdoelA/3.jpg'
import slide4 from '../assets/images/justin/leerdoelA/4.jpg'
import slide5 from '../assets/images/justin/leerdoelA/5.jpg'
import slide6 from '../assets/images/justin/leerdoelA/6.jpg'
import slide7 from '../assets/images/justin/leerdoelA/7.jpg'
import slide8 from '../assets/images/justin/leerdoelA/8.jpg'
import slide9 from '../assets/images/justin/leerdoelA/9.jpg'
import slide10 from '../assets/images/justin/leerdoelA/10.jpg'
import slide11 from '../assets/images/justin/leerdoelA/11.jpg'
import slide12 from '../assets/images/justin/leerdoelA/12.jpg'
import slide13 from '../assets/images/justin/leerdoelA/13.jpg'
import slide14 from '../assets/images/justin/leerdoelA/14.jpg'
import slide15 from '../assets/images/justin/leerdoelA/15.jpg'
import slide16 from '../assets/images/justin/leerdoelA/16.jpg'


function WebJustin() {
    return (
        
        <>
            <Navigation activeIndex={2} activeSubjectIndex={0} activeIcon={2}/>
            <HeroSubject img={scooter} title="Web-3D"/>
            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/justin/phaserjs" flexStart="right"/>
            <OverLeerdoel text="Graag wide ik mij verdiepen in het maken van web-3D modellen, omdat ik benieuwd was hoe het maken hiervan in zijn werking gaat. Tevens leekt het mij leuk om de door mij gemaakte modellen op mijn portfolio te kunnen tonen, zodat deze nog meer uit het oog zal springen. 3D-modellen worden immers steeds vaker getoond op websites, dus het leek mij slim on op deze trend in te spelen."
            rol="Research / 3D-artist"
            tools="Word, Blender"
            technieken="Deskresearch, 3D modeling"
            />

            <ProcesLane steps={
                ["Onderzoek uitvoeren over welke programma’s er zijn om 3D-modellen te maken en/of op te nemen in de HTML.",
                "Zeven interactieve 3D-modellen maken in het programma spline.design.",
                "Simpele responsive website bouwen en 3D-modellen van spline.design & p3d.in erop tonen.",
                "Met behulp van Blender tutorials op YouTube vijf 3D-modellen in Blender maken + aantekeningen maken.",
                "Experimenteren met het tonen van de 3D-modellen op een zelfgemaakte website m.b.v.Google Model Viewer.",
                "Drie modellen maken in Blender + leren hoe ik een transparante afbeelding op een 3D-model kan tonen + nog een responsive website maken waarop 3D-modellen getoond worden."]}/>

            <SectionImage img={auto}/>
            <EindResultaat text="De identiteit bestaat it een logo, visitekaartjes, briefpapier, een
             e-mailhandtekening en social media sjablonen. Alle onderdelen van mijn
            identiteit heb ik samengevoegd in een identity guide." images={[donut, spline]}/>
            <ImgCarousel images={[slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10, slide11, slide12, slide13, slide14, slide15, slide16]}/>

            <ReflectieSectie items={[
                {title: "HOE KIJK IK EROP TERUG?", text: "Ik heb veel nieuwe dingen geleerd tijdens dit leerdoel. Het maken van 3D-modellen in Blender ging redelijk goed, al waren sommige handelingen lastig uit te voeren (zoals het plaatsen van een transparante afbeelding). Ik was verbaasd over hoe makkelijk Google Model Viewer in gebruik is. De opgedane kennis is veel waard voor mij en gaat zeker van pas komen in de toekomst."},
                {title: "WAT HEB IK GELEERD?", text: "Door mijn onderzoek naar 3D-programma’s weet ik nu welke programma’s gebruikt kunnen worden om 3D-modellen te maken en/of uploaden. Ook heb ik een basisvaardigheid in de programma’s Spline.design en Blender, waardoor ik nu simpele 3D-modellen kan maken en exporteren voor op een website. Verder heb ik geleerd hoe ik een 3D-model met behulp van Google Model Viewer op een website kan tonen + hoe ik deze modellen interactief kan maken voor een toffe gebruikservaring."}
                ]}/>

            <DualLinkContainer  secondName="Leerdoel 2" secondTo="/justin/phaserjs" flexStart="right" bgWhite/>
            <Footer/>
        </>
        
    )
}

export default WebJustin
