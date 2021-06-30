import React from 'react'
import Navigation from '../components/organisms/Navigation';
import Footer from '../components/organisms/Footer';
import HeroHome from '../components/organisms/HeroHome';
import TextHighway from '../components/organisms/TextHighway';
import HeroTextContainer from '../components/molecules/HeroTextContainer';
import ProjectCarousel from '../components/organisms/ProjectCarousel';


function Home() {
    return (
        <>
           <Navigation activeIndex={0}/>
           <HeroHome/>
           <TextHighway/>
           <HeroTextContainer/>
           <ProjectCarousel/>
           <Footer/>
        </>
    )
}

export default Home
