import React, { useContext } from 'react';
import { TimerContext } from './TimerContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function TimerSettings() {
  const { state, dispatch } = useContext(TimerContext);

  function sessionDecrement() {
    if (state.sessionSet > 1) {
      dispatch({ type: 'SESSION_DECREMENT' });
    }
  }

  function sessionIncrement() {
    if (state.sessionSet < 60) {
      dispatch({ type: 'SESSION_INCREMENT' });
    }
  }

  function breakDecrement() {
    if (state.breakSet > 1) {
      dispatch({ type: 'BREAK_DECREMENT' });
    }
  }

  function breakIncrement() {
    if (state.breakSet < 60) {
      dispatch({ type: 'BREAK_INCREMENT' });
    }
  }

  let disabled = state.status == 'playing' ? true : false;

  return (
    <div id='timer-settings' className='timer-settings'>
      <div className='setting-wrapper'>
        <div id='session-label' className='setting-label'>
          Session Length
        </div>
        <div id='session-setting' className='session-setting setting-box'>
          <div
            id='session-increment'
            className='setting-arrow'
            onClick={disabled ? null : sessionIncrement}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
          <span id='session-length' className='setting-text'>
            {state.sessionSet}
          </span>
          <div
            id='session-decrement'
            className='setting-arrow'
            onClick={disabled ? null : sessionDecrement}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
      <div className='setting-wrapper'>
        <div id='break-label' className='setting-label'>
          Break Length
        </div>
        <div id='break-setting' className='break-setting setting-box'>
          <div
            id='break-increment'
            className='setting-arrow'
            onClick={disabled ? null : breakIncrement}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
          <span id='break-length' className='setting-text'>
            {state.breakSet}
          </span>
          <div
            id='break-decrement'
            className='setting-arrow'
            onClick={disabled ? null : breakDecrement}
          >
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        </div>
      </div>
    </div>
  );
}
