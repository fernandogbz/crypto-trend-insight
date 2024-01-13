import React from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
`

const useSelectCurrency = (label, options) => {
  
    const SelectCurrency = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">Select</option>

            </select>
        </>
    )

    return [SelectCurrency]
}

export default useSelectCurrency