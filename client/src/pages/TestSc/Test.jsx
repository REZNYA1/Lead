import React from 'react';
import { useParams } from 'react-router-dom';

const Test = () => {
	const params = useParams();

	const tests = [
		{
			key: 1,
			name: "What is Big O? Algorithm Analysis.",
			time: 12,
			author: "Maksym Ivanov",
			questions: [
				{
					question: "What does Big O notation describe?",
					options: [
						"The worst-case performance of an algorithm",
						"The exact runtime of an algorithm",
						"The memory usage of an algorithm",
						"The best-case performance of an algorithm",
					],
					correctAnswer: "The worst-case performance of an algorithm",
				},
				{
					question: "Which of the following is the fastest Big O complexity?",
					options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
					correctAnswer: "O(1)",
				},
				{
					question: "What is the Big O complexity of a binary search algorithm?",
					options: ["O(n)", "O(n log n)", "O(log n)", "O(1)"],
					correctAnswer: "O(log n)",
				}
			],
		},
		{
			key: 2,
			name: "Artificial Intelligence.",
			time: 45,
			author: "Artem Starykov",
			questions: [
				{
					question: "What is the primary goal of Artificial Intelligence?",
					options: [
						"To build machines that can think and act like humans",
						"To automate repetitive tasks",
						"To replace all human jobs",
						"To process data faster than humans",
					],
					correctAnswer: "To build machines that can think and act like humans",
				},
				{
					question: "Which branch of AI focuses on systems that learn from data?",
					options: ["Machine Learning", "Natural Language Processing", "Computer Vision", "Robotics"],
					correctAnswer: "Machine Learning",
				},
				{
					question: "What is a Turing Test designed to evaluate?",
					options: [
						"The intelligence of a machine",
						"The efficiency of an algorithm",
						"The performance of hardware",
						"The ethical implications of AI",
					],
					correctAnswer: "The intelligence of a machine",
				}
			],
		}
	]

	const test = tests.find(test => test.key == params.testId);

	function goFullscreen() {
		const element = document.documentElement;
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullscreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		}
	}

	function fullScreen() {
		goFullscreen();
		navigator.keyboard.lock();
	}

	return (
		<div className='wrapper'>
			<header className='header'>
				<div className="header__container">
					<h1 className='header__title'>{test.name}</h1>
				</div>
			</header>
			<main className='main'>
				<article className="main__test test">
					{/* <div className="tests__preview preview-test">
						<div className="preview-test__header">
							<h1 className="preview-test__name">{test.name}</h1>
							<div className="preview-test__author">Author: <span className='_colored'>{test.author}</span></div>
						</div>
						<div className="preview-test__info"><span>Questions: <span className='_colored'>{test.questions}</span></span><span>Time: <span className='_colored'>{test.time}</span> min.</span></div>
					</div> */}
					<h1 className="preview-test__name">{test.name}</h1>
					<h3 className="preview-test__name">{test.author}</h3>
				</article>
			</main>
		</div>
	);
};

export default Test;