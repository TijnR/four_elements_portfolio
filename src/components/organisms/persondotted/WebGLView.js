import 'three';
import * as THREE from 'three';


import InteractiveControls from './controls/InteractiveControls';
import Particles from './particles/Particles';

export default class WebGLView {

	constructor(app) {
		this.app = app;

		this.samples = [
			'images/sample-01.png',
			'images/sample-02.png',
			'images/sample-03.png',
			'images/sample-04.png',
			'images/sample-05.png',
			'images/sample-10.png',
			'images/sample-08.png',
		];

		this.initThree();
		this.initParticles();
		this.initControls();
		this.first = true

		// const rnd = ~~(Math.random() * this.samples.length);
		this.goto(6);
	}

	initThree() {
		// scene
		this.scene = new THREE.Scene();

		// camera
		this.camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 10000);
		this.camera.position.z = 300;

		// renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        // clock
		this.clock = new THREE.Clock(true);
	}

	initControls() {
		this.interactive = new InteractiveControls(this.camera, this.renderer.domElement);
	}

	initParticles() {
		this.particles = new Particles(this);
		this.scene.add(this.particles.container);
	}

	// ---------------------------------------------------------------------------------------------
	// PUBLIC
	// ---------------------------------------------------------------------------------------------

	update() {
		const delta = this.clock.getDelta();

		if (this.particles) this.particles.update(delta);
	}

	draw() {
		this.renderer.render(this.scene, this.camera);
	}

	distroy() {
		this.particles.hide(true)
	}


	//selects image
	goto(index) {
		console.log(this.samples[index])
		// init next
		console.log(this.particles)
		// if (this.particles === undefined) this.particles.init(this.samples[index]);
		
		if(this.first) {
			this.particles.init(this.samples[index]);
		}
		// hide curr then init next
		else {
			this.particles.hide(true).then(() => {
				this.particles.init(this.samples[index]);
			});
			this.first = false
		}

		this.first = false
		
		this.currSample = index;
		console.log(this.currSample)
	}

	// next() {
	// 	if (this.currSample < this.samples.length - 1) this.goto(this.currSample + 1);
	// 	else this.goto(0);
	// }

	// ---------------------------------------------------------------------------------------------
	// EVENT HANDLERS
	// ---------------------------------------------------------------------------------------------

	resize() {
		if (!this.renderer) return;
		this.camera.aspect = window.innerWidth / window.innerHeight;
		this.camera.updateProjectionMatrix();

		this.fovHeight = 2 * Math.tan((this.camera.fov * Math.PI) / 180 / 2) * this.camera.position.z;

		this.renderer.setSize(window.innerWidth, window.innerHeight);

		if (this.interactive) this.interactive.resize();
		if (this.particles) this.particles.resize();
	}
}
