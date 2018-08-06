import React, { Component } from 'react';

export default class ColorSelector extends Component {

  setSelectedColor = (event) => {
    const color = event.target.style.backgroundColor
    const callbackF = this.props.currentSelectedColorFunction
    callbackF(color)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx}
      className="color-swatch"
      onClick={this.setSelectedColor}
      style={{backgroundColor: str}}/>
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
