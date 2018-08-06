import React, { Component } from 'react';

export default class ColorSelector extends Component {

  setColor = (event) => {
    this.props.setColorMethod(event.target.dataset.id)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} onClick={this.setColor} className="color-swatch" data-id={str} style={{backgroundColor: str}}/>
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
