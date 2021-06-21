import React, {useState, useRef} from 'react'
import styled from 'styled-components'
import { Container, InnerContainer } from '../template/Container';
import { colors } from '../../theme/colors';
import { typography } from '../../theme/typography';
import { spacing } from '../../theme/spacing';
import ProjectItem from '../molecules/ProjectItem';
import {listProjects} from '../../listItems'

import { ReactComponent as ChevronRight } from '../../assets/icons/chevron-right.svg'
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left.svg'


const SContainer = styled.div`
    width: 100%;
    padding: 40px 0 40px 40px;
    background-color: ${colors.background};
    position: relative;
    overflow: hidden;
`

const CarouselContainer = styled.div`
    display: flex;
    flex-wrap: none;
    pointer-events: none;   
    overflow-x: scroll;
    padding-right: 1500px;

    ::-webkit-scrollbar {
        display: none;
    }
`

const Controller = styled.div`
    position: absolute;
    top: 0%;
    bottom: 0;
    width: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    :after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right:0;
        background-color: ${colors.background};
        opacity: 0.7;

    }
`

const ControllerLeft = styled(Controller)`
    left: 0;
`

const ControllerRight = styled(Controller)`
    right: 0;
`

const IconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: grid;
    place-items: center;
    z-index: 2; 
    cursor: pointer;

    svg {
        width: 20px;
        height: 20px;
    }
`

const displayProjects = listProjects.map((project, i) => {
    return (<ProjectItem name={project.name} projectName={project.projectName} img={project.img} to={project.to} key={i}/>)
})


function ProjectCarousel() {
    const [activeIndex, SetActiveIndex] = useState(0)
    const scrollRef = useRef(null)
    const totalProject = 12

    const handleClickBack = () => {
        let width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

        let scroll = width < 769 ? 315 : 400;

        let altIndex = activeIndex === 0 ? (totalProject - 1) : activeIndex - 1
        SetActiveIndex(altIndex)
        scrollRef.current.scrollTo({
            top: 0,
            left: (scroll * altIndex),
            behavior: 'smooth'
          });
    }

    const handleClickNext = () => {
        let width = window.innerWidth
        || document.documentElement.clientWidth
        || document.body.clientWidth;

         let scroll = width < 769 ? 315 : 400;
        let altIndex = activeIndex === (totalProject - 1) ? 0 : activeIndex + 1
        SetActiveIndex(altIndex)
        scrollRef.current.scrollTo({
            top: 0,
            left: (scroll * altIndex),
            behavior: 'smooth'
          });
    }

    return (
        <SContainer>
                <CarouselContainer ref={scrollRef}>
                    {displayProjects}
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

export default ProjectCarousel
