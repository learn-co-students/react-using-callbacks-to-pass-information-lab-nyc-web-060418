import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {
      values: this.props.values,
      color: ""
    }
  }

  setColor = (colorHex) => {
    this.setState({
      color: colorHex
    })
  }

  getColor = () => {
    return this.state.color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} getColorMethod={this.getColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )




  render() {
    return (
      <div id="app">
        <ColorSelector colorMethod={this.setColor}/>
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
