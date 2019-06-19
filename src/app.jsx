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
      output: 'Total change here'
    }

    this.calculate = this.calculate.bind(this);
    this.handleEvent = this.handleEvent.bind(this);
  }

  handleEvent(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculate() {
    var amountDue = this.state.amountDue;
    if (amountDue == '') {
      alert('please type amout due');
      return false;
    }

    var amountReceived = this.state.amountReceived;
    if (amountReceived == '') {
      alert('please type amount received');
      return false;
    }

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
        <h1>Change calculator</h1>
        <hr />

        <div className="row">
          <div className="col-sm-4">
            <div className="panel panel-default">
              <div className="panel panel-heading panel-title text-info">enter information</div>
              <div className="panel-body">
                <strong>How much is due?</strong>
                <br />

                <input type="number" name="amountDue" placeholder="enter amount due" className="amount-due" onChange={this.handleEvent} value={this.state.amountDue} />
              </div>

              <div className="panel-body">
                <strong>How much was received?</strong>
                <input type="number" name="amountReceived" placeholder="enter amount received" className="amount-received" onChange={this.handleEvent} value={this.state.amountReceived} />
              </div>


              <div className="panel panel-footer">
                <button type="button" className="btn btn-primary btn-block" onClick={this.calculate} >Calculate</button>
              </div>

            </div>
          </div>

          <div className='col-md-8 results-wrapper'>
            <div className='panel panel-default'>
              <div className='panel-body'>
                <div className='alert alert-success' id="output">{this.state.output} </div>

                <div className='col-md-3'>
                  <div className='card'>
                    <h4 className='text-center'>Twenties</h4>
                    <p name='output-twenties' className='lead text-center change'>{this.state.twenties}</p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='card'>
                    <h4 className='text-center'>Tens</h4>
                    <p name='output-tens' className='lead text-center change'>{this.state.tens}</p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className="card">
                    <h4 className='text-center'>Fives</h4>
                    <p name='output-fives' className='lead text-center change'>{this.state.fives}</p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='card'>
                    <h4 className='text-center'>Ones</h4>
                    <p name='output-ones' className='lead text-center change'>{this.state.ones}</p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='card'>
                    <h4 className='text-center'>Quarters</h4>
                    <p name='output-quarters' className='lead text-center change'>{this.state.quarters}</p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='card'>
                    <h4 className='text-center'>Dimes</h4>
                    <p name='output-dimes' className='lead text-center change'>{this.state.dimes}</p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='card'>
                    <h4 className='text-center'>Nickels</h4>
                    <p name='output-nickels' className='lead text-center change'>{this.state.nickels}</p>
                  </div>
                </div>

                <div className='col-md-3'>
                  <div className='card'>
                    <h4 className='text-center'>Pennies</h4>
                    <p name='output-pennies' className='lead text-center change'>{this.state.pennies}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default App;
