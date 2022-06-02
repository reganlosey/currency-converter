import { FC, useState, useEffect, ChangeEvent, MouseEvent } from 'react';
import { IExchangeCard, IResponse } from './Interfaces';
import ExchangeCard from './ExchangeCard/ExchangeCard';
import { fetchAvailableCurrencies, fetchConversion } from './apiCalls';
import './App.scss';

const App: FC = () => {
  const [fromType, setFromType] = useState<string>('');
  const [toType, setToType] = useState<string>('');
  const [amount, setAmount] = useState<number | undefined>(undefined);
  const [conversionInfo, setConversionInfo] = useState<IResponse>();
  const [currencyList, setCurrencyList] = useState<string[]>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'fromType':
        setFromType(value.toUpperCase())
        break;
      case 'toType':
        setToType(value.toUpperCase())
        break;
      case "amount":
        setAmount(parseInt(value))
        break;
    }
  }

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


  return (
    <div className="App">
      <div className="main">
        <div className="exchange-form-wrapper">
          <form className="exchange-form">
            <div className="form-input form-input--amount">
              <h2 className="form-text form-text--amount">Amount</h2>
              <label htmlFor="currency-amount-input"></label>
              <input className="amount-input"
                type="number"
                placeholder="(ex:100)"
                name="amount"
                minLength={3}
                maxLength={3}
                value={amount}
                onChange={(e) => handleChange(e)}>
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
          <button className="convert-btn" onClick={(e) => handleClick(e)}>Convert</button>
        </div>
        <div className="exchange-card-wrapper">
          {conversionInfo ? <ExchangeCard conversionInfo={conversionInfo} /> : null}
        </div>
      </div>
    </div>
  )
}

export default App;
