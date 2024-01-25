import { FacebookOutlined, Instagram, Twitter, WhatsApp } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
    color:white;
    background-color:  #2e2b2b;
    padding: 20px;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
`
const Social = styled.div`
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0d0c0f;
`
const Title = styled.h2`
    
`
const Info = styled.div`
    margin: 20px 0;
`
const Icons = styled.div`
    display: flex;
    justify-content: space-between;
`
const Icon = styled.div`
   width: 30px;
   height: 30px;
   border-radius: 50%;
   margin: 0 5px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${ props=> props.bgIcon };
   cursor: pointer;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    background-color: lightgreen;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`
const Text = styled.div`
    margin: 15px 0;
`
const Location = styled.div`
   flex: 1;
   background-color: #0d0c0f;
   padding: 20px;
   display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
const LocationTexts = styled.div`
    
`
const LocationText = styled.div`
    
`


const Contact = () => {
  return (
   <Container>
    <Social>
        <Title>M.H Sneakers</Title>
        <Info>FOLLOW US</Info>
        <Icons>
            <Icon bgIcon="blue" >
               <FacebookOutlined/> 
            </Icon>
            <Icon bgIcon="navy">
               <Twitter/> 
            </Icon>
            <Icon bgIcon="red">
               <Instagram/> 
            </Icon>
            <Icon bgIcon="lightgreen">
               <WhatsApp/> 
            </Icon>
        </Icons>
    </Social>
    <Center>
        <WhatsApp/>
        <Text>REACH US ON WHATSAPP</Text>  
    </Center>
    <Location>
        <LocationTexts>
           <LocationText>M.H Sneakers LTD</LocationText>
           <LocationText style={{ margin:" 10px 0" }} >Contact Us:0712345678</LocationText>
           <LocationText>Email Us:order@gmail.com</LocationText>
        </LocationTexts>
    </Location>
   </Container>
  )
}

export default Contact