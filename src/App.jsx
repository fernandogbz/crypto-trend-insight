import { useState } from 'react'
import styled from '@emotion/styled'
import CryptoImage from './img/crypto-image.png'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family:'Lato', sans-serif;
  color: #fff;
`

function App() {

  return (
    <Container>
      <Image
        src={CryptoImage}
        alt='crypto image'
      />
      <Heading>Desde App</Heading>
      
    </Container>
  )
}

export default App
