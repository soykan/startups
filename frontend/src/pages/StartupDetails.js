import * as React from 'react';
import { useParams } from 'react-router-dom';

const StartupDetails = () => {
  let { startupName } = useParams();

  return (
    <div><h1>STARTUP NAME : {startupName}</h1></div>
  )
}

export default StartupDetails;