import styled from '@emotion/styled'

const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
  return (
    <div>
        <p>Price is: <span>{PRICE}</span></p>
        <p>Highest price of the day: <span></span>{HIGHDAY}</p>
        <p>Lowest price of the day: <span></span>{LOWDAY}</p>
        <p>Variation last 24 hours: <span></span>{CHANGEPCT24HOUR}</p>
        <p>Last Update: <span></span>{LASTUPDATE}</p>
    </div>
  )
}

export default Result