import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentSelectedColor: null
    }
  }

  findCurrentSelectedColor = (color) => {
    console.log(`Selected Color ${color}`)
    this.setState({
      currentSelectedColor: color
    })
  }

  sendCurrentSelectorColor = () => {
    const color = this.state.currentSelectedColor
    console.log(`sending ${color}`)
    return color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColorF={this.sendCurrentSelectorColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector currentSelectedColorFunction = {this.findCurrentSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
