import React, { Component } from 'react'
import PropTypes from 'prop-types'

class VideoGame extends Component {
  render() {
    const { title, developer } = this.props

    return (
      <div>
        <div>
          {`O título é ${title}`}<br />Empresa desenvolvedora: {developer}
        </div>
        <br />
      </div>
    )
  }
}

VideoGame.propTypes = {
  title: PropTypes.string,
  developer: PropTypes.string
}

export default VideoGame