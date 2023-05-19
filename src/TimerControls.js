import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { TimerContext } from './TimerContext';

export default function TimerControls() {
  const { state, dispatch } = useContext(TimerContext);

  const handleClick = () => {
    if (state.status === 'paused') {
      dispatch({ type: 'PLAY' });
    } else {
      dispatch({ type: 'PAUSE' });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    document.getElementById('beep').pause();
    document.getElementById('beep').load();
  };

  return (
    <div id='timer-controls' className='timer-controls'>
      <div id='start_stop' className='control-icon' onClick={handleClick}>
        <FontAwesomeIcon icon={state.status == 'paused' ? faPlay : faPause} />
      </div>
      <div className='control-icon' onClick={handleReset} id='reset'>
        <FontAwesomeIcon icon={faRotateLeft} />
      </div>
    </div>
  );
}
