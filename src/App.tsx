import { FC, useState, ChangeEvent, MouseEvent } from 'react';
import { IExchangeCard, IResponse } from './Interfaces';
import ExchangeCard from './ExchangeCard/ExchangeCard';
import { fetchConversion } from './apiCalls';
import './App.scss';

const App: FC = () => {
  const [fromType, setFromType] = useState<string>('');
  const [toType, setToType] = useState<string>('');
  const [amount, setAmount] = useState<number>(0);
  const [conversionInfo, setConversionInfo] = useState<IResponse>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    switch (name) {
      case 'fromType':
        setFromType(value)
        break;
      case 'toType':
        setToType(value)
        break;
      case "amount":
        setAmount(Number(value))
        break;
    }
  }

  const convertCurrency = async () => {
    const resp = await fetchConversion(fromType, toType, amount)
    setConversionInfo(resp)
  }


  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    convertCurrency()
  }


  return (
    <div className="App">
      <div className="main">
        <div className="exchange-form-wrapper">
          <form className="exchange-form">
            <h2 className="form-text--to">Enter the source currency</h2>
            <input className="form-input form-input--from"
              placeholder="(ex: USD)"
              type="text"
              name="fromType"
              value={fromType}
              onChange={(e) => handleChange(e)}
            >
            </input>
            <h2 className="form-text--from">Rad, and the destination currency</h2>
            <input className="form-input form-input--to"
              type="text"
              placeholder="(ex: GBP)"
              name="toType"
              value={toType}
              onChange={(e) => handleChange(e)}
            >
            </input>
            <h2 className="form-text--amount">Okay and the amount you'd like to convert?</h2>
            <input className="form-input form-input--amount"
              type="number"
              placeholder="(ex:100)"
              name="amount"
              value={amount}
              onChange={(e) => handleChange(e)}
            >
            </input>
            <button className="convert-btn" onClick={(e) => handleClick(e)}>Convert</button>
          </form>
        </div>
        {conversionInfo ? <ExchangeCard conversionInfo={conversionInfo} /> : "Card goes here"}
      </div>
    </div>
  )
}

export default App;
