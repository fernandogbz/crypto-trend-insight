import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family:'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
    `

const Select = styled.select`

`

const useSelectCurrency = (label, options) => {
  
    const SelectCurrency = () => (
        <>
            <Label>{label}</Label>
            <Select>
                <option value="">Select</option>

                {options.map(option => (
                    <option
                        key={option.id}
                        value={option.id} //This is the value the state is gonna take
                    
                    >{option.name}</option>
                ))}
            </Select>
        </>
    )

    return [SelectCurrency]
}

export default useSelectCurrency