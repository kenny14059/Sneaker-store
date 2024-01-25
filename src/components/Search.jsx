import { BlurOn, Clear, ExpandMore } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-top: .5px solid gray;
    background-color: #161616;
    height: 25%;
`
const Wrapper = styled.div`
   padding: 20px;
   display: flex;
   align-items: center;
   flex-wrap: wrap;

`
const InputContainer = styled.div`
    background-color: white;
    border-radius: 20px;
    border: 0.5px solid black;
    display: flex;
    align-items: center;
    padding: 10px;
    width: 65%;
    margin-right: 10px;
`
const Input = styled.input`
    padding-left: 10px;
    width: 90%;
    border: none;
    outline: none;
`
const TextContainer = styled.div`
   background-color: ${props =>props.color === 'red'? 'red': '#201f24' } ;
   color: white;
   opacity: 0.7;
   border-radius: 20px;
   border: 0.5px solid whitesmoke;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 10px;
   cursor: pointer;
   margin: 10px 10px 10px 0px;
`
const Text = styled.div`
    font-size: .8rem;
    letter-spacing: 2px;
`

const Search = () => {
  return (
     <Container>
        <Wrapper>
            <InputContainer>
              <Input  placeholder='yeezy inertia'  />
               <ExpandMore style= {{ cursor: 'pointer' }} />
            </InputContainer>
            <TextContainer>
            <Text color="red">FILTER!</Text>
             <BlurOn/>
            </TextContainer>
            <TextContainer>
            <Text>Yeezy</Text>
             <Clear/>
            </TextContainer>
            <TextContainer>
            <Text>nike jordan</Text>
             <Clear/>
            </TextContainer>
            <TextContainer>
            <Text>kobe</Text>
             <Clear/>
            </TextContainer>
            <TextContainer>
            <Text>under amor</Text>
             <Clear/>
            </TextContainer>            
        </Wrapper>
     </Container>
  )
}

export default Search