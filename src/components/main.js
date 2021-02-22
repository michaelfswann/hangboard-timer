import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import Input from './input';
import Timer from './timer';
import SaveSession from './save-session';

const Main = () => {
  const { isAuthenticated } = useAuth0();

  const [prepare, setPrepare] = useState(10);
  const [hanging, setHanging] = useState(5);
  const [sets, setSets] = useState(6);
  const [resting, setResting] = useState(120);
  const [saved, setSaved] = useState(false)

  const [initialise, setInitialise] = useState(false);
  
  function toggleSaved() {
    setSaved(!saved);
  }

  function toggleInit() {
    setInitialise(!initialise);
    setSaved(false)

    
  }

  

  return (
    <div className="main-div">
      {!initialise && (
        <div className="initialise-div">
          <p className="initialise-p">Please enter times in seconds.</p>
          <div>
            <Input
              name="Preparation:"
              max="30"
              min="5"
              defaultValue={prepare}
              onChange={(e) => setPrepare(e.target.value)}
            />
            <Input
              name="Hang:"
              max="30"
              min="1"
              defaultValue={hanging}
              onChange={(e) => setHanging(e.target.value)}
            />
            <Input
              name="Rest:"
              max="180"
              min="5"
              defaultValue={resting}
              onChange={(e) => setResting(e.target.value)}
            />
            <Input
              name="Sets:"
              max="10"
              min="1"
              defaultValue={sets}
              onChange={(e) => setSets(e.target.value)}
            />
          </div>
          <div className="init-button-div">
            <button onClick={toggleInit}>Initialise</button>
          </div>
        </div>
      )}

      {initialise && (
        <div className="timer-div">
          <Timer
            prepare={prepare}
            hanging={hanging}
            resting={resting}
            sets={sets}
            toggleInit={toggleInit}
            toggleSaved={toggleSaved}
          />
        </div>
      )}
      {isAuthenticated && !saved && (
        <div className="save-session-div">
          <SaveSession hanging={hanging} resting={resting} sets={sets} toggleSaved={toggleSaved} />
        </div>
      )}
      {!isAuthenticated && (
        <div className="please-login-div">
          <p>Please login to see data and store sessions...</p>
        </div>
      )}

      {isAuthenticated && saved && (
        <div className="saved-div">
          <p>Session saved.</p>
        </div>
      )}
    </div>
  );
};

export default Main;
