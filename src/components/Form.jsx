import {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import useSelectCurrencies from '../hooks/useSelectCurrencies'
import { currencies } from '../data/currencies'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
    margin-top: 30px;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Form = () => {

    const [cryptos, setCryptos] = useState([])
    
    const [ currency, SelectCurrencies ] = useSelectCurrencies('Choose your Currency', currencies)
    
    // This effect will execute when the component is loaded, since it has no dependency, it will be executed just once, when it's ready and going to query our API, bring us the results.That is ideal, that it should only be consulted once when the entire document is ready.
    useEffect(() => {
      const queryAPI = async () => {
        const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        const response = await fetch(url)
        const result = await response.json()

        const cryptosArray = result.Data.map(crypto => {

            const object = {
                id: crypto.CoinInfo.Name,
                name: crypto.CoinInfo.FullName
            }

            return object
        })

        setCryptos(cryptosArray)
      }
      queryAPI();
    }, [])
    
    return (
        <form>
            <SelectCurrencies
            />
            
            <InputSubmit 
                type="submit"
                value="Check"
            />
        </form>
    )
}

export default Form