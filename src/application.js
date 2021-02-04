import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';

import Input from './input';
import Timer from './timer';
import AuthenticationButton from './authentication-button';
import LogoutButton from './logout-button';
import Profile from './profile';

const Application = () => {
  const { isAuthenticated } = useAuth0();

  const [prepare, setPrepare] = useState(10);
  const [hanging, setHanging] = useState(5);
  const [sets, setSets] = useState(6);
  const [resting, setResting] = useState(120);

  const [initialise, setInitialise] = useState(false);

  function toggleInit() {
    setInitialise(!initialise);
  }

  return (
    <div className="application-main-div">
      {isAuthenticated && <Profile />}
      {!initialise && (
        <div className="inputs">
          <p>Please enter times in seconds.</p>
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
      )}
      {!initialise && (
        <div className="init-button-div">
          <button onClick={toggleInit}>Initialise</button>
        </div>
      )}
      {initialise && (
        <Timer
          prepare={prepare}
          hanging={hanging}
          resting={resting}
          sets={sets}
          toggleInit={toggleInit}
        />
      )}
      <AuthenticationButton />
    </div>
  );
};

export default Application;
