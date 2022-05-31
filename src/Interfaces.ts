export interface IExchangeCard {
  from: string;
  to: string;
  amount: string;
  conversionRate: number;
  convertedAmount: string;
}


export interface IResponse {
  base_currency_code: string;
  base_currency_name: string;
  amount: string;
  updated_date: string;
  rates: {
    [key: string]: {
      currency_name: string;
      rate: string;
      rate_for_amount: string
    }
  };
  status: string
}

export interface IRespArray {
  currencies: string[];
  status: string
}

