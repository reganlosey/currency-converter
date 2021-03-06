import { IResponse} from './Interfaces';
const apiKey = process.env.REACT_APP_API_KEY;
export const fetchConversion = async (from: string, to: string, amount: number | undefined) => {
  const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
      'X-RapidAPI-Key': `${apiKey}`
    }
  };

  const resp: Response = await fetch(url, options)
  const respJson: IResponse = await resp.json()
  if (!resp.ok) {
    throw new Error(`Error: ${resp.status}`)
  }
  return respJson
}

export const fetchAvailableCurrencies = async () => {
  const url: string = 'https://currency-converter5.p.rapidapi.com/currency/list'
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
      'X-RapidAPI-Key': `${apiKey}`
    }
  };


  const resp: Response = await fetch(url, options)
  const respJson = await resp.json();
  if (!resp.ok) {
    throw new Error(`Error: ${resp.statusText}`)
  }
  return respJson


}