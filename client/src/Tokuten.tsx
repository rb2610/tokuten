import * as React from 'react';
import TestTable from './TestTable';

require('./styles/Tokuten.css');

// TODO: Fix this at some point:
// import logo from '../images/logo.svg';
// const logo = require('./images/logo.svg');

class Tokuten extends React.Component {
  public render() {
    return (
      <div className="main">
        <header className="main-header">
          <h1 className="main-title">Tokuten</h1>
        </header>
        <p className="main-intro">
          Scores and stuff.
        </p>
        <TestTable />
      </div>
    );
  }
}

export default Tokuten;
