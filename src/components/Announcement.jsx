import styled from "styled-components"

const Container = styled.div`
    height: 20px;
    color: white;
    background-color: #5ceb5c;
    padding: 20px;
`
const Updates = styled.div`
    flex-wrap: wrap;
    text-align: center;
`

const Announcement = () => {
  return (
    <Container>
       <Updates>
        new sneakers dropping soon, best nike and jordan collection
       </Updates>
    </Container>
  )
}

export default Announcement