import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Tests.css";
import Popup from '../../components/Popup';

const Tests = () => {

	const tests = [
		{ key: 1, name: "What is Big O? Algorithm Analysis.", author: "Maksym Ivanov", questions: 5, time: 12, active: true },
		{ key: 2, name: "Artificial Intelligence.", author: "Artem Starykov", questions: 12, time: 45, active: true }
	]

	const [isPopupOpen, setIsPopupOpen] = useState(false);
	const [time, setTime] = useState(0);
	const [currentKey, setCurrentKey] = useState(1);

	const openPopup = (e) => {
		e.stopPropagation()
		let key;

		if (!e.target.classList.contains("preview-test")) {
			key = e.target.closest('.preview-test').dataset.key
			console.log(key);
		} else {
			key = e.target.dataset.key
			console.log(key);

		}
		setCurrentKey(key);
		let timeToDo = tests.find(test => test.key == key).time

		setTime(timeToDo)
		setIsPopupOpen(true);
	}
	const closePopup = () => setIsPopupOpen(false);

	return (
		<div className='wrapper'>
			<header className='header'>
				<div className="header__container">
					<h1 className='header__title'>Test Platform</h1>
					<div className="header__menu menu">
						<button type="button" className="menu__icon icon-menu"><span></span></button>
						<nav className="menu__body">
							<ul className="menu__list">
								<li className="menu__item"><a className='menu__link' href="/"><span>←</span> Home</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			<main className='main'>
				<article className="main__tests tests">
					<div className="tests__container">
						<h1 className="tests__title">Upcoming tests</h1>
						<div className="tests__body">
							{tests.map(e =>
								<div data-key={e.key} onClick={openPopup} key={e.key} className="tests__preview preview-test">
									<div className="preview-test__header">
										<h1 className="preview-test__name">{e.name}</h1>
										<div className="preview-test__author">Author: <span className='_colored'>{e.author}</span></div>
									</div>
									<div className="preview-test__info"><span>Questions: <span className='_colored'>{e.questions}</span></span><span>Time: <span className='_colored'>{e.time}</span> min.</span></div>
								</div>
							)}
						</div>
					</div>
				</article>
			</main>
			<Popup isOpen={isPopupOpen} onClose={closePopup}>
				<div className="popup__title">The test will take <span className='_colored'>{time}</span> minutes, <span className='_warning'>you will not be able to minimize page or leave fullscreen mode!</span></div>
				<div className="popup__buttons">
					<button className="popup__cancel _btn" onClick={closePopup}>Cancel</button>
					<button className="popup__start _btn" onClick={closePopup}><Link className='popup__link' to={`/test/${currentKey}`}>Start</Link></button>
				</div>
			</Popup>
		</div>
	);
};

export default Tests;