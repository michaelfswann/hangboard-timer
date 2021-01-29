import React, { useState } from 'react';

import Input from './input';
import Button from './button';
import Timer from './timer';

const Component = () => {
  const [prepare, setPrepare] = useState(5);
  const [hanging, setHanging] = useState(5);
  const [sets, setSets] = useState(6);
  const [resting, setResting] = useState(5);

  const [initialise, setInitialise] = useState(false);

  function toggleInit() {
    setInitialise(!initialise);
  }

  return (
    <div>
      {!initialise && (
        <Input
          name="Hang for:"
          max="30"
          min="1"
          defaultValue={hanging}
          onChange={(e) => setHanging(e.target.value)}
        />
      )}
      {!initialise && (
        <Input
          name="Rest for:"
          max="180"
          min="5"
          defaultValue={resting}
          onChange={(e) => setResting(e.target.value)}
        />
      )}
      {!initialise && (
        <Input
          name="Number of sets:"
          max="10"
          min="1"
          defaultValue={sets}
          onChange={(e) => setSets(e.target.value)}
        />
      )}
      <br></br>
      {!initialise && <button onClick={toggleInit}>Initialise</button>}
      {initialise && (
        <Timer
          prepare={prepare}
          hanging={hanging}
          resting={resting}
          sets={sets}
          toggleInit={toggleInit}
        />
      )}
    </div>
  );
};

export default Component;
