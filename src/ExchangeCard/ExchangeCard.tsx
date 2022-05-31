import { FC, useState, useEffect } from 'react';
import { IExchangeCard, IResponse } from '../Interfaces';
import './ExchangeCard.scss';

interface Props {
  conversionInfo: IResponse;
}


const ExchangeCard = ({ conversionInfo }: Props) => {
  let countryCode = Object.keys(conversionInfo.rates)[0]
  const { currency_name, rate, rate_for_amount } = conversionInfo.rates[countryCode]
  // console.log(currency_name, rate, rate_for_amount)
  // const [ratesInfo, setRatesInfo] = useState<object>();
  const [baseAmount, setBaseAmount] = useState<string>('');
  const [baseCurrencyName, setBaseCurrencyName] = useState<string>('');
  const [destCurrencyName, setDestCurrencyName] = useState<string>('');
  const [conversionRate, setConversionRate] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<string>('');

  useEffect(() => {
    setConversionRate(rate)
    setBaseAmount(conversionInfo.amount)
    setConvertedAmount(rate_for_amount);
    setDestCurrencyName(currency_name);
    setBaseCurrencyName(conversionInfo.base_currency_name);
  }, [])



  return (
    <div className="exchange-card">
      <div className="conversion-info">
        <h2>Base amount in {conversionInfo.base_currency_code} is equivalent to converted amount in toType</h2>
        <h2>The conversion rate from fromType to toType is conversion rate</h2>
      </div>

    </div>

  )



}

export default ExchangeCard;