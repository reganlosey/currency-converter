import { useState, useEffect } from 'react';
import { IResponse } from '../Interfaces';
import './ExchangeCard.scss';

interface Props {
  conversionInfo: IResponse;
}


const ExchangeCard = ({ conversionInfo }: Props) => {
  let countryCode = Object.keys(conversionInfo.rates)[0]
  const { currency_name, rate, rate_for_amount } = conversionInfo.rates[countryCode]
  const [baseAmount, setBaseAmount] = useState<string>('');
  const [baseCurrencyName, setBaseCurrencyName] = useState<string>('');
  const [baseCurrencyCode, setBaseCurrencyCode] = useState<string>('');
  const [destCurrencyCode, setDestCurrencyCode] = useState<string>('');
  const [destCurrencyName, setDestCurrencyName] = useState<string>('');
  const [conversionRate, setConversionRate] = useState<string>('');
  const [convertedAmount, setConvertedAmount] = useState<string>('');

  useEffect(() => {
    setConversionRate(rate)
    setBaseAmount(conversionInfo.amount)
    setBaseCurrencyCode(conversionInfo.base_currency_code);
    setConvertedAmount(rate_for_amount);
    setDestCurrencyName(currency_name);
    setDestCurrencyCode(countryCode);
    setBaseCurrencyName(conversionInfo.base_currency_name);
  }, [conversionInfo])




  return (
    <div className="exchange-card">
      <div className="conversion-info">
        <p>{parseFloat(baseAmount).toFixed(2)} in <span className="converted-currency">{baseCurrencyCode}({baseCurrencyName})</span> is equivalent to {parseFloat(convertedAmount).toFixed(2)} in <span className="converted-currency">{destCurrencyCode}({destCurrencyName})</span></p>
        <p>The conversion rate from {baseCurrencyCode} to {destCurrencyCode} is {conversionRate}</p>
      </div>
    </div >

  )



}

export default ExchangeCard;