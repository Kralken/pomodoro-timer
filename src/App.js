import React from 'react';
import Timer from './Timer';
import TimerSettings from './TimerSettings';
import TimerContextProvider from './TimerContext';
import TimerControls from './TimerControls';
import Footer from './Footer';

export default function App() {
  return (
    <TimerContextProvider>
      <div id='pomodoro-timer' className='pomodoro-timer'>
        <h1 id='title' className='title'>
          25 + 5 Clock
        </h1>
        <Timer />
        <TimerSettings />
        <TimerControls />
      </div>
      <Footer />
    </TimerContextProvider>
  );
}
