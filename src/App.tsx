import React, { FC, useState } from 'react';
import { IExchangeCard } from './Interfaces';
import Form from './Form/Form';
import './App.scss';

const App: FC = () => {
  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [converted, setConverted] = useState<number>(0);
  return (
    <div className="App">
      <div className="main">
        <Form />
        <div className="card-wrapper">
          <div className="exchange-card">
            <h2>$amount in {'FROM'} currency is worth $amount in {'TO'} currency</h2>
          </div>
        </div>
      </div>
    </div>
  )


}

export default App;
