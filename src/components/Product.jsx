import { ArrowRightOutlined, StarOutline } from "@mui/icons-material"
import styled from "styled-components"
import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../useFetch"
import { useState } from "react"

const Container = styled.div`
  padding: 20px;
  background-color: #45454c;
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
`
const Loading = styled.div`
   color:yellow;
`
const Error = styled.div`
   color:yellow;
`
const Arrow = styled.div`
   position: absolute;
   background-color: white;
   width: 25px;
   height: 25px;
   border-radius: 50%;
   top: 0;
   bottom: 0;
   right: 10px;
   margin: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   opacity: 0.5;
`
const Template = styled.div`
   
`
const ProductContainer = styled.div`
   height: 70vh;
   width: 95vw;
   /* background-color: red; */
   padding: 20px;
   display: flex;
   flex-direction: column;
   color: white;
`
const Wrapper = styled.div`
/* background-color: blue; */
   display: flex;
   height: 60%;
   width: 100vw;
   transform: translate(${(props)=>props.slideIndex * -100}vw);
`
const ImgContainer = styled.div`
  background-color: green;
   display: flex;
   width: 100%;
`
const Image = styled.img`
   height: 100%;
   
`
const Icon = styled.div`
   
`
const InfoContainer = styled.div`
   padding: 0;
   
`
const ProductTitle = styled.h3`
   font-weight: 400;
   font-size: 20px;
`
const ProductPrice = styled.div`
   color: yellow;
   margin: 10px 0;
   font-weight: 300;
   font-size: 23px;
`
const InitialPrice = styled.div`
   color: lightgray;
   text-decoration: line-through;
   font-weight: 200;
   font-size: 18px;
`
const Filters = styled.div`
   margin: 0 20px;
   padding: 20px;
   width: 350px;
   display: flex;
   align-items: center;
   justify-content: space-around;
   border-bottom: 2px solid #646161;
`
const Filter = styled.div`
   background-color: transparent;
   width: 90px;
   height: 90px;
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   cursor: pointer;
   transition: all .5s ease;

   &:hover {
      transform: rotate(15deg);
      background-color: #646161;
   }
`
const Button = styled.button`
    padding: 5px 10px;
    background-color: yellow;
    color: black;
    border-radius: 5px;
    border: none;
    margin: 20px;
    cursor: pointer;

    &:hover {
      color: yellow;
      background-color: black;
   }
`
const FilterImage = styled.img`
   height: 100%;
`

const Product = () => {
   const [slideIndex,setSlideIndex] = useState(0);
   const { id } = useParams();
   const {data:product, isPending, error} = useFetch('http://localhost:8000/products/' + id);
   // console.log(product);
   const navigate = useNavigate();

   const handleClick = (direction)=> {

      setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
   }

   const handleDelete= ()=>{
      fetch('http://localhost:8000/products/' + product.id, {
        method: 'DELETE'
      }).then(()=>{
         navigate('/admin');
      })
   }
   
  return (
   <Container>
       {isPending && <Loading>loading...</Loading> }
       {error && <Error>{error}</Error> }
       <Arrow direction="right" onClick={()=> handleClick('right')}>
            <ArrowRightOutlined/>
       </Arrow>
       {product && (
         <Template>
          <ProductContainer>
            <Wrapper slideIndex={slideIndex} >
          {product.images.map((image)=>(
            <ImgContainer>
             <Image src={ image.url } />
             <Icon>
                <StarOutline/>
             </Icon>
             </ImgContainer> 
               ))}
               </Wrapper>
          <InfoContainer>
             <ProductTitle>{product.title}</ProductTitle>
             <ProductPrice>{product.price}</ProductPrice>
             <InitialPrice>$310.00</InitialPrice>
          </InfoContainer>
       </ProductContainer>
       <Filters>  
     {product.images.map((image)=>(
            <Filter>
            <FilterImage src={ image.url } />
            </Filter>
         ))}
       </Filters>
       <Button onClick={handleDelete} >DELETE</Button>
       </Template>
       )}
      
   </Container>
  )
}

export default Product