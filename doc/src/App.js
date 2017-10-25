import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Agenda from 'material-ui-agenda';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="app_container">
          <Agenda locale="fr"/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
