import React, { useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

const SaveSession = ({ hanging, sets, resting }) => {
  const [maxSession, setMaxSession] = useState(false);
  const [weight, setWeight] = useState(0);

  const { getAccessTokenSilently, user } = useAuth0();

  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const date = new Date().toISOString().split('T')[0];

  function onChangeMaxSession(event) {
    setMaxSession(event.target.checked);
  }

  function onChangeWeight(event) {
    setWeight(parseInt(event.target.value));
  }

  async function asyncSaveSession() {
    const accessToken = await getAccessTokenSilently();

    const requestOptions = {
      mode: 'cors',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        date_of_session: date,
        user_email: user.email,
        weight_added_in_kg: weight,
        max_hang_session: true,
        rest_time_seconds: resting,
        hanging_time_seconds: hanging,
        number_sets: sets,
        max_hang_session: maxSession
      })
    };

    const response = await fetch(` ${serverUrl}/mongo`, requestOptions);
    console.log(response);
    const data = await response.json();
  }
  return (
    <div>
      <div className="max-hang-checkbox-div">
        <label>Add session data to max hang graph?</label>
        <input type="checkbox" onChange={onChangeMaxSession}></input>
      </div>
      <div>
        <label>Weight</label>
        <input type="number" onChange={onChangeWeight}></input>
      </div>
      <div className="save-session-button-div">
        <button onClick={asyncSaveSession}>Save Session!</button>
      </div>
    </div>
  );
};

export default SaveSession;
