import './Form.scss';
import { FC } from 'react';

const Form: FC = () => {
  return (
    <div className="exchange-form-wrapper">
      <form className="exhange-form">
        <input className="form-input form-input--from">
        </input>
        <input className="form-input form-input--to">
        </input>
      </form>
      <button className="convert-btn">Convert</button>
    </div>

  )



}

export default Form;