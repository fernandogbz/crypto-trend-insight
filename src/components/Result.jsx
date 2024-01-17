import styled from '@emotion/styled'

const Container = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
`

const Text = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Price = styled.div`
    font-size: 30px;
    span {
        font-weight: 700;
    }
`

const Result = ({result}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = result
  return (
    <Container>
        <Price>Price is: <span>{PRICE}</span></Price>
        <Text>Highest price of the day: <span></span>{HIGHDAY}</Text>
        <Text>Lowest price of the day: <span></span>{LOWDAY}</Text>
        <Text>Variation last 24 hours: <span></span>{CHANGEPCT24HOUR}</Text>
        <Text>Last Update: <span></span>{LASTUPDATE}</Text>
    </Container>
  )
}

export default Result