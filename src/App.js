import React, { useState, useEffect, useRef } from 'react';
import './scss/style.scss';

function App() {
	const [breakLength, setBreakLength] = useState(5);
	const [sessionLength, setSessionLength] = useState(.1);
	const [remainingTime, setRemainingTime] = useState(sessionLength * 60);
	const [currentTimer, setCurrentTimer] = useState('Session');
	const [isRunning, setIsRunning] = useState(false);

	let intervalRef = useRef();
	const countDown = () => {
		setRemainingTime((prev) => prev - 1);
	};
	const switchTimer = () => {
		return currentTimer === 'Session' ? setCurrentTimer('Break') : setCurrentTimer('Session');
	};
	useEffect(() => {
		if (isRunning) {
			intervalRef.current = setInterval(countDown, 1000);
			return () => clearInterval(intervalRef.current);
		}
	}, [isRunning]);
	
	useEffect(() => {
		if(remainingTime === 0) {
			switchTimer();
			setIsRunning(false);
		}
	// eslint-disable-next-line	
	}, [remainingTime]);


	const handleIncrement = (e) => {
		if (!isRunning) {
			if (e.target.id === 'session-increment' && sessionLength <= 59) {
				setSessionLength(sessionLength + 1);
				if (currentTimer === 'Session') {
					setRemainingTime((sessionLength + 1) * 60);
				}
			} else if (e.target.id === 'break-increment' && breakLength <= 59) {
				setBreakLength(breakLength + 1);
				if (currentTimer === 'Break') {
					setRemainingTime((breakLength + 1) * 60);
				}
			} else {
				return;
			}
		}
	};
	const handleDecrement = (e) => {
		if (!isRunning) {
			if (e.target.id === 'session-decrement' && sessionLength > 1) {
				setSessionLength(sessionLength - 1);
				if (currentTimer === 'Session') {
					setRemainingTime((sessionLength - 1) * 60);
				}
			} else if (e.target.id === 'break-decrement' && breakLength > 1) {
				setBreakLength(breakLength - 1);
				if (currentTimer === 'Break') {
					setRemainingTime((breakLength - 1) * 60);
				}
			} else {
				return;
			}
		}
	};
	const handleTimer = () => {
		return setIsRunning(!isRunning);
	};

	const displayTime = (timeInSeconds) => {
		let minutes = Math.floor(timeInSeconds / 60);
		let seconds = timeInSeconds - minutes * 60;
		return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
	};

	return (
		<div className='container bg-dark'>
			<main>
				<h1>Pomodoro Clock</h1>
				<div id='timer'>
					<h2 id='timer-label'>{currentTimer}</h2>
					<div id='time-left' className='x-large'>
						{displayTime(remainingTime)}
					</div>
				</div>
				<div id='controls'>
					<button id='start_stop' className='btn' onClick={handleTimer}>
						{isRunning ? 'Stop' : 'Start'}
					</button>
					<button id='reset' className='btn'>
						Reset
					</button>
				</div>
				<div id='time-lengths'>
					<div id='session' className='m-1'>
						<h3 id='session-label'>Session Length</h3>
						<div className='timer-adjust'>
							<button
								id='session-increment'
								className='btn'
								onClick={handleIncrement}
							>
								+
							</button>
							<span id='session-length' className='large'>
								{sessionLength}
							</span>
							<button
								id='session-decrement'
								className='btn'
								onClick={handleDecrement}
							>
								-
							</button>
						</div>
					</div>
					<div id='break' className='m-1'>
						<h3 id='break-label'>Break Length</h3>
						<div className='timer-adjust'>
							<button
								id='break-increment'
								className='btn'
								onClick={handleIncrement}
							>
								+
							</button>
							<span id='break-length' className='large'>
								{breakLength}
							</span>
							<button
								id='break-decrement'
								className='btn'
								onClick={handleDecrement}
							>
								-
							</button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
