const apiKey = process.env.REACT_APP_API_KEY;


export const fetchConversion = async (from, to, amount) => {
  const url = `https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}`

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
      'X-RapidAPI-Key': `${apiKey}`
    }
  };

  const resp = await fetch(url, options)
  const respJson = await resp.json()
  if (!resp.ok) {
    throw new Error(`Error: ${resp.status}`)
  }
  console.log(respJson)
  return respJson
} 