import React, { Component } from 'react'
import bestSellingVideoGames from './data'
import VideoGame from './VideoGame'

class VideoGameList extends Component {
  render() {
    return (
      <div>
        <h1>Videogames mais vendidos</h1>
        {bestSellingVideoGames.map((videoGame, index) => {
          return <VideoGame
            key={index}
            title={videoGame.title}
            developer={videoGame.developer}
          />
        })}
      </div>
    )
  }
}

export default VideoGameList