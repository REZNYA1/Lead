import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Question from '../../components/Question/Question';
import CountDown from '../../components/CountDown/CountDown';
import './Test.css'
import { tests } from '../../utils/constants';
import { exitFullscreen, fullScreen, isFullscreen } from '../../utils/fullScreen';

const Test = () => {
	const params = useParams();

	function preventContext(event) {
		event.preventDefault()
	}

	useEffect(e => {
		document.addEventListener('contextmenu', preventContext);

		return () => {
			document.removeEventListener('contextmenu', preventContext);
		}
	}, [])

	const test = tests.find(test => test.key == params.testId);

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [score, setScore] = useState(0);
	const [isFinished, setIsFinished] = useState(false);
	const [timeIsUp, setTimeIsUp] = useState(false);
	const [showWarning, setShowWarning] = useState(false);

	const [leaveCounter, setLeaveCounter] = useState(0);

	const isFinishedRef = useRef(isFinished);

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
			document.removeEventListener("fullscreenchange", fullScreenEvent);
		}
	};

	function fullScreenEvent(event) {
		if (!isFullscreen() && !isFinishedRef.current) {
			setLeaveCounter(leaveCounter + 1);
			setShowWarning(true);
		}
	}

	document.addEventListener("fullscreenchange", fullScreenEvent);

	useEffect(e => {
		isFinishedRef.current = isFinished;
		if (isFinished) {
			setIsFinished(true);
			exitFullscreen();
		}

	}, [isFinished])

	const [over, setOver] = useState(false);
	const [seconds, setTime] = useState(10);

	const tick = () => {
		if (over) return;

		if (seconds === 0) {
			setOver(true);
			setIsFinished(true);
			setTime(10);
			setShowWarning(false);
		} else {
			setTime(seconds - 1);
		}
	};

	useEffect(() => {
		if (showWarning) {
			const timerID = setInterval(() => tick(), 1000);

			return () => clearInterval(timerID);
		}
	});

	function goBackToTest(e) {
		setTime(10);
		setShowWarning(false);
		fullScreen();
	}

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
								<div className='block'>
									<h1 className='test__over'>{timeIsUp ? "Time is up." : "Test is over!"} Your score:</h1>
									<div className='leav-counter'>Leaves: ({leaveCounter})</div>
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
				{showWarning
					? <div className="warning">
						<div className="warning__title">You are not allowed to leave fullscreen mode!</div>
						<div className='warning__counter'>You have <span className='_red'>{`${seconds.toString().padStart(2, '0')}`}</span> seconds to go back to the test, or the result will be canceled.</div>
						<button onClick={goBackToTest} className='warning__button'>Go back to the test</button>
					</div>
					: <></>
				}
			</main>
		</div>
	);
};

export default Test;