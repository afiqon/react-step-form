import React, { Component } from 'react'
import MuiThemeProvider from 
'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {
  continue = e => {
    // PROCESS FORM //
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Success" />
          <h1>Thank You For Your Submission</h1>
          <p>You will get an email with further instructions</p>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button : {
    margin: 15
  }
}

export default Success
