import React, {useState, useRef, useEffect, useLocation, useContext} from 'react'
import styled from 'styled-components'
import WebGLView from './WebGLView';
import { useHistory } from 'react-router-dom'

class App {

	constructor() {

	}

	init() {
		this.initWebGL();
		this.addListeners();
		this.animate();
		this.resize();
	}

	initWebGL() {
		this.webgl = new WebGLView(this);
		document.querySelector('.container').appendChild(this.webgl.renderer.domElement);
	}


	addListeners() {
		this.handlerAnimate = this.animate.bind(this);

		window.addEventListener('resize', this.resize.bind(this));
		// window.addEventListener('keyup', this.keyup.bind(this));
		
		// const el = this.webgl.renderer.domElement;
		// el.addEventListener('click', this.click.bind(this));
	}

	animate() {
		this.update();
		this.draw();

		this.raf = requestAnimationFrame(this.handlerAnimate);
	}

	// ---------------------------------------------------------------------------------------------
	// PUBLIC
	// ---------------------------------------------------------------------------------------------

	update() {
		// if (this.gui.stats) this.gui.stats.begin();
		if (this.webgl) this.webgl.update();
		// if (this.gui) this.gui.update();
	}

	draw() {
		if (this.webgl) this.webgl.draw();
		// if (this.gui.stats) this.gui.stats.end();
	}

	distroy() {
		if (this.webgl) this.webgl.distroy();
	}

	// ---------------------------------------------------------------------------------------------
	// EVENT HANDLERS
	// ---------------------------------------------------------------------------------------------

	resize() {
		if (this.webgl) this.webgl.resize();
	}

	// click(e) {
	// 	this.webgl.next();
	// }
}

const SCanvas = styled.div`
    width: 100%;
    height: 100%;
   
   canvas {
       width: 100%;
   }
`

function CanvasPerson({person}) {

	const canvas = useRef(null)
	 const history = useHistory() 

    useEffect(() => {
        window.app = new App();
		window.app.init();
	}, [canvas])

	useEffect(() => {
		return () => {
			window.app.distroy()
		}
	}, [])
	
    return (
        <SCanvas ref={canvas} className={`container ${person}`}>
        </SCanvas>
    )
}

export default CanvasPerson
