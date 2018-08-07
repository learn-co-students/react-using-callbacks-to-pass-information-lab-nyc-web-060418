import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch" onClick={this.clickHandle} style={{backgroundColor: str}}/>
    })
  )

  clickHandle = (e) => {
    this.props.colorMethod(e.target.style.backgroundColor)
    console.log(e.target.style.backgroundColor)
  }

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
