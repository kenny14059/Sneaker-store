import { FacebookOutlined, GitHub, Instagram, LinkedIn, Twitter, WhatsApp } from "@mui/icons-material"
import styled from "styled-components"

const Container = styled.div`
  background-color:  #2e2b2b;
  color: #ffffff58;
`
const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const List = styled.ul`

`
const ListItem = styled.li`
   line-height: 40px;
`
const ListTitle = styled.span`
   font-size: 20px;
   font-weight: 700;
   letter-spacing: 1.2;
`

const Footer = () => {
  return (
  <Container>
    <Wrapper>
      <List>
        <ListTitle>About Us</ListTitle>
        <ListItem>Blog</ListItem>
        <ListItem>About</ListItem>
        <ListItem>Contact</ListItem>
        <ListItem>Location</ListItem>
      </List>
      <List>
        <ListTitle>Useful Links</ListTitle>
        <ListItem>Products</ListItem>
        <ListItem>Home</ListItem>
        <ListItem>All Categories</ListItem>
        <ListItem>Account</ListItem>
      </List>
      <List>
        <ListTitle>Socials</ListTitle>
        <ListItem> <WhatsApp/> </ListItem>
        <ListItem> <Instagram/> </ListItem>
        <ListItem> <FacebookOutlined/> </ListItem>
        <ListItem> <Twitter/> </ListItem>
      </List>
      <List>
        <ListTitle>Developer Info</ListTitle>
        <ListItem> <WhatsApp/> </ListItem>
        <ListItem> <GitHub/> </ListItem>
        <ListItem> <LinkedIn/> </ListItem>
        <ListItem> <Twitter/> </ListItem>
      </List>
      </Wrapper>
  </Container>
  )
}

export default Footer