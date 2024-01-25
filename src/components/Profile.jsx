import styled from "styled-components"

const Container = styled.div`
    width: 250px;
    margin: 20px auto;
`
const Wrapper = styled.div`
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    border-radius: 50%;
    width: 50px;
`
const TextContainer = styled.div`
    flex: 3;
`
const Text = styled.p`
    
`

const Profile = () => {
  return (
    <Container>
       <Wrapper>
        <ImgContainer>
          <Image src={localStorage.getItem('profilePic')} />
        </ImgContainer>
        <TextContainer>
            <Text>{localStorage.getItem('name')}</Text>
            <Text>{localStorage.getItem('email')}</Text>
        </TextContainer>
       </Wrapper>
    </Container>
  )
}

export default Profile