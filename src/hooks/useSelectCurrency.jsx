import React from 'react'

const useSelectCurrency = (label) => {
  
    const SelectCurrency = () => (
        <>
            <label>{label}</label>
        </>
    )

    return [SelectCurrency]
}

export default useSelectCurrency