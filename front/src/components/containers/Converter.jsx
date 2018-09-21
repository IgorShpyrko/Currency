import React, { Component } from 'react';

const styles = {
  converterWrapper: {
    width: '700px',
    margin: '0 auto',
  },
  inputWrapper: {
    width: '200px',
    position: 'relative'
  },
  input: {
    width: '100%'
  },
  changeValueWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  clearIcon: {
    position: 'absolute',
    right: '10px',
    top: '0',
    cursor: 'pointer',
    borderRadius: '50%'
  }
}

export default class Converter extends Component {
  state = { 
    value: '',
    from: 'usd',
    to: 'usd',
    currencyPrices: null,
    isActiveWarning: false,
    loadError: false,
    prices: null,
    result: 0
  }

  handleConvert = () => {
    this.setState({
      isActiveWarning: false
    })
    if(this.state.prices === null){
      this.setState({
        loadError: true
      })
    }
    let result = ( this.state.value / this.state.prices[this.state.from] ) * this.state.prices[this.state.to]
    result = result.toFixed(2) 
    this.setState({
      result: result
    })
  }

  handleChangeFrom = (e) => {
    this.setState({
      from: e.target.value
    })
  }

  handleChangeTo = (e) => {
    this.setState({
      to: e.target.value
    })
  }

  clearValue = () => {
    this.setState({
      value: '',
      result: 0
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.loadError === true){
      setTimeout(() => {
        this.setState({
          loadError: false
        })
      }, 3000);
    }
  }

  handleChangeValue = (e) => {
    if(e.target.value === '' || e.target.value === ' '){
      this.clearValue()
    }

    let val = parseFloat(e.target.value, 10)

    if(isNaN(val)){
      this.setState({
        isActiveWarning: true
      })
      return
    }

    this.setState({
      value: e.target.value,
      isActiveWarning: false
    })
  }

  componentDidMount() {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'http://localhost:3010/', true);
      
    xhr.send(null)

    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && xhr.status !== 200){
        this.setState({
          loadError: true
        })
      }
      if(xhr.readyState === 4){
        this.setState({
          prices: JSON.parse(xhr.responseText)
        })
      }
    }
  }

  render() {
    const { loadError, isActiveWarning, result } = this.state
    return (
      <div className='converterWrapper' style={styles.converterWrapper}>
        <h2>Welcome to currency converter</h2>
        <div className='changeValueWrapper' style={styles.changeValueWrapper}>
          <div className='inputWrapper' style={styles.inputWrapper}>
            <input 
              style={styles.input}
              type="text" 
              value={this.state.value} 
              placeholder='enter a value to convert' 
              onChange={this.handleChangeValue}/>
            <span className='clearIcon' style={styles.clearIcon} onClick={this.clearValue}>&times;</span>
          </div>
          {isActiveWarning && <span>you can enter only a numeric value</span>}
        </div>
        <label htmlFor="from">from</label>
        <select id='from' onChange={this.handleChangeFrom}>
          <option value="usd">usd</option>
          <option value="grn">grn</option>
          <option value="eur">eur</option>
        </select>
        <label htmlFor="to">to</label>
        <select id='to' onChange={this.handleChangeTo}>
          <option value="usd">usd</option>
          <option value="grn">grn</option>
          <option value="eur">eur</option>
        </select>
        <button onClick={this.handleConvert} disabled={loadError && true}>Convert</button>
        {loadError && 
          <div className="error-message">
            Couldn`t load data from server
          </div>
        }
        <div>Result:  {result}</div>
      </div>
    );
  }
}

//currencyConverter
  //input value to convert
  //select from to
  //button convert
  //result
