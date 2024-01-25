import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react"
import { signInWithGoogle } from "../firebase"

const Container = styled.div`
    width: 300px;
    height: 400px;
    margin: 20px auto;
`
const Wrapper = styled.div`
  margin: 20px 0;
  padding: 30px 20px;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
`
const Title = styled.div`
  text-align: center;
  font-weight: 500;
  color: #636161;
`
const Input = styled.input`
    padding: 10px;
    margin: 10px 0;
`
const Button = styled.button`
    border: none;
    padding: 10px;
    margin: 10px 0;
    background-color: #00b241;
    color: white;
    cursor: pointer;
`
const Create = styled.div`
    font-size: 14px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const AccountLink = styled.a`
    color: ${(props)=> props.color};

    &:hover {
      text-decoration: underline;
    }
`
const Agreement = styled.div`
    margin: 5px;  
`
const Bold = styled.b`
    
`
const Register = () => {
     
  return (
    <Container>
       <Wrapper>
        <Title>CREATE NEW ACCOUNT</Title>
        <Button onClick={signInWithGoogle} >Sign In With Google</Button>
        
        {/* <Input placeholder="confirm password" required
        type="password"
        value= {registerConfirmPassword}
         onChange={(e)=> { 
          setRegisterConfirmPassword(e.target.value) }} /> */}
        <Create>
          <Link to="/account">
            <AccountLink  color="blue" >Already have an account.Login!</AccountLink>
            </Link>
            <Agreement>By creating an account I consent to the processing of my personal data in accordancewith the<Bold>PRIVACY POLICY.</Bold></Agreement>
        </Create>
        
       </Wrapper>
    </Container>
  )
}

export default Register