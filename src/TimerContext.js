import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

//initial state and reducer function
export const initialState = {
  sessionSet: 25,
  breakSet: 5,
  sessionCountDown: 1500,
  breakCountDown: 300,
  status: 'paused',
  whichTimer: 'session',
};

export function timerReducer(state, action) {
  switch (action.type) {
    case 'SESSION_DECREMENT': {
      return {
        ...state,
        sessionSet: state.sessionSet - 1,
        sessionCountDown: (state.sessionSet - 1) * 60,
      };
    }
    case 'SESSION_INCREMENT': {
      return {
        ...state,
        sessionSet: state.sessionSet + 1,
        sessionCountDown: (state.sessionSet + 1) * 60,
      };
    }
    case 'BREAK_DECREMENT': {
      return {
        ...state,
        breakSet: state.breakSet - 1,
        breakCountDown: (state.breakSet - 1) * 60,
      };
    }
    case 'BREAK_INCREMENT': {
      return {
        ...state,
        breakSet: state.breakSet + 1,
        breakCountDown: (state.breakSet + 1) * 60,
      };
    }
    case 'RESET': {
      return {
        ...initialState,
      };
    }
    case 'PLAY': {
      return {
        ...state,
        status: 'playing',
      };
    }
    case 'PAUSE': {
      return {
        ...state,
        status: 'paused',
      };
    }
    case 'COUNT_DOWN_SESSION': {
      return {
        ...state,
        sessionCountDown: state.sessionCountDown - 1,
      };
    }
    case 'COUNT_DOWN_BREAK': {
      return {
        ...state,
        breakCountDown: state.breakCountDown - 1,
      };
    }
    case 'CHANGE_TO_BREAK': {
      return {
        ...state,
        whichTimer: 'break',
        sessionCountDown: state.sessionSet * 60,
      };
    }
    case 'CHANGE_TO_SESSION': {
      return {
        ...state,
        whichTimer: 'session',
        breakCountDown: state.breakSet * 60,
      };
    }
    default: {
      throw new Error('invalid action type for timerReducer');
    }
  }
}

//context
export const TimerContext = createContext(null);

export default function TimerContextProvider({ children }) {
  const [state, dispatch] = useReducer(timerReducer, initialState);

  return <TimerContext.Provider value={{ state, dispatch }}>{children}</TimerContext.Provider>;
}

TimerContextProvider.propTypes = {
  children: PropTypes.node,
};
