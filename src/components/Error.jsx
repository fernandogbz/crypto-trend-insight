import styled from '@emotion/styled'

const Text = styled.div`
    background-color: #b7332cab;
    color: #fff;
    padding: 15px;
    border-left: 5px solid #b91c1c;
    border-radius: 0 0.5rem 0.5rem 0;
    font-size: 16px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Text>{children}</Text>
  )
}

export default Error