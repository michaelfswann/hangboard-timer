import React, { useState, useEffect } from 'react';

const Timer = ({ prepare, hanging, resting, sets, toggleInit }) => {
  const [seconds, setSeconds] = useState(prepare);
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState('prep');
  const [numSets, setNumSets] = useState(sets);

  function toggle() {
    setIsActive(!isActive);
  }

  //   function reset() {
  //     setSeconds(prepare);
  //     setPhase('prep');
  //     setNumSets(3);
  //     setIsActive(false);
  //   }

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
      (phase === 'prep' || phase === 'rest') &&
      numSets !== 0
    ) {
      setPhase('hang');
      setSeconds(hanging);
      setNumSets(numSets - 1);
    }
    if (seconds === 0 && phase === 'hang' && numSets !== 0) {
      setPhase('rest');
      setSeconds(resting);
    }
    if (seconds === 0 && numSets === 0) {
      setIsActive(false);
      setPhase('complete');
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app">
      <div className="time">
        {phase} ----- {seconds}s ----- sets to go: {numSets}
      </div>
      <div className="row">
        <button
          className={`button button-primary button-primary-${
            isActive ? 'active' : 'inactive'
          }`}
          onClick={toggle}
        >
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button" onClick={toggleInit}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
