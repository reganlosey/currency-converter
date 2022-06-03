import { FC, useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { IExchangeCard, IResponse } from './Interfaces';
import ExchangeCard from './ExchangeCard/ExchangeCard';
import { fetchAvailableCurrencies, fetchConversion } from './apiCalls';
import './App.scss';

const App: FC = () => {
  const [fromType, setFromType] = useState<string>('');
  const [toType, setToType] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [conversionInfo, setConversionInfo] = useState<IResponse>();
  const [currencyList, setCurrencyList] = useState<string[]>();

  useEffect(() => {
    getCurrencyList()
  }, [])

  const getData = async () => {
    const currencyDataResp = await fetchConversion(fromType, toType, amount)
    setConversionInfo(currencyDataResp)
  }

  const getCurrencyList = async () => {
    const availCurrenciesResp = await fetchAvailableCurrencies()
    const currencies = Object.keys(availCurrenciesResp.currencies)
    const sorted = currencies.sort((a, b) => {
      return a > b ? 1 : -1
    })
    setCurrencyList(sorted)
  }


  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    getData()
  }

  const handleFocus = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.select()
  }


  return (
    <div className="App">
      <h1 className="heading">Currency Converter</h1>
      <div className="main">
        <div className="exchange-form-wrapper">
          <form className="exchange-form">
            <div className="form-input form-input--amount">
              <h2 className="form-text form-text--amount">Amount</h2>
              <label htmlFor="currency-amount-input"></label>
              <input className="amount-input"
                type="number"
                placeholder="1.00"
                name="amount"
                value={amount === 0 ? '' : amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                onFocus={(e) => handleFocus(e)}
              >
              </input>
            </div>
            <div className="form-input form-input--to">
              <h2 className="form-text form-text--to">From:</h2>
              <label htmlFor="source-currency-select"></label>
              <select
                className="currency-select currency-select--source"
                onChange={(e) => setFromType(e.target.value)}>
                <option value="Select A Currency Type">Currency Code</option>
                {currencyList?.map((option, index) => <option key={index} value={option}>{option}</option>)}
              </select>
            </div>
            <div className="form-input form-input--from">
              <h2 className="form-text form-text--from">To:</h2>
              <label htmlFor="destination-currency-select"></label>
              <select
                className="currency-select currency-select--dest"
                onChange={(e) => setToType(e.target.value)}>
                <option value="Select A Currency Type">Currency Code</option>
                {currencyList?.map((option, index) => <option key={index} value={option}>{option}</option>)}
              </select>
            </div>
          </form>
        </div>
        <button className="convert-btn" disabled={!amount ? true : false} onClick={(e) => handleClick(e)}>Convert</button>
        <div className="exchange-card-wrapper">
          {conversionInfo ? <ExchangeCard conversionInfo={conversionInfo} /> : <h2 style={{ textAlign: 'center' }}>Please complete the form above to view conversion data</h2>}
        </div>
      </div>
    </div >
  )
}

export default App;
