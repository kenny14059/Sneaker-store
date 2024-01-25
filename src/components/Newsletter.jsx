import styled from "styled-components"

const Container = styled.div`
    margin: 10px;
    background-color: #2e2b2b;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Wrapper = styled.div`
    background-color: #d8d4e9;
    border-radius: 3px;
    padding: 10px;
    box-shadow: 3px 5px 6px 0px rgba(0,0,0,0.49),
    -3px -5px 6px 0px rgba(0,0,0,0.49);
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    text-align: center;
`
const Desc = styled.div`
    margin: 10px 0;
    width: 80%;
    text-align: center;
`
const InputContainer = styled.div`
    background-color: red;
    display: flex;
    width: 100%;
`
const Input = styled.input`
    flex: 6;
    padding: 5px;
    outline: none;
`
const Button = styled.button`
   flex: 1;
   padding: 0 5px;
   background-color: black;
   color: white;
   border: none;
`

const Newsletter = () => {
  return (
    <Container>
        <Wrapper>
          <Title>
            join our newsletter
          </Title>
          <Desc>weekly FREE new stock updates straight to your inbox</Desc>
          <InputContainer>
            <Input/>
            <Button>Sign Up</Button>
          </InputContainer>
        </Wrapper>
    </Container>
  )
}

export default Newsletter