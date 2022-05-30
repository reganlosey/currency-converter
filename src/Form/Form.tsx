import './Form.scss';
import { FC, useState } from 'react';

const Form: FC = () => {
  const [source, setSource] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [converted, setConverted] = useState<number>(0);


  return (
    <div className="exchange-form-wrapper">
      <form className="exchange-form">
        <h2 className="form-text--to">Enter the source currency</h2>
        <input className="form-input form-input--from" placeholder="(ex: USD)">
        </input>
        <h2 className="form-text--from">Rad, and the destination currency</h2>
        <input className="form-input form-input--to" placeholder="(ex: GBP)">
        </input>
        <button className="convert-btn">Convert</button>
      </form>
    </div>

  )



}

export default Form;