import { FC } from 'react';
import { IExchangeCard, IResponse } from '../Interfaces';
import './ExchangeCard.scss';

interface Props {
  conversionInfo: IResponse;
}

const ExchangeCard = ({ conversionInfo }: Props) => {
  console.log(conversionInfo)
  return (
    <div className="exchange-card">
      <div className="conversion-info">
        <h2>Base amount in fromType is equivalent to converted amount in toType</h2>
        <h2>The conversion rate from fromType to toType is conversion rate</h2>
      </div>

    </div>

  )



}

export default ExchangeCard;