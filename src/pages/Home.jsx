import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Home.css";

const Home = () => {
	window.addEventListener('scroll', e => {
		document.querySelector('html').style.cssText = `--scrollTop: ${window.scrollY}px`;
	});
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content'
	})

	return (
		<div className="wrapper">
			<div className="content">

				<header className="main-header">
					<div className="layers">
						<div className="layer__header">
							<div className="layers__caption">test platform</div>
							<div className="layers__title">Horizon</div>
						</div>
						<div className="layer layers__base" style={{backgroundImage: "url('./images/layer-base.png')"}}></div>
						<div className="layer layers__middle" style={{backgroundImage: "url('./images/layer-middle.png')"}}></div>
						<div className="layer layers__front" style={{backgroundImage: "url('./images/layer-front.png')"}}></div>
					</div>
				</header>

				<article className="main-article" style={{backgroundImage: "url('./images/dungeon.png')"}}>
					<div className="main-article__content">
						<h2 className="main-article__header">Rules</h2>
						<p className="main-article__paragraph">During the test, all keys are disabled; attempting to
							minimize or close the window will result in the test being terminated.</p>
					</div>
					<button className="startButton">Start</button>
				</article>

			</div>
		</div>
	);
};

export default Home;