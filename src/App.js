import './scss/style.scss';

function App() {
  return (
    <div className="container bg-success">
      <main>
        <h1>Pomodoro Clock</h1>
        <div id="timer">
          <h2 id="timer-label">Session</h2>
          <div id="time-left">25:00</div>
        </div>
        <div id="controls">
          <button id="start_stop">Start/Pause</button>
          <button id="reset">Reset</button>
        </div>
        <div id="time-lengths">
          <div id="session">
            <h3 id="session-label">Session Length</h3>
            <button id="session-increment">+</button>
            <span id="session-length">25</span>
            <button id="session-decrement">-</button>
          </div>
          <div id="break">
            <h2 id="break-label">Break Length</h2>
            <button id="break-increment">+</button>
            <span id="break-length">5</span>
            <button id="break-decrement">-</button>
          </div>
        </div>
      </main>
      
    </div>
  );
}

export default App;
