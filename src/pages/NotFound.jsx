import { Link } from "react-router-dom"
import styled from "styled-components"
import  image  from '../image/Notfound.png'

const Container = styled.div`
    background-color: #181922;
    height: 70vh;
    color: white;
`
const Wrapper = styled.div`
   display: grid;
   place-items: center;
   height: 80%;
`
const Image = styled.img`
    
`
const Desc = styled.div`
    
`

const NotFound = () => {
  return (
    <Container>
        <Wrapper>
        <Desc>
        This page isn't available yet. Sorry about that 
       </Desc>
       <Image src= {image} />
       <Link to="/"  style= {{
        color:'blueviolet',
        textDecoration: 'underline'
       }} >Click here to move to the homepage</Link>
      </Wrapper>
    </Container>
  )
}

export default NotFound