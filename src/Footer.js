import React from 'react';

export default function Footer() {
  return (
    <p className='footer'>
      <span>
        <a href='https://github.com/Kralken/pomodoro-timer' target='_blank' rel='noreferrer'>
          Repo for this site
        </a>{' '}
        |{' '}
      </span>
      <span>
        <a href='https://react.dev/' target='_blank' rel='noreferrer'>
          Learn React
        </a>
      </span>
    </p>
  );
}
