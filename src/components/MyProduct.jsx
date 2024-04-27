import { ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import  item  from '../image/nikewhite.png'
import useFetch from "../useFetch"

const Container = styled.div`
  width: 90vw;
  margin: 10px auto;
`
const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 20px;
`
const ImgContainer = styled.div`
    margin-right: 20px;
    width: 300px;
    transition: all 1.5s ease;
  transform: translate(${props=>props.slideIndex * -100}vw);
`
const Image = styled.img`
   width: 100%;
`
const Arrow = styled.div`
     background-color: #2b2525;
     cursor: pointer;
     margin: 5px;
     width: 25px;
     height: 25px;
     border-radius: 50%;
`
const InfoContainer = styled.div`
   padding: 20px;
   width: 50%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`
const ProductTitle = styled.h2`
  
`
const ProductPrice = styled.h2`
        
`
const ProductDesc = styled.p`
    width: 40%;
    margin: 20px 0;
`
const Button = styled.div`
    background-color: black;
    color: yellow;
    padding: 6px 15px;
    border-radius: 3px;
    cursor: pointer;

    &:hover {
        background-color: yellow;
        color: black;
    }
`
const Loading = styled.div`
   color: yellow;
`
const Error = styled.div `
  color: yellow;
`

const MyProduct = () => {
  const { id } = useParams();
  const {data:product, isPending, error} = useFetch('http://localhost:8000/products/' + id);
  
  const [slideIndex,setSlideIndex] = useState(0);

  const handleClick = (direction)=> {
    if(direction === 'right'){
      setSlideIndex(slideIndex < 2? slideIndex+1: 0)
    }
 }

  return (
    <Container>
             {isPending && <Loading>loading...</Loading> }
             {error && <Error>{error}</Error> }
     {product && ( 
      <Wrapper>
                          {product.images.map((image) => (
                  <ImgContainer slideIndex= {slideIndex} key={product.id}>
                  <Image src={image.url} alt="my product"  />
                </ImgContainer>
                ))}
                <Arrow direction="right" onClick={()=> handleClick('right')}>
                    <ArrowRightOutlined/>
                  </Arrow>
        <InfoContainer>
             <ProductTitle>{product.title} </ProductTitle>
             <ProductPrice>{product.price}</ProductPrice>
             <ProductDesc>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur labore mollitia,
                 a temporibus repellendus fugiat!
             </ProductDesc>
             <Button >Order Now!</Button>
        </InfoContainer>
      </Wrapper>
      )}
    </Container>
  )
}

export default MyProduct