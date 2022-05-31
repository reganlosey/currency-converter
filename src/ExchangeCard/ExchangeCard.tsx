import { FC, useState, useEffect } from 'react';
import { IExchangeCard, IResponse } from '../Interfaces';
import './ExchangeCard.scss';

interface Props {
  conversionInfo: IResponse;
}


const ExchangeCard = ({ conversionInfo }: Props) => {
  let countryCode = Object.keys(conversionInfo.rates)[0]
  const { currency_name, rate, rate_for_amount } = conversionInfo.rates[countryCode]
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
        {/* parseFloat("123.456").toFixed(2); */}
        <h2>{parseFloat(baseAmount).toFixed(2)} in <span className="converted-currency">{baseCurrencyName}</span> is equivalent to {parseFloat(convertedAmount).toFixed(2)} in <span className="converted-currency">{destCurrencyName}</span></h2>
        <h2>The conversion rate from <span style={{ textTransform: "capitalize"}}>{baseCurrencyName}</span> to <span className="converted-currency">{destCurrencyName}</span> is {conversionRate}</h2>
    </div>

    </div >

  )



}

export default ExchangeCard;