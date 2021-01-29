import React, { useState } from 'react';
import './scss/style.scss';

function App() {
	const [breakLength, setBreakLength] = useState(5);
	const [sessionLength, setSessionLength] = useState(25);
	const [isRunning, setIsRunning] = useState(false);

	const handleIncrement = (e) => {
		if (e.target.id === 'session-increment') {
			setSessionLength(sessionLength + 1)
		} else if (e.target.id === 'break-increment') {
			setBreakLength(breakLength + 1)
		} else {
			return
		}
	}

	return (
		<div className='container bg-dark'>
			<main>
				<h1>Pomodoro Clock</h1>
				<div id='timer'>
					<h2 id='timer-label'>Session</h2>
					<div id='time-left' className='x-large'>
						25:00
					</div>
				</div>
				<div id='controls'>
					<button id='start_stop' className='btn'>
						Start/Pause
					</button>
					<button id='reset' className='btn'>
						Reset
					</button>
				</div>
				<div id='time-lengths'>
					<div id='session' className='m-1'>
						<h3 id='session-label'>Session Length</h3>
						<div className='timer-adjust'>
							<button id='session-increment' className='btn' onClick={handleIncrement}>
								+
							</button>
							<span id='session-length' className='large'>
								{sessionLength}
							</span>
							<button id='session-decrement' className='btn'>
								-
							</button>
						</div>
					</div>
					<div id='break' className='m-1'>
						<h3 id='break-label'>Break Length</h3>
						<div className='timer-adjust'>
							<button id='break-increment' className='btn' onClick={handleIncrement}>
								+
							</button>
							<span id='break-length' className='large'>
								{breakLength}
							</span>
							<button id='break-decrement' className='btn'>
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
