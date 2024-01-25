import { PersonOutlineOutlined, RoofingOutlined, ShoppingCartOutlined, WidgetsOutlined } from "@mui/icons-material"
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Container = styled.div`
   position: sticky;
   z-index: 4;
   bottom: 0;
   padding: 10px 20px 10px 20px;
   background-color: #0a0a0a;
   color: white;
`
const Icons = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-between;
`
const Icon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`
const IconText = styled.a`
    margin-top: 5px;
    font-weight: 200;
    font-size: 12px;
    color: #b1aeae;
`

const Links = () => {
  return (
    <Container>
       <Icons>
        <Link to="/">
        <Icon>
          <RoofingOutlined/>
          <IconText>Home</IconText>
        </Icon>
        </Link>
        <Icon>
        <WidgetsOutlined/>  
        <IconText>Categories</IconText>
        </Icon>
        <Icon>
        <ShoppingCartOutlined/>
        <IconText>Cart</IconText>
        </Icon>
        <Link to="/account" >
        <Icon>
        <PersonOutlineOutlined/>
        <IconText >Account</IconText>
        </Icon>
        </Link>
       </Icons>
    </Container>
  )
}

export default Links