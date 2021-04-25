import logo from './logo.svg';
import './Internationale.css';
import React from 'react';
import { Button } from '@material-ui/core';

class Internationale extends React.Component {
  render() {
    return (
      <>
        <div className="Internationale">
          <header className="Internationale-header">
            <img src={logo} className="Internationale-logo" alt="logo" />
            <p>
              Edit <code>src/Internationale.js</code> and save to reload.
          </p>
            <a
              className="Internationale-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
          </a>
          </header>
          <Button color="primary">Hello Comrade</Button>
        </div>
      </>
    );
  }
}

export default Internationale;
