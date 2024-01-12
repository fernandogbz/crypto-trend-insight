import React from 'react'
import styled from '@emotion/styled'
import useSelectCurrency from '../hooks/useSelectCurrency'

const InputSubmit = styled.input`
    background-color: #9497ff;
    border: none;
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
    
    const currencies = [
        {id: 'USD', name: 'US Dollar'},
        {id: 'MXN', name: 'Mexican Peso'},
        {id: 'EUR', name: 'Euro'},
        {id: 'GBP', name: 'UK Pound'},
    ]

    const [ SelectCurrency ] = useSelectCurrency('Choose your Currency')
    

    
    return (
        <form>
            <SelectCurrency/>

            <InputSubmit 
                type="submit"
                value="Check"
            />
        </form>
    )
}

export default Form