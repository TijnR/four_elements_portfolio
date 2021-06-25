import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';

import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg'
import { spacing } from '../../theme/spacing';


const SContainer = styled.section`
    width: 100%;
    height: 750px;
    position: relative;
    overflow: hidden;

    @media(max-width: 1024px) {
        height: 500px;
    }
    @media(max-width: 768px) {
        height: 300px;
    }
`

const CarouselContainer = styled.div`
    display: flex;
    flex-wrap: none;
    pointer-events: none;   
    overflow-x: scroll;
    height: 100%;

    ::-webkit-scrollbar {
        display: none;
    }
`

const Controller = styled.div`
    position: absolute;
    top: 0%;
    bottom: 0;
    width: 80px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
`
const ControllerLeft = styled(Controller)`
    left: 0;
`

const ControllerRight = styled(Controller)`
    right: 0;
`

const IconContainer = styled.div`
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    z-index: 2; 
    cursor: pointer;

    svg {
        width: 30px;
        height: 30px;
    }
`

const ImageContainer = styled.div`
    width: 100vw;
    height: 100%;
    min-width: 100vw;
    min-height: 100%;
    overflow: hidden;   
`

const SImage = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    opacity: 1;
`

function ImgCarousel({images}) {
    const [activeIndex, SetActiveIndex] = useState(0)
    const scrollRef = useRef(null)
    const totalProject = images.length

    const displayImages = images.map((img, i) => {
        return(
        <ImageContainer key={i}>
            <SImage src={img}/>
        </ImageContainer>)
    })

    console.log(activeIndex);

    const handleClickBack = () => {
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        let altIndex = activeIndex === 0 ? (totalProject - 1) : activeIndex - 1
        SetActiveIndex(altIndex)
        scrollRef.current.scrollTo({
            top: 0,
            left: (width * altIndex),
            behavior: 'smooth'
          });
    }

    const handleClickNext = () => {
        let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

        let altIndex = activeIndex === (totalProject - 1) ? 0 : activeIndex + 1
        SetActiveIndex(altIndex)
        scrollRef.current.scrollTo({
            top: 0,
            left: (width * altIndex),
            behavior: 'smooth'
          });
    }


    return (
        <SContainer>
            <CarouselContainer ref={scrollRef}>
            {displayImages}
            </CarouselContainer>
            <ControllerLeft>
                    <IconContainer onClick={() => handleClickBack()}>
                        <ChevronLeft />
                    </IconContainer>
                </ControllerLeft>
                <ControllerRight>
                <IconContainer onClick={() => handleClickNext()}>
                        <ChevronRight />
                    </IconContainer>
                </ControllerRight>
            
        </SContainer>
    )
}

export default ImgCarousel
