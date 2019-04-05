import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      x: 0,
      y: 0,
      total: 0,
      xtoggle: true,
      add: false,
      sub: false
    }
  }
  setValue = (val) => {
    let { x, y, xtoggle } = this.state
    // this.setState({
    //   x: val
    // })
    xtoggle ?
      this.setState({
        x: val
      }) :
      this.setState({
        y: val
      })
    console.log("x", x)
    console.log("y", y)
  }

  toggleAdd = () => {
    let { add, xtoggle } = this.state
    this.setState({
      xtoggle: !xtoggle,
      add: !add
    })
  }
  toggleSub = () => {
    let {sub, xtoggle} = this.state 
    this.setState ({
      xtoggle: !xtoggle,
      sub: !sub
    })
  }

  // addValue = () => {
  //   let { xtoggle } = this.state
  //   this.setState({
  //     xtoggle: !xtoggle
  //   })
  // }
  // subValue = () => {
  //   let { xtoggle } = this.state
  //   this.setState
  // }
  equals = () => {
    let { x, y, total, sub, add, xtoggle } = this.state
    console.log(sub, add)
    add ? this.setState({
      total: x += y 
    }) : this.setState({
      total: x - y
    })
    
    // this.setState({
    //   x: 0,
    //   y: 0,
    //   total: 0,
    //   xtoggle: true,
    //   add: false,
    //   sub: false
    // })
  }
  render() {
    return (
      <div className="App">
        Calculator!
        <button onClick={() => this.setValue(1)} > 1 </button>
        <button onClick={() => this.setValue(2)}> 2 </button>
        <button onClick={() => this.setValue(3)}> 3 </button>
        <button onClick={() => this.setValue(4)}> 4 </button>
        <button onClick={() => this.setValue(5)}> 5 </button>
        <button onClick={() => this.setValue(6)}> 6 </button>
        <button onClick={() => this.setValue(7)}> 7 </button>
        <button onClick={() => this.setValue(8)}> 8 </button>
        <button onClick={() => this.setValue(9)}> 9 </button>
        <button onClick={() => this.setValue(0)}> 0 </button>
        <button onClick={() => this.toggleAdd()}> + </button>
        <button onClick={() => this.toggleSub()}> - </button>
        <button onClick={() => this.equals()}> = </button>
        <p> {this.state.total} </p>
      </div>
    );
  }
}

export default App;
