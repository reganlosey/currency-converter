export interface IExchangeCard {
  from: string;
  to: string;
  amount: number;
  conversionRate: number;
  convertedAmount: string;
  conversionInfo: IResponse;
}

export interface IResponse {
  base_currency_code: string;
  base_currency_name: string;
  amount: string;
  updated_date: string;
  rates: {
    fromType: {
      currency_name: string;
      rate: string;
      rate_for_amount: string
    }
  };
  status: string

}