import React, { useState } from 'react';

import Input from './input';
import Button from './button';
import Timer from './timer';

const Component = () => {
  const [prepare, setPrepare] = useState(5);
  const [hanging, setHanging] = useState(5);
  const [sets, setSets] = useState(6);
  const [resting, setResting] = useState(5);

  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  return (
    <div>
      {!isActive && (
        <Input
          name="Hang for:"
          max="30"
          min="1"
          defaultValue={hanging}
          onChange={(e) => setHanging(e.target.value)}
        />
      )}
      {!isActive && (
        <Input
          name="Rest for:"
          max="180"
          min="5"
          defaultValue={resting}
          onChange={(e) => setResting(e.target.value)}
        />
      )}
      {!isActive && (
        <Input
          name="Number of sets:"
          max="10"
          min="1"
          defaultValue={sets}
          onChange={(e) => setSets(e.target.value)}
        />
      )}
      <br></br>
      {!isActive && <button onClick={toggle}>Initialise</button>}
      {isActive && (
        <Timer
          prepare={prepare}
          hanging={hanging}
          resting={resting}
          sets={sets}
        />
      )}
    </div>
  );
};

export default Component;
