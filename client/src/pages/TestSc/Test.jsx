import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Question from '../../components/Question/Question';
import CountDown from '../../components/CountDown/CountDown';
import './Test.css'
import { tests } from '../../utils/constants';

const Test = () => {
	const params = useParams();

	function preventContext(event) {
		event.preventDefault()
	}

	// useEffect(e => {
	// 	document.addEventListener('contextmenu', preventContext);

	// 	return () => {
	// 		document.removeEventListener('contextmenu', preventContext);
	// 	}
	// }, [])

	const test = tests.find(test => test.key == params.testId);

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [isFinished, setIsFinished] = useState(false);
	const [timeIsUp, setTimeIsUp] = useState(false);

	const handleAnswer = (selectedOption) => {
		test.questions
		if (selectedOption === test.questions[currentQuestionIndex].correctAnswer) {
			setScore((prev) => prev + 1);
		}

		const nextQuestionIndex = currentQuestionIndex + 1;
		if (nextQuestionIndex < test.questions.length) {
			setCurrentQuestionIndex(nextQuestionIndex);
		} else {
			setIsFinished(true);
		}
	};

	function exitFullscreen() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		} else if (document.msExitFullscreen) {
			document.msExitFullscreen();
		}
	}

	function exitFullScreen() {
		exitFullscreen();
		navigator.keyboard.unlock();
	}

	useEffect(e => {

		if (isFinished) {
			exitFullScreen();
		}

	}, [isFinished])

	return (
		<div className='wrapper'>
			<header className='header'>
				<div className="header__container">
					<h1 className='header__title'>{test.name}</h1>
					<CountDown minutes={test.time - 1} seconds={59} setIsFinished={setIsFinished} isFinished={isFinished} setTimeIsUp={setTimeIsUp}></CountDown>
				</div>
			</header>
			<main className='main'>
				<article className="main__test test">
					<div className="test__container">
						<div className="test__body">
							{isFinished ? (
								<div>
									<h1 className='test__over'>{timeIsUp ? "Time is up." : "Test is over!"} Your score:</h1>
									<p className='test__score'><span className='_score'>{score} / {test.questions.length}</span></p>
									<Link className='test__link' to={`/tests`}><span>←</span> Go back to tests</Link>
								</div>
							) : (
								<div>
									<Question
										data={test.questions[currentQuestionIndex]}
										onAnswer={handleAnswer}
									/>
								</div>
							)}
						</div>
					</div>
				</article>
			</main>
		</div>
	);
};

export default Test;