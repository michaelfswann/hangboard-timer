import React, { useState, useEffect } from 'react';

const Timer = ({ prepare, hanging, resting, sets, toggleInit }) => {
  const [seconds, setSeconds] = useState(prepare);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('Get Ready');
  const [numSets, setNumSets] = useState(sets);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    if (
      seconds === 0 &&
      (phase === 'Get Ready' || phase === 'Rest') &&
      numSets !== 0
    ) {
      setPhase('Hang');
      setSeconds(hanging);
      setNumSets(numSets - 1);
    }
    if (seconds === 0 && phase === 'Hang' && numSets !== 0) {
      setPhase('Rest');
      setSeconds(resting);
    }
    if (seconds === 0 && numSets === 0) {
      setIsActive(false);
      setPhase('Complete');
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="timer">
      <div className="phase-display">{phase}</div>
      {phase !== 'Complete' && <div className="seconds-display">{seconds}</div>}
      {phase !== 'Complete' && (
        <div className="sets-display">Set: {numSets}</div>
      )}
      <div className="timer-buttons-div">
        {phase !== 'Complete' && (
          <button
            className={`button button-primary button-primary-${
              isActive ? 'active' : 'inactive'
            }`}
            onClick={toggle}
          >
            {isActive ? 'Pause' : 'Start'}
          </button>
        )}
        <button className="button" onClick={toggleInit}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
