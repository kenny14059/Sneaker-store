import styled from "styled-components"
import { Link } from 'react-router-dom'
import { signInWithGoogle } from "../firebase"

const Container = styled.div`
    width: 300px;
    height: 400px;
    margin: 20px auto;
`
const Wrapper = styled.div`
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
const UserContainer = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
`
const InfoContainer = styled.div`
      flex: 3;
`
const ProfileContainer = styled.div`
     flex: 1;
`
const Text = styled.p`

`
const ProfilePic = styled.img`
  
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
    text-align: center;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
`

export const UserRoles = {
  User : "User",
  Admin : "Admin User"
}
export var CurrentUserRole = '';

const Account = () => {
     const logout = ()=> {
      localStorage.clear();
     }
     
      if(localStorage.getItem('email')=== 'kenny14059@gmail.com') {
        CurrentUserRole = UserRoles.Admin;
      } 
      if(localStorage.getItem('email')!== 'kenny14059@gmail.com' && localStorage.getItem('email')!== null) {
        CurrentUserRole = UserRoles.User;
      }
  return (
    <Container>
       <Wrapper>
       <Title>LOGIN YOUR ACCOUNT</Title>
       <Button onClick={signInWithGoogle} >Sign In With Google</Button>
       {CurrentUserRole && <Text>You are logged in as <b>{CurrentUserRole}</b> </Text>}
         <UserContainer>
        <ProfileContainer>
        <ProfilePic src={localStorage.getItem('profilePic')} style={{
          width: "50px",
          borderRadius: "50%"
        }} ></ProfilePic>
        </ProfileContainer>
        <InfoContainer>
        <Text>{localStorage.getItem('name')}</Text>
        <Text>{localStorage.getItem('email')}</Text>
        </InfoContainer>
        </UserContainer>
        <Button onClick={logout} >Logout</Button>
        <Create>
            <Link to="/register">Create new account!</Link>
        </Create>
       </Wrapper>
    </Container>
  )
}

export default Account