import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amountDue: '',
      amountReceived: '',
      twenties: '0',
      tens: '0',
      fives: '0',
      ones: '0',
      quarters: '0',
      dimes: '0',
      nickels: '0',
      pennies: '0',
      output: '',
    }

    this.calculate = this.calculate.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculate() {
    var amountDue = this.state.amountDue;
    var amountReceived = this.state.amountReceived;
    var m = amountReceived - amountDue;

    var dollars = Math.floor(m);
    var cents = (m - dollars) * 100;

    this.setState({ twenties: Math.floor(dollars / 20) });
    dollars = dollars % 20;

    this.setState({ tens: Math.floor(dollars / 10) });
    dollars = dollars % 10;

    this.setState({ fives: Math.floor(dollars / 5) });
    dollars = dollars % 5;

    this.setState({ ones: dollars });

    this.setState({ quarters: Math.floor(cents / 25) });
    cents = cents % 25;

    this.setState({ dimes: Math.floor(cents / 10) });
    cents = cents % 10;

    this.setState({ nickels: Math.floor(cents / 5) });
    cents = cents % 5;

    this.setState({ pennies: Math.floor(cents / 0.9) });
    cents = cents % .9;

    this.setState({ output: `The total change due is $${(m).toFixed(2)}` });
  }

  render() {

    return (
      <div className="container">
        <h1>Change Calculator</h1>
        <br />
        
        <div className="panel panel-default col-sm-8">
        <div>
        <strong>How much is due </strong><input name="amountDue" type="number" onChange={this.handleEvent} value={this.state.amountDue} />
        </div>

        <div>
        <strong>How much was received</strong><input name="amountReceived" type="number" onChange={this.handleEvent} value={this.state.amountReceived} />
        </div>

        <button className="btn btn-primary" onClick={this.calculate}>calculate</button>
        </div>

        <div className='alert alert-success' id="output">{this.state.output} </div>

        <div>
          <h1>Twenties</h1>
          <p className="change">{this.state.twenties}</p>
        </div>

        <div>
          <h1>Tens</h1>
          <p className="change">{this.state.tens}</p>
        </div>

        <div>
          <h1>Fives</h1>
          <p className="change">{this.state.fives}</p>
        </div>

        <div>
          <h1>Ones</h1>
          <p className="change">{this.state.ones}</p>
        </div>

        <div>
          <h1>Quarters</h1>
          <p className="change">{this.state.quarters}</p>
        </div>

        <div>
          <h1>Dimes</h1>
          <p className="change">{this.state.dimes}</p>
        </div>

        <div>
          <h1>Nickels</h1>
          <p className="change">{this.state.nickels}</p>
        </div>

        <div>
          <h1>Pennies</h1>
          <p className="change">{this.state.pennies}</p>
        </div>

      </div>
    )
  }
}

export default App;
