import React, { Component } from 'react';
import Header from './components/Header';
import Player from './components/Player'
import Sidebar from './components/Sidebar'

import './LiveLecture.css'

class LiveLecture extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="main">
          <Player />
          <Sidebar />
        </main>
      </div>
    );
  }
}

export default LiveLecture;
