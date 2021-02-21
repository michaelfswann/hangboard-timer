import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import Graph from './graph';

const UserData = () => {
  const [data, setData] = useState([]);
  const serverUrl = process.env.REACT_APP_SERVER_URL;

  const { getAccessTokenSilently, user } = useAuth0();

  const callSecureApi = async () => {
    try {
      const token = await getAccessTokenSilently();

      const response = await fetch(
        `${serverUrl}/mongo/date/email?email=${user.email}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Access-Control-Allow-Origin': '*'
          }
        }
      );

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    callSecureApi();
  }, []);

  return (
    <div className="graph">
      <Graph data={data} />
    </div>
  );
};

export default UserData;

{
  /* <div className="container">
      <h1>USER DATA FROM EXTERNAL API</h1>
      <p>
        Use these buttons to call an external API. The protected API call has an
        access token in its authorization header. The API server will validate
        the access token using the Auth0 Audience value.
      </p>
      <div
        className="btn-group mt-5"
        role="group"
        aria-label="External API Requests Examples"
      >
        <button
          type="button"
          className="btn btn-primary"
          onClick={callSecureApi}
        >
          Get Protected Message
        </button>
      </div>
    </div> */
}
