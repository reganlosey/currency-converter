import React, { FC, useState, useEffect } from 'react';
import { IExchangeCard } from './Interfaces';
import Form from './Form/Form';
import { fetchConversion } from './apiCalls';
import './App.scss';

const App: FC = () => {
  useEffect(() => {
    fetchConversion('AUD', 'USD', '5')

  })
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
