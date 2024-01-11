import { useState } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
`

const Heading = styled.h1`
  font-family:'Lato', sans-serif;
  color: #fff;
`

function App() {

  return (
    <Container>
      <Heading>Desde App</Heading>
      
    </Container>
  )
}

export default App
