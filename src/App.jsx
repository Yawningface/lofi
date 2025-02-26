import React, { useState } from 'react';
import LofiPlayer from './components/LofiPlayer';
import PomodoroComponent from './components/PomodoroComponent.jsx';
import ChronometerComponent from './components/ChronometerComponent.jsx';

function App() {
  const [showPomodoro, setShowPomodoro] = useState(false);
  const [showChronometer, setShowChronometer] = useState(false);

  const togglePomodoro = () => {
    setShowPomodoro(prev => !prev);
  };

  const toggleChronometer = () => {
    setShowChronometer(prev => !prev);
  };

  return (
    <div className="w-full min-h-screen bg-[#111827] flex flex-col items-center justify-center gap-10 p-6">
      <h1 className="text-4xl font-bold text-white mb-2 hover:text-[#ebb305] transition">
        Lofi Hip-Hop Player
      </h1>
      <h2 className="text-xl text-[#9ca3af] mb-8">
        Chill Beats to Relax and Focus
      </h2>
      <LofiPlayer />

      <div className="flex flex-col items-center gap-1">
        <a
          onClick={togglePomodoro}
          className="cursor-pointer text-[#9ca3af] hover:text-[#ebb305] transition"
        >
          Toggle Pomodoro
        </a>
        <a
          onClick={toggleChronometer}
          className="cursor-pointer text-[#9ca3af] hover:text-[#ebb305] transition"
        >
          Toggle Chronometer
        </a>
      </div>

      {showPomodoro && <PomodoroComponent />}
      {showChronometer && <ChronometerComponent />}
    </div>
  );
}

export default App;
