import React, { useEffect, useState } from 'react';

import { useAuth0 } from '@auth0/auth0-react';

import Graph from './graph';

const exampleData = [
  {
    _id: '601c8f40919ee790d86524f9',
    date_of_session: '2020-10-01',
    weight_added_in_kg: 10
  },
  {
    _id: '601c8f40919ee790d86524fb',
    date_of_session: '2020-12-01',
    weight_added_in_kg: 12
  },
  {
    _id: '601c8f40919ee790d86524fa',
    date_of_session: '2020-14-01',
    weight_added_in_kg: 14
  }
];

const UserData = () => {
/*
** TODO: restart MongoDB 
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
*/
  return (
    <div className="graph">
      <Graph data={exampleData} />
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
