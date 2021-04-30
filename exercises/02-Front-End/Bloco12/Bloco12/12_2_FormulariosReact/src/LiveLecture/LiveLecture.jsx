import React from 'react';
import LoginForm from './LoginForm';
import './App.css';
import RegistrationForm from './Registration';

class LiveLecture extends React.Component {
  render() {
    return (
      <main className="App">
        <LoginForm />
        <RegistrationForm />
      </main>
    );
  }
}

export default LiveLecture;