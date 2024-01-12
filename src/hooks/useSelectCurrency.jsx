import React from 'react'
import styled from '@emotion/styled'

const useSelectCurrency = (label) => {
  
    const SelectCurrency = () => (
        <>
            <label>{label}</label>
        </>
    )

    return [SelectCurrency]
}

export default useSelectCurrency