import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      color: '',
    }
  }

  setColor = string => {
    this.setState({
      color: string
    }, () => console.log(this.state.color))
  }

  changeColor = () => {
    return this.state.color
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} onClick={this.changeColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector onClick={this.setColor}/>
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
