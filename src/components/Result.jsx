import styled from '@emotion/styled'

const Container = styled.div``

const Text = styled.p``

const Price = styled.div``

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