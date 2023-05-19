import React, { useContext, useEffect, useRef } from 'react';
import { TimerContext } from './TimerContext';
import alarm from './alarm.wav';

export default function Timer() {
  const { state, dispatch } = useContext(TimerContext);
  let minute, seconds;
  if (state.whichTimer === 'session') {
    minute = Math.trunc(state.sessionCountDown / 60);
    seconds = state.sessionCountDown % 60;
  } else {
    minute = Math.trunc(state.breakCountDown / 60);
    seconds = state.breakCountDown % 60;
  }

  let interval = useRef(null);
  let intervalBreak = useRef(null);

  let audioRef = useRef(null);

  useEffect(() => {
    if (state.status == 'playing') {
      if (state.whichTimer == 'session') {
        interval.current = setInterval(() => dispatch({ type: 'COUNT_DOWN_SESSION' }), 1000);
      } else {
        intervalBreak.current = setInterval(() => dispatch({ type: 'COUNT_DOWN_BREAK' }), 1000);
      }
    } else {
      if (state.whichTimer == 'session') {
        clearInterval(interval.current);
        clearInterval(intervalBreak.current);
      }
    }
  }, [state.status, state.whichTimer]);

  if (state.sessionCountDown === -1) {
    audioRef.current.play();
    clearInterval(interval.current);
    dispatch({ type: 'CHANGE_TO_BREAK' });
  }

  if (state.breakCountDown === -1) {
    audioRef.current.play();
    clearInterval(intervalBreak.current);
    dispatch({ type: 'CHANGE_TO_SESSION' });
  }

  return (
    <div id='timer'>
      <div id='timer-label' className='timer-label'>
        {state.whichTimer === 'session' ? 'Session' : 'Break'}
      </div>
      <div id='time-left' className='time-left' style={minute < 1 ? { color: 'red' } : null}>
        {(minute < 10 ? '0' : '') + minute + (seconds < 10 ? ':0' : ':') + seconds}
      </div>
      <audio src={alarm} ref={audioRef} id='beep'></audio>
    </div>
  );
}
