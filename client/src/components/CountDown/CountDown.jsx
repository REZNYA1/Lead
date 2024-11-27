import React, { useEffect, useState } from 'react';

const CountDown = ({ hours = 0, minutes = 0, seconds = 0, setIsFinished, isFinished, setTimeIsUp }) => {
	const [over, setOver] = useState(false);
	const [[h, m, s], setTime] = useState([hours, minutes, seconds]);

	const tick = () => {
		if (over) return;

		if (h === 0 && m === 0 && s === 0) {
			setOver(true);
		} else if (m === 0 && s === 0) {
			setTime([h - 1, 59, 59]);
		} else if (s == 0) {
			setTime([h, m - 1, 59]);
		} else {
			setTime([h, m, s - 1]);
		}
	};

	useEffect(() => {
		const timerID = setInterval(() => tick(), 1000);

		if (m <= 0 && s <= 0) {
			setIsFinished(true);
			setTimeIsUp(true);
		}

		return () => clearInterval(timerID);
	});

	useEffect(e => {
		console.log(isFinished);
		if (isFinished) {
			setOver(true);
		}

	}, [isFinished])

	return (
		<div>
			<p className='timer'>Time left: <span className='time'>{`${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`}</span></p>
		</div>
	);
};

export default CountDown;