import React, { Component } from 'react';

class Curriculo extends Component {
  render() {
    const { resume, onChange } = this.props;
    return (
      <div className="container">
        Resumo do currículo:
        <textarea
          name="resume"
          maxLength="1000"
          required
          value={resume}
          onChange={onChange}
        />
      </div>
    );
  }
}

export default Curriculo;
