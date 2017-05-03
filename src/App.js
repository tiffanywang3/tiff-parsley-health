import { css, StyleSheet } from 'aphrodite';
import React, { Component } from 'react';

import './App.css';
import Routes from './components/routes/Routes.jsx';
import logo from './parsley.png';

const sx = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  content: {
    display:'flex',
    justifyContent: 'center',
    maxWidth: '700px',
    margin: '0px auto',
  },
});

class App extends Component {
  render() {
    const { history} = this.props;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Parsley Health</h1>
        </div>
        <div className={css(sx.container)}>
          <h2>Welcome to Parsley Health</h2>
          <div className={css(sx.content)}>
            <Routes history={history}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
