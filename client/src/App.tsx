import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

const callApi = async (): Promise<string> => {
  const response = await fetch('/ping');
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);

  return body.message;
};

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    const doCall = async () => {
      const message = await callApi();
      setData(message);
    };
    doCall();
  });

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <p>{!data ? 'Loading...' : `Received from server: ${data}`}</p>
      </header>
    </div>
  );
}

export default App;
