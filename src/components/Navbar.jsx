import { Abc, Search, ShoppingBagOutlined } from '@mui/icons-material'
import styled from 'styled-components'
import Announcement from './Announcement'
import { Link } from 'react-router-dom'

const Container = styled.div`
   background-color: #0d0c0f;
   color: white;
`
const Wrapper = styled.div`
   padding: 10px 20px; 
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
`

const Bottom = styled.div`
    
`
const Logo = styled.div`
    text-align: center;
    font-weight: 600;
    font-size: 25px;
`

const Navbar = () => {
  return (
      <Container>
            <Announcement/>
        <Wrapper>
        <Top>
            <Link to="/" >
            <IconContainer>
               <Abc />
            </IconContainer>
            </Link>
            <IconContainer>
                <ShoppingBagOutlined/>
                <Search  style= {{ marginLeft: '40px' }} />
            </IconContainer>
        </Top>
        <Bottom>
            <Logo>
                <Link to="/admin">M.H</Link>
            </Logo>
        </Bottom>
        </Wrapper>
      </Container>
  )
}

export default Navbar